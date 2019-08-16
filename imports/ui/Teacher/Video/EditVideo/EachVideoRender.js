import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../../../../api/tasks.js';
import { Answers } from '../../../../api/answers.js';

import VideoList from '../VideoList/Task.js';

// Task component - represents a single todo item
class EachVideoRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };

  renderVideoList() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;
      if(this.props.params.id != task._id){
        return (
          <VideoList
            key={task._id}
            task={task}
            answer={this.props.answer}
            showPrivateButton={showPrivateButton}
          />
        );
      }
    });
  }

  deleteThisTask() {
    Meteor.call('tasks.remove', this.props.task._id);
  }

  togglePrivate() {
    Meteor.call('tasks.setPrivate', this.props.task._id, ! this.props.task.private);
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = classnames({
      private: this.props.task.private,
      notPrivate: !this.props.task.private
    });

    return (
      <div className="videopage">
        <div className="video-part">
          <h2>
            <center>
              {this.props.task.title}
              <button className={taskClassName} onClick={this.togglePrivate.bind(this)}>
                { this.props.task.private ? 'Видно только вам' : 'Видно всем' }
              </button>
            </center>
          </h2>
          <ReactPlayer
            className="player"
            controls
            width='100%'
            config={{
              youtube: {
                playerVars: { showinfo: 0 }
              }
            }}
            url={this.props.task.url}
          />
          {this.renderVideoList()}
        </div>
        <div className="question-part">
          <center>
          {this.props.task.questionsNum >= 1 ?
          <form>
            <span>{this.props.task.question1}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="A1">{this.props.task.firstAnswer1}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="B1">{this.props.task.secondAnswer1}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="C1">{this.props.task.thirdAnswer1}</label>
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
          </form>}
          {this.props.task.questionsNum >= 2 ?
          <form>
            <br />
            <span>{this.props.task.question2}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="A2">{this.props.task.firstAnswer2}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="B2">{this.props.task.secondAnswer2}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="C2">{this.props.task.thirdAnswer2}</label>
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
          </form>}
          {this.props.task.questionsNum >= 3 ?
          <form>
            <br />
            <span>{this.props.task.question3}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="A3">{this.props.task.firstAnswer3}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="B3">{this.props.task.secondAnswer3}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="C3">{this.props.task.thirdAnswer3}</label>
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
          </form>}
          {this.props.task.questionsNum >= 4 ?
          <form>
            <br />
            <span>{this.props.task.question4}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="A4">{this.props.task.firstAnswer4}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="B4">{this.props.task.secondAnswer4}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="C4">{this.props.task.thirdAnswer4}</label>
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
          </form>}
          {this.props.task.questionsNum >= 5 ?
          <form>
            <br />
            <span>{this.props.task.question5}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="A5">{this.props.task.firstAnswer5}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="B5">{this.props.task.secondAnswer5}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="C5">{this.props.task.thirdAnswer5}</label>
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
          </form>}
          {this.props.task.questionsNum >= 6 ?
          <form>
            <br />
            <span>{this.props.task.question6}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="A6">{this.props.task.firstAnswer6}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="B6">{this.props.task.secondAnswer6}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="C6">{this.props.task.thirdAnswer6}</label>
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
          </form>}
          {this.props.task.questionsNum >= 7 ?
          <form>
            <br />
            <span>{this.props.task.question7}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="A7">{this.props.task.firstAnswer7}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="B7">{this.props.task.secondAnswer7}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="C7">{this.props.task.thirdAnswer7}</label>
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
          </form>}
          {this.props.task.questionsNum >= 8 ?
          <form>
            <br />
            <span>{this.props.task.question8}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="A8">{this.props.task.firstAnswer8}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="B8">{this.props.task.secondAnswer8}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="C8">{this.props.task.thirdAnswer8}</label>
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
          </form>}
          {this.props.task.questionsNum >= 9 ?
          <form>
            <br />
            <span>{this.props.task.question9}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="A9">{this.props.task.firstAnswer9}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="B9">{this.props.task.secondAnswer9}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="C9">{this.props.task.thirdAnswer9}</label>
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
          </form>}
          {this.props.task.questionsNum >= 10 ?
          <form>
            <br />
            <span>{this.props.task.question10}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="A10">{this.props.task.firstAnswer10}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="B10">{this.props.task.secondAnswer10}</label>
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                />
                <label htmlFor="C10">{this.props.task.thirdAnswer10}</label>
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
                <input
                  name="question"
                  type="radio"
                />
          </form>}
          <br />
        </center>
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('tasks');
  Meteor.subscribe('answers');

  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    answers: Answers.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
})(EachVideoRender);
