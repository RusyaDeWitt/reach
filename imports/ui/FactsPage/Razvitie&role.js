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

const Razvitie = () => (
  <Div>
  <div className="body">
    <section>
      <h3>Развитие и роль навыка общения в общей истории человечества.</h3>
      <hr />
      <p>
        <span><strong>1) Роль общения в нашей жизни.</strong></span>
        <span>В XV веке был проведен эксперимент. Индийский падишах Акбар
        поспорил с придворными мудрецами, утверждавшими, что у каждого
        ребенка автоматически появляется речь их родителей. Он собрал маленьких
        детей разных национальностей и содержал их в полной изоляции друг от
        друга и от общения с другими людьми, прислуживали им немые слуги. Через
        семь лет участники спора вошли к детям. Их встретили настоящие дикари,
        издававшие бессмысленные звуки. Однако хорошо известно, что каждый
        ребенок обладает потенциалом стать всесторонне развитой личностью, но
        произойти это может только в результате общения с родителями, учителями
        и друзьями. Исторический опыт и повседневная практика свидетельствуют о
        том, что полная изоляция человека от общества, изъятие его из общения с
        другими людьми, приводит к полной утрате человеческой личности, ее
        социальных качеств и свойств.</span>
        <span>Что получает человек от общения? Во-первых, человек при общении
        получает положительные эмоции; во-вторых, при общении мы получаем
        примерно 90 процентов необходимой информации; в-третьих, с помощью
        общения мы выстраиваем приятные отношения дружбы и любви. В 1980
        году журнал «Science News» писал о том, что общение с друзьями,
        родственниками и знакомыми приводит к увеличению продолжительности
        жизни; в-четвертых, большинство задач, связанных с трудовой деятельностью
        человека, не может быть решено без общения.</span>
        <span>Если время бодрствования человека взять за 100%, то из них 45% - он
        слушает других, 30% - говорит сам, 16% - читает, 9% - пишет. Таким
        образом, подавляющая часть времени связана с речевой деятельностью.</span>
        <span><strong>Доказательства необходимости общения для человека:</strong></span>
        <span>• это необходимое условие выживания человека;</span>
        <span>• недостаток в общении приводит к серьезным отклонениям в развитии;</span>
        <span>• оно необходимо в любом возрасте. Например, люди могут поделиться
        своими бедами, проблемами. Говорят, когда человек выговорится, ему стает
        лучше.</span>
        <span>• через общение человек самоутверждается в обществе;</span>
        <span>• получаем знания о мире, передача опыта молодым поколениям;</span>
        <span>• усваиваются правила поведения человека, культурные и нравственные
        ценности;</span>
        <span>• общение способствует развитию интересов человека;</span>
        <span>• определенные качества личности формируются только в общении.</span>
        <span>Но очень важно, что мы говорим. Хорошее слово может вдохновить
        нас на большие подвиги, а негативное слово может сломать человека.
        Немецкие психологи обнаружили, что если перед работой женщине сказать <strong>комплимент</strong>,
        то ее производительность труда повышается на 10—15 процентов.</span>
        <br />
        <span><strong>2) Правила общения.</strong></span>
        <span><strong>Правило первое:</strong> будьте доброжелательны. Каким бы плохим ни было
        ваше настроение, насколько бы вы ни были усталыми, постарайтесь
        "Приглушить" негативные эмоции и подумать о том, что человек ждет от вас
        приязненного и хорошего отношения к себе.</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </p>
    </section>
  </div>
  </Div>

);

export default Razvitie;
