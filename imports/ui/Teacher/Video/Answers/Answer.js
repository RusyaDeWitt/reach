import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { answers } from '../../../../api/answers.js';

// Answer component - represents a single todo item
export default class Answers extends Component {

  deleteThisAnswer() {
    Meteor.call('answers.remove', this.props.answer._id);
  }

  togglePrivate() {
    Meteor.call('answers.setPrivate', this.props.answer._id, ! this.props.answer.private);
  }

  render() {
    const answerClassName = classnames({
      checked: this.props.answer.checked,
      private: this.props.answer.private,
    });

    return (
      <div className="answer-container">
        <button className="delete" onClick={this.deleteThisAnswer.bind(this)}>
          &times;
        </button>

        <span className="text">
          <p><strong>{this.props.answer.title}</strong> : {this.props.answer.name}</p>
          {this.props.answer.questionsNum >= 1 ?
          <p>{this.props.answer.question1} : {this.props.answer.answer1}</p>:""}
          {this.props.answer.questionsNum >= 2 ?
          <p>{this.props.answer.question2} : {this.props.answer.answer2}</p>:""}
          {this.props.answer.questionsNum >= 3 ?
          <p>{this.props.answer.question3} : {this.props.answer.answer3}</p>:""}
          {this.props.answer.questionsNum >= 4 ?
          <p>{this.props.answer.question4} : {this.props.answer.answer4}</p>:""}
          {this.props.answer.questionsNum >= 5 ?
          <p>{this.props.answer.question5} : {this.props.answer.answer5}</p>:""}
          {this.props.answer.questionsNum >= 6 ?
          <p>{this.props.answer.question6} : {this.props.answer.answer6}</p>:""}
          {this.props.answer.questionsNum >= 7 ?
          <p>{this.props.answer.question7} : {this.props.answer.answer7}</p>:""}
          {this.props.answer.questionsNum >= 8 ?
          <p>{this.props.answer.question8} : {this.props.answer.answer8}</p>:""}
          {this.props.answer.questionsNum >= 9 ?
          <p>{this.props.answer.question9} : {this.props.answer.answer9}</p>:""}
          {this.props.answer.questionsNum >= 10 ?
          <p>{this.props.answer.question10} : {this.props.answer.answer10}</p>:""}
        </span>
      </div>
    );
  }
}
