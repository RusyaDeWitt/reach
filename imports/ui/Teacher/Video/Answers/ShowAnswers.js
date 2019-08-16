import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Answers } from '../../../../api/answers.js';

import Answer from './Answer.js';
import AccountsUIWrapper from '../../../AccountsUIWrapper.js';

// App component - represents the whole app
class AnswersTeacher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
      selectedVideo: "Выберите видео",
    };
  }

  selectVideo(event) {
    this.setState({
      selectedVideo: event.target.value,
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
      if(this.state.selectedVideo == answer.title){
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
    const allAnswers = this.props.answers.map ((answer) => answer.title);
    let answers = [...new Set(allAnswers)];
    return (
      <div className="container">
        <header>
          <h1>Ответы учеников</h1>
          <select onChange={this.selectVideo.bind(this)} value={this.state.selectedVideo} >
            <option key={0} disabled>
              Выберите видео
            </option>
            {answers.map((answer, i) => (
            <option key={i}>
              {answer}
            </option>))}
          </select>
          <AccountsUIWrapper />

        </header>
        <div>
          {this.renderAnswers()}
        </div>
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
})(AnswersTeacher);
