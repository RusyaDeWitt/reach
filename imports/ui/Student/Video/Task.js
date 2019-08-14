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
      count: 0,
    }
  };

  hrefto(link) {
    link = "/student/video/" + link;
    window.location.href=link
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = classnames({
      checked: this.props.task.checked,
      private: this.props.task.private,
    });

    return (
      <div className="service service1" onClick={() => this.hrefto(this.props.task._id)}>
      <i className="ti-bar-chart"></i>
        <div>
          <h4>{this.props.task.title}</h4>
        </div>
      </div>
    );
  }
}

export default Task;
