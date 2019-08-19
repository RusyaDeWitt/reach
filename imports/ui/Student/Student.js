import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat:600|Open+Sans');

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  background: #fff;
  color: #999;
}

a {
  text-decoration: none;
  margin: 1rem 0;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.8125rem;
  letter-spacing: 1px;
}

p {
  font-size: 0.9rem;
  margin: 1rem 0;
  line-height: 1.5;
}

section {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
}

h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #333;
  font-size: 1.825rem;
  margin: 1.3rem 0;
}

.section-lead {
  max-width: 600px;
  margin: 1rem auto 1.5rem;
}

.service a {
  color: #5b7abb;
  display: block;
}

.service h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #56ceba;
  font-size: 1.3rem;
  margin: 1rem 0 0.6rem;
}

.services-grid {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}

.service {
  background: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  -webkit-box-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #e7e7e7;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.service:hover {
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.08);
}

.service i {
  font-size: 3.45rem;
  margin: 1rem 0;
}

.service1 i,
.service1 h4,
.service1 .cta {
  color: #42b7ca;
}

.service1:hover {
  border: 2px solid #42b7ca;
}

.service2 i,
.service2 h4,
.service2 .cta {
  color: #425fca;
}

.service2:hover {
  border: 2px solid #425fca;
}

.service3 i,
.service3 h4,
.service3 .cta {
  color: #9c42ca;
}

.service3:hover {
  border: 2px solid #9c42ca;
}

.service .cta span {
  font-size: 0.6rem;
}

.service > * {
  flex: 1 1 100%;
}

.service .cta {
  align-self: flex-end;
}

@media all and (max-width:900px) {
  .services-grid {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
  }
}

`;

const StudentMenu = () => (
  <Div>
    <div className="body">
      <section>
        <h3>Ученик</h3>
        <p className="section-lead">Дорогой друг!
Мир вокруг тебя - безграничен и многолик, и твое место в нем- уникально и неповторимо. Мы предлагаем тебе вместе с нами и твоими друзьями,ровесниками,взрослыми совершить незабываемое путешествие в мир новых знаний, которые помогут тебе стать ещё лучше. Помни об одном - наш курс - это не поверка твоих знаний, полученных в школе, это - наша помощь для тебя в каждодневной жизни. Мы уверены, что наш курс REACH подскажет тебе, как правильно идти вперёд и становиться сегодня лучше, чем вчера, а завтра лучше, чем сегодня! Соревнуйся не с кем-то из своего окружения, а наблюдай за своими успехами и победами, за своим ростом! Мы - верим в тебя!</p>
        <p className="section-lead">Выберите кейс, который вам интересен</p>
        <div className="services-grid">
          <div className="service service2" onClick={() => window.location.href='/student/video'}>
            <i className="ti-light-bulb"></i>
            <h4>Мир Кино</h4>
            <p></p>
            <a href="#" className="cta">Подробней <span className="ti-angle-right"></span></a>
          </div>

          <div className="service service2">
            <i className="ti-light-bulb"></i>
            <h4>Игротека</h4>
            <p></p>
            <a href="#" className="cta">Подробней <span className="ti-angle-right"></span></a>
          </div>

          <div className="service service2"  onClick={() => window.location.href='/lab'}>
            <i className="ti-light-bulb"></i>
            <h4>Лаборатория</h4>
            <p></p>
            <a href="#" className="cta">Подробней <span className="ti-angle-right"></span></a>
          </div>

          <div className="service service2">
            <i className="ti-light-bulb"></i>
            <h4>Библиотека</h4>
            <p></p>
            <a href="#" className="cta">Подробней <span className="ti-angle-right"></span></a>
          </div>
        </div>

        <div className="service service2"  onClick={() => window.location.href='/facts'}>
          <i className="ti-light-bulb"></i>
          <h4>Факты, цифры , сведения</h4>
          <p></p>
          <a href="#" className="cta">Подробней <span className="ti-angle-right"></span></a>
        </div>
      </section>
    </div>
  </Div>

);

export default StudentMenu;
