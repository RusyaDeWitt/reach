import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Answers } from '../../../../api/answers.js';
import { Tasks } from '../../../../api/tasks.js';

import EachVideoRender from './EachVideoRender.js';
import AccountsUIWrapper from '../../../AccountsUIWrapper.js';

class EachVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }

  renderTasks() {
    const { params } = this.props.match;
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;
      console.log(params.id, task._id)
      if (params.id == task._id){
      return (
        <EachVideoRender
          key={task._id}
          task={task}
          params={params}
          answer={this.props.answer}
          showPrivateButton={showPrivateButton}
        />
      );}
    });
  }

  render() {
    const { params } = this.props.match;
    return (
      <div>
        {this.renderTasks()}
      </div>
    )
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
})(EachVideo);
