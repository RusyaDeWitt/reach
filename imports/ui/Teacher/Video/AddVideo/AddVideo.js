import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../../../../api/tasks.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Task from './Task.js';
import AccountsUIWrapper from '../../../AccountsUIWrapper.js';

// App component - represents the whole app
class Teacher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
      questions: 0,
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const title = ReactDOM.findDOMNode(this.refs.title).value.trim();
    const url = ReactDOM.findDOMNode(this.refs.url).value.trim();
    const questionsNum = this.state.questions;
    const question1 = ReactDOM.findDOMNode(this.refs.question1).value.trim();
    const firstAnswer1 = ReactDOM.findDOMNode(this.refs.firstAnswer1).value.trim();
    const secondAnswer1 = ReactDOM.findDOMNode(this.refs.secondAnswer1).value.trim();
    const thirdAnswer1 = ReactDOM.findDOMNode(this.refs.thirdAnswer1).value.trim();
    const question2 = ReactDOM.findDOMNode(this.refs.question2).value.trim();
    const firstAnswer2 = ReactDOM.findDOMNode(this.refs.firstAnswer2).value.trim();
    const secondAnswer2 = ReactDOM.findDOMNode(this.refs.secondAnswer2).value.trim();
    const thirdAnswer2 = ReactDOM.findDOMNode(this.refs.thirdAnswer2).value.trim();
    const question3 = ReactDOM.findDOMNode(this.refs.question3).value.trim();
    const firstAnswer3 = ReactDOM.findDOMNode(this.refs.firstAnswer3).value.trim();
    const secondAnswer3 = ReactDOM.findDOMNode(this.refs.secondAnswer3).value.trim();
    const thirdAnswer3 = ReactDOM.findDOMNode(this.refs.thirdAnswer3).value.trim();
    const question4 = ReactDOM.findDOMNode(this.refs.question4).value.trim();
    const firstAnswer4 = ReactDOM.findDOMNode(this.refs.firstAnswer4).value.trim();
    const secondAnswer4 = ReactDOM.findDOMNode(this.refs.secondAnswer4).value.trim();
    const thirdAnswer4 = ReactDOM.findDOMNode(this.refs.thirdAnswer4).value.trim();
    const question5 = ReactDOM.findDOMNode(this.refs.question5).value.trim();
    const firstAnswer5 = ReactDOM.findDOMNode(this.refs.firstAnswer5).value.trim();
    const secondAnswer5 = ReactDOM.findDOMNode(this.refs.secondAnswer5).value.trim();
    const thirdAnswer5 = ReactDOM.findDOMNode(this.refs.thirdAnswer5).value.trim();
    const question6 = ReactDOM.findDOMNode(this.refs.question6).value.trim();
    const firstAnswer6 = ReactDOM.findDOMNode(this.refs.firstAnswer6).value.trim();
    const secondAnswer6 = ReactDOM.findDOMNode(this.refs.secondAnswer6).value.trim();
    const thirdAnswer6 = ReactDOM.findDOMNode(this.refs.thirdAnswer6).value.trim();
    const question7 = ReactDOM.findDOMNode(this.refs.question7).value.trim();
    const firstAnswer7 = ReactDOM.findDOMNode(this.refs.firstAnswer7).value.trim();
    const secondAnswer7 = ReactDOM.findDOMNode(this.refs.secondAnswer7).value.trim();
    const thirdAnswer7 = ReactDOM.findDOMNode(this.refs.thirdAnswer7).value.trim();
    const question8 = ReactDOM.findDOMNode(this.refs.question8).value.trim();
    const firstAnswer8 = ReactDOM.findDOMNode(this.refs.firstAnswer8).value.trim();
    const secondAnswer8 = ReactDOM.findDOMNode(this.refs.secondAnswer8).value.trim();
    const thirdAnswer8 = ReactDOM.findDOMNode(this.refs.thirdAnswer8).value.trim();
    const question9 = ReactDOM.findDOMNode(this.refs.question9).value.trim();
    const firstAnswer9 = ReactDOM.findDOMNode(this.refs.firstAnswer9).value.trim();
    const secondAnswer9 = ReactDOM.findDOMNode(this.refs.secondAnswer9).value.trim();
    const thirdAnswer9 = ReactDOM.findDOMNode(this.refs.thirdAnswer9).value.trim();
    const question10 = ReactDOM.findDOMNode(this.refs.question10).value.trim();
    const firstAnswer10 = ReactDOM.findDOMNode(this.refs.firstAnswer10).value.trim();
    const secondAnswer10 = ReactDOM.findDOMNode(this.refs.secondAnswer10).value.trim();
    const thirdAnswer10 = ReactDOM.findDOMNode(this.refs.thirdAnswer10).value.trim();

    Meteor.call('tasks.insert', title, url, questionsNum, question1, firstAnswer1, secondAnswer1, thirdAnswer1, question2, firstAnswer2, secondAnswer2, thirdAnswer2, question3, firstAnswer3, secondAnswer3, thirdAnswer3, question4, firstAnswer4, secondAnswer4, thirdAnswer4, question5, firstAnswer5, secondAnswer5, thirdAnswer5, question6, firstAnswer6, secondAnswer6, thirdAnswer6, question7, firstAnswer7, secondAnswer7, thirdAnswer7, question8, firstAnswer8, secondAnswer8, thirdAnswer8, question9, firstAnswer9, secondAnswer9, thirdAnswer9, question10, firstAnswer10, secondAnswer10, thirdAnswer10);

    // Clear form
    ReactDOM.findDOMNode(this.refs.title).value = '';
    ReactDOM.findDOMNode(this.refs.url).value = '';
    ReactDOM.findDOMNode(this.refs.question1).value = '';
    ReactDOM.findDOMNode(this.refs.firstAnswer1).value = '';
    ReactDOM.findDOMNode(this.refs.secondAnswer1).value = '';
    ReactDOM.findDOMNode(this.refs.thirdAnswer1).value = '';
    ReactDOM.findDOMNode(this.refs.question2).value = '';
    ReactDOM.findDOMNode(this.refs.firstAnswer2).value = '';
    ReactDOM.findDOMNode(this.refs.secondAnswer2).value = '';
    ReactDOM.findDOMNode(this.refs.thirdAnswer2).value = '';
    ReactDOM.findDOMNode(this.refs.question3).value = '';
    ReactDOM.findDOMNode(this.refs.firstAnswer3).value = '';
    ReactDOM.findDOMNode(this.refs.secondAnswer3).value = '';
    ReactDOM.findDOMNode(this.refs.thirdAnswer3).value = '';
    ReactDOM.findDOMNode(this.refs.question4).value = '';
    ReactDOM.findDOMNode(this.refs.firstAnswer4).value = '';
    ReactDOM.findDOMNode(this.refs.secondAnswer4).value = '';
    ReactDOM.findDOMNode(this.refs.thirdAnswer4).value = '';
    ReactDOM.findDOMNode(this.refs.question5).value = '';
    ReactDOM.findDOMNode(this.refs.firstAnswer5).value = '';
    ReactDOM.findDOMNode(this.refs.secondAnswer5).value = '';
    ReactDOM.findDOMNode(this.refs.thirdAnswer5).value = '';
    ReactDOM.findDOMNode(this.refs.question6).value = '';
    ReactDOM.findDOMNode(this.refs.firstAnswer6).value = '';
    ReactDOM.findDOMNode(this.refs.secondAnswer6).value = '';
    ReactDOM.findDOMNode(this.refs.thirdAnswer6).value = '';
    ReactDOM.findDOMNode(this.refs.question7).value = '';
    ReactDOM.findDOMNode(this.refs.firstAnswer7).value = '';
    ReactDOM.findDOMNode(this.refs.secondAnswer7).value = '';
    ReactDOM.findDOMNode(this.refs.thirdAnswer7).value = '';
    ReactDOM.findDOMNode(this.refs.question8).value = '';
    ReactDOM.findDOMNode(this.refs.firstAnswer8).value = '';
    ReactDOM.findDOMNode(this.refs.secondAnswer8).value = '';
    ReactDOM.findDOMNode(this.refs.thirdAnswer8).value = '';
    ReactDOM.findDOMNode(this.refs.question9).value = '';
    ReactDOM.findDOMNode(this.refs.firstAnswer9).value = '';
    ReactDOM.findDOMNode(this.refs.secondAnswer9).value = '';
    ReactDOM.findDOMNode(this.refs.thirdAnswer9).value = '';
    ReactDOM.findDOMNode(this.refs.question10).value = '';
    ReactDOM.findDOMNode(this.refs.firstAnswer10).value = '';
    ReactDOM.findDOMNode(this.refs.secondAnswer10).value = '';
    ReactDOM.findDOMNode(this.refs.thirdAnswer10).value = '';
    this.setState({
      questions: 0,
    });
  }

  addQuestion() {
    if(this.state.questions >= 10){
      console.log("Нельзя добавить более 10 вопросов")
    }
    else {
      this.setState({
        questions: this.state.questions + 1,
      });
    }
  }

  removeQuestion() {
    if(this.state.questions <= 0){
      console.log("Нельзя добавить менее 0 вопросов")
    }
    else {
      this.setState({
        questions: this.state.questions - 1,
      });
    }
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1 className="add-video-header">Добавить видео</h1>
            <AccountsUIWrapper />
          { this.props.currentUser ?
            <div className="task-container">
              <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                <input
                  type="text"
                  ref="title"
                  placeholder="Название видео"
                />
              </form>
              <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                <input
                  type="text"
                  ref="url"
                  placeholder="Ссылка на видео"
                />
              </form>
              <p className="question-paragraph">Добавить вопрос:
              <button className="delete-button" onClick={this.removeQuestion.bind(this)}>Удалить</button>
              <button className="add-button" onClick={this.addQuestion.bind(this)}>Добавить</button>
              </p>
              {this.state.questions >= 1 ?
              <div className="task-container">
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question1"
                    placeholder="Вопрос 1"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="firstAnswer1"
                    placeholder="Ответ 1"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="secondAnswer1"
                    placeholder="Ответ 2"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="thirdAnswer1"
                    placeholder="Ответ 3"
                  />
                </form>
                <br />
              </div>:
              <div className="hidden">
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question1"
                    placeholder="Вопрос 1"
                  />
                  <input
                    type="text"
                    ref="firstAnswer1"
                    placeholder="Ответ 1"
                  />
                  <input
                    type="text"
                    ref="secondAnswer1"
                    placeholder="Ответ 2"
                  />
                  <input
                    type="text"
                    ref="thirdAnswer1"
                    placeholder="Ответ 3"
                  />
                </form>
              </div>}
              {this.state.questions >= 2 ?
              <div>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question2"
                    placeholder="Вопрос 2"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="firstAnswer2"
                    placeholder="Ответ 1"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="secondAnswer2"
                    placeholder="Ответ 2"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="thirdAnswer2"
                    placeholder="Ответ 3"
                  />
                </form>
                <br />
              </div>:
              <div className="hidden">
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question2"
                    placeholder="Вопрос 2"
                  />
                  <input
                    type="text"
                    ref="firstAnswer2"
                    placeholder="Ответ 1"
                  />
                  <input
                    type="text"
                    ref="secondAnswer2"
                    placeholder="Ответ 2"
                  />
                  <input
                    type="text"
                    ref="thirdAnswer2"
                    placeholder="Ответ 3"
                  />
                </form>
              </div>}
              {this.state.questions >= 3 ?
              <div>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question3"
                    placeholder="Вопрос 3"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="firstAnswer3"
                    placeholder="Ответ 1"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="secondAnswer3"
                    placeholder="Ответ 2"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="thirdAnswer3"
                    placeholder="Ответ 3"
                  />
                </form>
                <br />
              </div>:
              <div className="hidden">
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question3"
                    placeholder="Вопрос 3"
                  />
                  <input
                    type="text"
                    ref="firstAnswer3"
                    placeholder="Ответ 1"
                  />
                  <input
                    type="text"
                    ref="secondAnswer3"
                    placeholder="Second answer of question 3"
                  />
                  <input
                    type="text"
                    ref="thirdAnswer3"
                    placeholder="Ответ 3"
                  />
                </form>
              </div>}
              {this.state.questions >= 4 ?
              <div>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question4"
                    placeholder="Вопрос 4"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="firstAnswer4"
                    placeholder="Ответ 1"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="secondAnswer4"
                    placeholder="Ответ 2"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="thirdAnswer4"
                    placeholder="Ответ 3"
                  />
                </form>
                <br />
              </div>:
              <div className="hidden">
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question4"
                    placeholder="Вопрос 4"
                  />
                  <input
                    type="text"
                    ref="firstAnswer4"
                    placeholder="Ответ 1"
                  />
                  <input
                    type="text"
                    ref="secondAnswer4"
                    placeholder="Second answer of question 4"
                  />
                  <input
                    type="text"
                    ref="thirdAnswer4"
                    placeholder="Ответ 3"
                  />
                </form>
                <br />
              </div>}
              {this.state.questions >= 5 ?
              <div>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question5"
                    placeholder="Вопрос 5"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="firstAnswer5"
                    placeholder="Ответ 1"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="secondAnswer5"
                    placeholder="Ответ 2"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="thirdAnswer5"
                    placeholder="Ответ 3"
                  />
                </form>
                <br />
              </div>:
              <div className="hidden">
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question5"
                    placeholder="Вопрос 5"
                  />
                  <input
                    type="text"
                    ref="firstAnswer5"
                    placeholder="Ответ 1"
                  />
                  <input
                    type="text"
                    ref="secondAnswer5"
                    placeholder="Ответ 2"
                  />
                  <input
                    type="text"
                    ref="thirdAnswer5"
                    placeholder="Ответ 3"
                  />
                </form>
                <br />
              </div>}
              {this.state.questions >= 6 ?
              <div>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question6"
                    placeholder="Вопрос 6"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="firstAnswer6"
                    placeholder="Ответ 1"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="secondAnswer6"
                    placeholder="Ответ 2"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="thirdAnswer6"
                    placeholder="Ответ 3"
                  />
                </form>
                <br />
              </div>:
              <div className="hidden">
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question6"
                    placeholder="Вопрос 6"
                  />
                  <input
                    type="text"
                    ref="firstAnswer6"
                    placeholder="Ответ 1"
                  />
                  <input
                    type="text"
                    ref="secondAnswer6"
                    placeholder="Ответ 2"
                  />
                  <input
                    type="text"
                    ref="thirdAnswer6"
                    placeholder="Ответ 3"
                  />
                </form>
              </div>}
              {this.state.questions >= 7 ?
              <div>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question7"
                    placeholder="Вопрос 7"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="firstAnswer7"
                    placeholder="Ответ 1"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="secondAnswer7"
                    placeholder="Ответ 2"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="thirdAnswer7"
                    placeholder="Ответ 3"
                  />
                </form>
                <br />
              </div>:
              <div className="hidden">
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question7"
                    placeholder="Вопрос 7"
                  />
                  <input
                    type="text"
                    ref="firstAnswer7"
                    placeholder="Ответ 1"
                  />
                  <input
                    type="text"
                    ref="secondAnswer7"
                    placeholder="Ответ 2"
                  />
                  <input
                    type="text"
                    ref="thirdAnswer7"
                    placeholder="Ответ 3"
                  />
                </form>
                <br />
              </div>}
              {this.state.questions >= 8 ?
              <div>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question8"
                    placeholder="Вопрос 8"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="firstAnswer8"
                    placeholder="Ответ 1"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="secondAnswer8"
                    placeholder="Ответ 2"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="thirdAnswer8"
                    placeholder="Ответ 3"
                  />
                </form>
                <br />
              </div>:
              <div className="hidden">
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question8"
                    placeholder="Вопрос 8"
                  />
                  <input
                    type="text"
                    ref="firstAnswer8"
                    placeholder="Ответ 1"
                  />
                  <input
                    type="text"
                    ref="secondAnswer8"
                    placeholder="Ответ 2"
                  />
                  <input
                    type="text"
                    ref="thirdAnswer8"
                    placeholder="Ответ 3"
                  />
                </form>
              </div>}
              {this.state.questions >= 9 ?
              <div>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question9"
                    placeholder="Вопрос 9"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="firstAnswer9"
                    placeholder="Ответ 1"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="secondAnswer9"
                    placeholder="Ответ 2"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="thirdAnswer9"
                    placeholder="Ответ 3"
                  />
                </form>
                <br />
              </div>:
              <div className="hidden">
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question9"
                    placeholder="Вопрос 9"
                  />
                  <input
                    type="text"
                    ref="firstAnswer9"
                    placeholder="Ответ 1"
                  />
                  <input
                    type="text"
                    ref="secondAnswer9"
                    placeholder="Ответ 2"
                  />
                  <input
                    type="text"
                    ref="thirdAnswer9"
                    placeholder="Ответ 3"
                  />
                </form>
              </div>}
              {this.state.questions >= 10 ?
              <div>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question10"
                    placeholder="Вопрос 10"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="firstAnswer10"
                    placeholder="Ответ 1"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="secondAnswer10"
                    placeholder="Ответ 2"
                  />
                </form>
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="thirdAnswer10"
                    placeholder="Ответ 3"
                  />
                </form>
              </div>:
              <div className="hidden">
                <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                  <input
                    type="text"
                    ref="question10"
                    placeholder="Вопрос 10"
                  />
                  <input
                    type="text"
                    ref="firstAnswer10"
                    placeholder="Ответ 1"
                  />
                  <input
                    type="text"
                    ref="secondAnswer10"
                    placeholder="Ответ 2"
                  />
                  <input
                    type="text"
                    ref="thirdAnswer10"
                    placeholder="Ответ 3"
                  />
                </form>
              </div>}
            </div> : ''
          }
        </header>
        <div>
          <h2 className="video-list-header"> Список видео </h2>
          <ul className="video-list">
            {this.renderTasks()}
          </ul>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('tasks');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
})(Teacher);
