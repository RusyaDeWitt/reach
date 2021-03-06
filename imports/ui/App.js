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
import Training from './Parent/Training.js';

import FactsPage from './FactsPage/FactsPage.js';
import DombyraFact from './FactsPage/Dombyra.js';
import RazvitieRoleFact from './FactsPage/Razvitie&role.js';
import RazvitieNavykaFact from './FactsPage/RazvitieNavyka.js';

import Lab from './Lab/Lab.js'
import FirstTask from './Lab/FirstTask.js'
import SecondTask from './Lab/SecondTask.js'
import ThirdTask from './Lab/ThirdTask.js'

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
      <Route exact path="/training" component={Training} />

      <Route exact path="/lab" component={Lab} />
      <Route exact path="/firsttask" component={FirstTask} />
      <Route exact path="/secondtask" component={SecondTask} />
      <Route exact path="/thirdtask" component={ThirdTask} />

      <Route exact path="/facts" component={FactsPage} />
      <Route exact path="/facts/1" component={DombyraFact} />
      <Route exact path="/facts/2" component={RazvitieRoleFact} />
      <Route exact path="/facts/3" component={RazvitieNavykaFact} />
    </Router>
  );
}


export default AppRouter;
