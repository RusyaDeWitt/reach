import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home/homepage.js';

import Student from './Student/Student.js';
import StudentVideo from './Student/Video/Student.js';
import EachVideo from './Student/Video/EachVideo.js';

import Teacher from './Teacher/Teacher.js';
import VideoList from './Teacher/Video/VideoList/VideoList.js';
import TeacherVideo from './Teacher/Video/TeacherVideo.js';
import TeacherAddVideo from './Teacher/Video/AddVideo/AddVideo.js';
import TeacherEditVideo from './Teacher/Video/EditVideo/EachVideo.js';
import TeacherShowAnswers from './Teacher/Video/Answers/ShowAnswers.js';

import Parent from './Parent/Parent.js';
import ParentMenu from './Parent/ParentMenu.js';

import FactsPage from './FactsPage/FactsPage.js'

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/student/" component={Student} />
      <Route exact path="/student/video/" component={StudentVideo} />
      <Route exact path="/student/video/:id" component={EachVideo} />

      <Route exact path="/teacher/" exact component={Teacher} />
      <Route exact path="/teacher/video/" exact component={TeacherVideo} />
      <Route exact path="/teacher/video/list" exact component={VideoList} />
      <Route exact path="/teacher/video/add" exact component={TeacherAddVideo} />
      <Route exact path="/teacher/video/edit/:id" exact component={TeacherEditVideo} />
      <Route exact path="/teacher/video/answers" exact component={TeacherShowAnswers} />

      <Route exact path="/parent/video/" component={Parent} />
      <Route exact path="/parent" component={ParentMenu} />

      <Route exact path="/facts" component={FactsPage} />
    </Router>
  );
}


export default AppRouter;
