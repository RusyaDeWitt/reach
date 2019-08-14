import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Answers } from '../../api/answers.js';

import Answer from './Answer.js';
import AccountsUIWrapper from '../AccountsUIWrapper.js';

// App component - represents the whole app
class AnswersParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
      selectedName: "Выберите имя",
    };
  }

  selectVideo(event) {
    this.setState({
      selectedName: event.target.value,
    });
    console.log(event.target.value)
  }

  renderAnswers() {
    let filteredAnswers = this.props.answers;
    if (this.state.hideCompleted) {
      filteredAnswers = filteredAnswers.filter(answer => !answer.checked);
    }
    return filteredAnswers.map((answer) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = answer.owner === currentUserId;
      if(this.state.selectedName == answer.name){
        return (
          <Answer
            key={answer._id}
            answer={answer}
            showPrivateButton={showPrivateButton}
          />
        );
      }
    });
  }

  render() {
    const answers = this.props.answers.map ((answer) => answer.name);
    return (
      <div className="container">
        <header>
          <h1>Ответы учеников ({this.props.incompleteCount})</h1>
          <select onChange={this.selectVideo.bind(this)} value={this.state.selectedName}>
            <option key={0} disabled>
              Выберите имя
            </option>
            {answers.map((answer, i) => (
            <option key={i}>
              {answer}
            </option>))}
          </select>
          <AccountsUIWrapper />

        </header>

        <ul>
          {this.renderAnswers()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('answers');

  return {
    answers: Answers.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Answers.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
})(AnswersParent);