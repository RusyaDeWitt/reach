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
          <p>Ответ на вопрос 1: {this.props.answer.answer1}</p>:""}
          {this.props.answer.questionsNum >= 2 ?
          <p>Ответ на вопрос 2: {this.props.answer.answer2}</p>:""}
          {this.props.answer.questionsNum >= 3 ?
          <p>Ответ на вопрос 3: {this.props.answer.answer3}</p>:""}
          {this.props.answer.questionsNum >= 4 ?
          <p>Ответ на вопрос 4: {this.props.answer.answer4}</p>:""}
          {this.props.answer.questionsNum >= 5 ?
          <p>Ответ на вопрос 5: {this.props.answer.answer5}</p>:""}
          {this.props.answer.questionsNum >= 6 ?
          <p>Ответ на вопрос 6: {this.props.answer.answer6}</p>:""}
          {this.props.answer.questionsNum >= 7 ?
          <p>Ответ на вопрос 7: {this.props.answer.answer7}</p>:""}
          {this.props.answer.questionsNum >= 8 ?
          <p>Ответ на вопрос 8: {this.props.answer.answer8}</p>:""}
          {this.props.answer.questionsNum >= 9 ?
          <p>Ответ на вопрос 9: {this.props.answer.answer9}</p>:""}
          {this.props.answer.questionsNum >= 10 ?
          <p>Ответ на вопрос 10: {this.props.answer.answer10}</p>:""}
        </span>
      </div>
    );
  }
}
