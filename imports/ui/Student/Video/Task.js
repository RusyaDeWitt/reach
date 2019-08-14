import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import { Player } from 'video-react';
import { Tasks } from '../../../api/tasks.js';
import { Answers } from '../../../api/answers.js';

// Task component - represents a single todo item
class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: null,
    }
  };

  submit(taskId) {
    event.preventDefault();

    // Find the text field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.name).value.trim();

    const a1 = ReactDOM.findDOMNode(this.refs.A1).checked;
    const b1 = ReactDOM.findDOMNode(this.refs.B1).checked;
    const c1 = ReactDOM.findDOMNode(this.refs.C1).checked;

    const a2 = ReactDOM.findDOMNode(this.refs.A2).checked;
    const b2 = ReactDOM.findDOMNode(this.refs.B2).checked;
    const c2 = ReactDOM.findDOMNode(this.refs.C2).checked;

    const a3 = ReactDOM.findDOMNode(this.refs.A3).checked;
    const b3 = ReactDOM.findDOMNode(this.refs.B3).checked;
    const c3 = ReactDOM.findDOMNode(this.refs.C3).checked;

    const a4 = ReactDOM.findDOMNode(this.refs.A4).checked;
    const b4 = ReactDOM.findDOMNode(this.refs.B4).checked;
    const c4 = ReactDOM.findDOMNode(this.refs.C4).checked;

    const a5 = ReactDOM.findDOMNode(this.refs.A5).checked;
    const b5 = ReactDOM.findDOMNode(this.refs.B5).checked;
    const c5 = ReactDOM.findDOMNode(this.refs.C5).checked;

    const a6 = ReactDOM.findDOMNode(this.refs.A6).checked;
    const b6 = ReactDOM.findDOMNode(this.refs.B6).checked;
    const c6 = ReactDOM.findDOMNode(this.refs.C6).checked;

    const a7 = ReactDOM.findDOMNode(this.refs.A7).checked;
    const b7 = ReactDOM.findDOMNode(this.refs.B7).checked;
    const c7 = ReactDOM.findDOMNode(this.refs.C7).checked;

    const a8 = ReactDOM.findDOMNode(this.refs.A8).checked;
    const b8 = ReactDOM.findDOMNode(this.refs.B8).checked;
    const c8 = ReactDOM.findDOMNode(this.refs.C8).checked;

    const a9 = ReactDOM.findDOMNode(this.refs.A9).checked;
    const b9 = ReactDOM.findDOMNode(this.refs.B9).checked;
    const c9 = ReactDOM.findDOMNode(this.refs.C9).checked;

    const a10 = ReactDOM.findDOMNode(this.refs.A10).checked;
    const b10 = ReactDOM.findDOMNode(this.refs.B10).checked;
    const c10 = ReactDOM.findDOMNode(this.refs.C10).checked;

    var answer1 = "";
    var answer2 = "";
    var answer3 = "";
    var answer4 = "";
    var answer5 = "";
    var answer6 = "";
    var answer7 = "";
    var answer8 = "";
    var answer9 = "";
    var answer10 = "";

    const task = Tasks.findOne(taskId);

    const questionsNum = task.questionsNum;

    const title = task.title;

    if(a1){
      answer1 = task.firstAnswer1;
    }
    if(b1){
      answer1 = task.secondAnswer1;
    }
    if(c1){
      answer1 = task.thirdAnswer1;
    }
    if(a2){
      answer2 = task.firstAnswer2;
    }
    if(b2){
      answer2 = task.secondAnswer2;
    }
    if(c2){
      answer2 = task.thirdAnswer2;
    }
    if(a3){
      answer3 = task.firstAnswer3;
    }
    if(b3){
      answer3 = task.secondAnswer3;
    }
    if(c3){
      answer3 = task.thirdAnswer3;
    }
    if(a4){
      answer4 = task.firstAnswer4;
    }
    if(b4){
      answer4 = task.secondAnswer4;
    }
    if(c4){
      answer4 = task.thirdAnswer4;
    }
    if(a5){
      answer5 = task.firstAnswer5;
    }
    if(b5){
      answer5 = task.secondAnswer5;
    }
    if(c5){
      answer5 = task.thirdAnswer5;
    }
    if(a6){
      answer6 = task.firstAnswer6;
    }
    if(b6){
      answer6 = task.secondAnswer6;
    }
    if(c6){
      answer6 = task.thirdAnswer6;
    }
    if(a7){
      answer7 = task.firstAnswer7;
    }
    if(b7){
      answer7 = task.secondAnswer7;
    }
    if(c7){
      answer7 = task.thirdAnswer7;
    }
    if(a8){
      answer8 = task.firstAnswer8;
    }
    if(b8){
      answer8 = task.secondAnswer8;
    }
    if(c8){
      answer8 = task.thirdAnswer8;
    }
    if(a9){
      answer9 = task.firstAnswer9;
    }
    if(b9){
      answer9 = task.secondAnswer9;
    }
    if(c9){
      answer9 = task.thirdAnswer9;
    }
    if(a10){
      answer10 = task.firstAnswer10;
    }
    if(b10){
      answer10 = task.secondAnswer10;
    }
    if(c10){
      answer10 = task.thirdAnswer10;
    }

    Meteor.call('answers.insert', name, title, questionsNum, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10);

    // Clear form
    ReactDOM.findDOMNode(this.refs.name).value = '';
    }

  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }

  deleteThisTask() {
    Meteor.call('tasks.remove', this.props.task._id);
  }

  togglePrivate() {
    Meteor.call('tasks.setPrivate', this.props.task._id, ! this.props.task.private);
  }

  showVideo() {
    if(this.state.video == this.props.task._id){
      this.setState({
        video: null,
      });
    }
    else{
    this.setState({
      video: this.props.task._id,
    });
  }}

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
        <button onClick={this.showVideo.bind(this)}>{this.props.task.title}</button>
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
          {this.props.task.questionsNum >= 1 ?
          <form>
            <span>{this.props.task.question1}</span><br />
              <p>
                <input
                  name="question"
                  type="radio"
                  value="First"
                  ref="A1"
                />
                {this.props.task.firstAnswer1}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B1"
                />
                {this.props.task.secondAnswer1}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C1"
                />
                {this.props.task.thirdAnswer1}
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                  value="First"
                  ref="A1"
                />
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B1"
                />
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C1"
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
                  value="First"
                  ref="A2"
                />
                {this.props.task.firstAnswer2}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B2"
                />
                {this.props.task.secondAnswer2}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C2"
                />
                {this.props.task.thirdAnswer2}
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                  value="First"
                  ref="A2"
                />
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B2"
                />
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C2"
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
                  value="First"
                  ref="A3"
                />
                {this.props.task.firstAnswer3}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B3"
                />
                {this.props.task.secondAnswer3}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C3"
                />
                {this.props.task.thirdAnswer3}
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                  value="First"
                  ref="A3"
                />
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B3"
                />
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C3"
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
                  value="First"
                  ref="A4"
                />
                {this.props.task.firstAnswer4}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B4"
                />
                {this.props.task.secondAnswer4}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C4"
                />
                {this.props.task.thirdAnswer4}
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                  value="First"
                  ref="A4"
                />
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B4"
                />
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C4"
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
                  value="First"
                  ref="A5"
                />
                {this.props.task.firstAnswer5}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B5"
                />
                {this.props.task.secondAnswer5}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C5"
                />
                {this.props.task.thirdAnswer5}
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                  value="First"
                  ref="A5"
                />
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B5"
                />
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C5"
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
                  value="First"
                  ref="A6"
                />
                {this.props.task.firstAnswer6}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B6"
                />
                {this.props.task.secondAnswer6}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C6"
                />
                {this.props.task.thirdAnswer6}
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                  value="First"
                  ref="A6"
                />
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B6"
                />
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C6"
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
                  value="First"
                  ref="A7"
                />
                {this.props.task.firstAnswer7}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B7"
                />
                {this.props.task.secondAnswer7}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C7"
                />
                {this.props.task.thirdAnswer7}
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                  value="First"
                  ref="A7"
                />
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B7"
                />
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C7"
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
                  value="First"
                  ref="A8"
                />
                {this.props.task.firstAnswer8}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B8"
                />
                {this.props.task.secondAnswer8}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C8"
                />
                {this.props.task.thirdAnswer8}
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                  value="First"
                  ref="A8"
                />
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B8"
                />
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C8"
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
                  value="First"
                  ref="A9"
                />
                {this.props.task.firstAnswer9}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B9"
                />
                {this.props.task.secondAnswer9}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C9"
                />
                {this.props.task.thirdAnswer9}
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                  value="First"
                  ref="A9"
                />
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B9"
                />
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C9"
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
                  value="First"
                  ref="A10"
                />
                {this.props.task.firstAnswer10}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B10"
                />
                {this.props.task.secondAnswer10}
              </p>
              <p>
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C10"
                />
                {this.props.task.thirdAnswer10}
              </p>
          </form>:
          <form className="hidden">
                <input
                  name="question"
                  type="radio"
                  value="First"
                  ref="A10"
                />
                <input
                  name="question"
                  type="radio"
                  value="Second"
                  ref="B10"
                />
                <input
                  name="question"
                  type="radio"
                  value="Third"
                  ref="C10"
                />
          </form>}
          <br />
          <form>
            <input
              className="NameButton"
              type="text"
              ref="name"
              placeholder="Введите имя"
            />
          </form>
          <br />
          <button className="NameButton" onClick={() => this.submit(this.props.task._id)}>Отправить</button>
        </div>:""}
      </li>
    );
  }
}

export default Task;