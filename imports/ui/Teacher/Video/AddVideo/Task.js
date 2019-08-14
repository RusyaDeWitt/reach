import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import { Player } from 'video-react';
import { Tasks } from '../../../../api/tasks.js';

// Task component - represents a single todo item
class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: null,
    }
  };

  deleteThisTask() {
    Meteor.call('tasks.remove', this.props.task._id);
  }

  togglePrivate() {
    Meteor.call('tasks.setPrivate', this.props.task._id, ! this.props.task.private);
  }

  showVideo() {
    if(this.state.video === this.props.task._id){
      this.setState({
        video: null,
      });
    }
    else{
      this.setState({
        video: this.props.task._id,
      });
    }
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = classnames({
      checked: this.props.task.checked,
      private: this.props.task.private,
    });

    return (
      <li className={taskClassName}>
        <div>
        <button onClick={this.showVideo.bind(this)} className="video-list-button">{this.props.task.title}</button>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>
        <button className="delete" onClick={this.togglePrivate.bind(this)}>
            { this.props.task.private ? 'Видно только вам' : 'Видно всем' }
        </button>
        </div>
        {this.state.video === this.props.task._id ?
        <div>
          <h2>{this.props.task.title}</h2>
          <Player
            playsInline
            poster="/assets/poster.png"
            src={this.props.task.url}
          />
          <br />
          <form>
            <span>{this.props.task.question1}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                  value="First"
                />
                {this.props.task.firstAnswer1}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                />
                {this.props.task.secondAnswer1}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                />
                {this.props.task.thirdAnswer1}
              </p>
          </form>
          {this.props.task.questionsNum >= 2 ?
          <form>
            <br />
            <span>{this.props.task.question2}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                  value="First"
                />
                {this.props.task.firstAnswer2}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                />
                {this.props.task.secondAnswer2}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                />
                {this.props.task.thirdAnswer2}
              </p>
          </form>:""}
          {this.props.task.questionsNum >= 3 ?
          <form>
            <br />
            <span>{this.props.task.question3}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                  value="First"
                />
                {this.props.task.firstAnswer3}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                />
                {this.props.task.secondAnswer3}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                />
                {this.props.task.thirdAnswer3}
              </p>
          </form>:""}
          {this.props.task.questionsNum >= 4 ?
          <form>
            <br />
            <span>{this.props.task.question4}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                  value="First"
                />
                {this.props.task.firstAnswer4}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                />
                {this.props.task.secondAnswer4}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                />
                {this.props.task.thirdAnswer4}
              </p>
          </form>:""}
          {this.props.task.questionsNum >= 5 ?
          <form>
            <br />
            <span>{this.props.task.question5}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                  value="First"
                />
                {this.props.task.firstAnswer5}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                />
                {this.props.task.secondAnswer5}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                />
                {this.props.task.thirdAnswer5}
              </p>
          </form>:""}
          {this.props.task.questionsNum >= 6 ?
          <form>
            <br />
            <span>{this.props.task.question6}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                  value="First"
                />
                {this.props.task.firstAnswer6}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                />
                {this.props.task.secondAnswer6}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                />
                {this.props.task.thirdAnswer6}
              </p>
          </form>:""}
          {this.props.task.questionsNum >= 7 ?
          <form>
            <br />
            <span>{this.props.task.question7}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                  value="First"
                />
                {this.props.task.firstAnswer7}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                />
                {this.props.task.secondAnswer7}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                />
                {this.props.task.thirdAnswer7}
              </p>
          </form>:""}
          {this.props.task.questionsNum >= 8 ?
          <form>
            <br />
            <span>{this.props.task.question8}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                  value="First"
                />
                {this.props.task.firstAnswer8}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                />
                {this.props.task.secondAnswer8}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                />
                {this.props.task.thirdAnswer8}
              </p>
          </form>:""}
          {this.props.task.questionsNum >= 9 ?
          <form>
            <br />
            <span>{this.props.task.question9}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                  value="First"
                />
                {this.props.task.firstAnswer9}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                />
                {this.props.task.secondAnswer9}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                />
                {this.props.task.thirdAnswer9}
              </p>
          </form>:""}
          {this.props.task.questionsNum >= 10 ?
          <form>
            <br />
            <span>{this.props.task.question10}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                  value="First"
                />
                {this.props.task.firstAnswer10}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                />
                {this.props.task.secondAnswer10}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                />
                {this.props.task.thirdAnswer10}
              </p>
          </form>:""}
        </div>:""}
      </li>
    );
  }
}

export default Task;
