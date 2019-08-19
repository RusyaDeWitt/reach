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

h1 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #333;
  margin: 1.3rem 0;
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
  text-align: left;
}

span {
  display: inline-block;
  text-indent: 2em;
}

section {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 30px;
}


.section-lead-facts {
  text-align: center;
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

const RazvitieNavyka = () => (
  <Div>
  <div className="body">
    <section>
      <h3>Развитие навыка общения в казахском обществе</h3>
      <hr />
      <p>
        <span><strong>1) Виды невербальной коммуникации в традиционном казахском обществе.</strong></span>
        <span>В казахском обществе древние мастера знали, что орнамент оказывает
        эмоциональное воздействие на человека, ему свойственно было передавать
        ощущения радости и печали, любви и счастья. Практически каждый
        орнаментальный узор нес определенную информацию и определенное
        предназначение. Любой кочевник с детства знал символику орнамента и мог
        без труда расшифровать его смысл.</span>
        <span>Орнамент щедро украшал мужскую, женскую и детскую одежду. Если
        одежда украшалась орнаментом <strong>«туетабан»</strong> (верблюжий след), то это
        означало, что одежда сшита для дальней дороги, если человек желал кому-то
        счастья, свободы и независимости, то дарил вещь со знаком <strong>«кусканат»</strong> (птичье крыло).</span>
        <span>В казахской семье долго сохранялся обычай, согласно которому
        девушка, вышедшая замуж и переехавшая в другой аул, должна была
        прислать родителям подарок, сделанный своими руками. И часто в нем с
        помощью <strong>орнамента</strong> девушка описывала свою жизнь. Если в
        орнаментальном ковре она изображала символически <strong>худого человека
        рядом с полным</strong> – родители плакали, получив такой подарок: дочери
        жилось плохо. А если <strong>клюв птицы</strong> – это означало, что девушка живет как
        вольная птица, и родители собирали всех, родственников и друзей той.</span>
        <span>Еще одна традиция казахского народа связанная с коммуникацией с
        помощью ювелирного изделия – <strong>«Құстұмсық»</strong> кольцо «Птичий клюв». Это
        кольцо, выполненное в виде конуса, по форме напоминающее птичий клюв.
        Издревле казахи относились к девочке, как к гостю в доме и понимали, что
        она как птица, которая рано или поздно выпорхнет из отчего гнезда. В давние
        времена, такое кольцо носили девушки на выданье. Оно являлось
        свидетельством того, что девушка еще не засватана и пока свободна. После
        замужества кольцо оставалось у девушки, но меняло свое предназначение.
        Теперь оно являлось неким SMS-посланием между девушкой и ее
        родителями. В то время, дочерей отдавали замуж в другие регионы и надолго
        теряли с ней связь. Если кто-нибудь из родственников девушки отправлялся
        по делам в ауыл, куда выдали замуж девушку, мать с замиранием сердца
        ждала известия от дочери. Если дочь передавала кольцо «Қыз тумсык»
        обратно матери, это означало, что с ней все хорошо, она попала в хорошую
        семью и счастлива в новой семье. Мать невесты на радостях накрывала
        праздничный «дастархан» и звала гостей, делясь с ними хорошей новостью.</span>
      </p>
    </section>
  </div>
  </Div>

);

export default RazvitieNavyka;
