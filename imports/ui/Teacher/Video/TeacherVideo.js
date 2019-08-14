import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AccountsUIWrapper from '../../AccountsUIWrapper.js';

// App component - represents the whole app
class TeacherVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  hrefTo(link){
    link = '/' + link;
    window.location.href=link;
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Выберите действие:</h1>

          <AccountsUIWrapper />

          <div>
            <center>
              <button className="HomeButton" onClick={() => this.hrefTo('teacher/video/add')}>Добавить видео</button>
              <button className="HomeButton" onClick={() => this.hrefTo('teacher/video/answers')}>Смотреть ответы</button>
            </center>
          </div>

        </header>

      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(TeacherVideo);
