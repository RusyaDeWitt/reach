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

.lab {
  text-align: center;
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

const ThirdTask = () => (
  <Div>
  <div>
    <div className="lab">
      <section>
      <h1>Язык символов</h1>
        <div className="service service2">
          <i className="ti-bar-chart"></i>
          <h4>Түйетабан (верблюжий след)</h4>
          <p>Орнамент похож на
            верблюжий след. Он отличается сложной композицией, состоящей из
            оригинальных, сложных узоров. Стоящие рядом две фигуры в виде буквы &quot;S&quot;
            не соединяются. Две детали орнамента, напоминающие верблюжий след,
            находятся всегда рядом. Символ благополучной и успешной дороги. Если
            одежда украшалась орнаментом «туетабан», то это означало, что одежда
            сшита для дальней дороги.
          </p>
        </div>

        <div className="service service2">
          <i className="ti-light-bulb"></i>
          <h4>Құс қанат (птичье крыло)</h4>
          <p>Орнамент,
            напоминающий птичьи крылья, следует за роговидными элементами или за
            орнаментом, напоминающим шахматные клетки. Изображение этого
            орнамента на отдельных изделиях напоминают летящую птицу. Символ
            счастья, свободы и независимости. Если человек желал кому-то счастья,
            свободы и независимости, то дарил вещь со знаком «кусканат».
          </p>
        </div>

        <div className="service service2">
          <i className="ti-money"></i>
          <h4>Құс тұмсық (птичий клюв)</h4>
          <p>
          Этот орнамент
          напоминает птичий клюв, состоит из ветвистых роговидных элементов и
          линий. При вырезании орнамента начало срединной линии напоминает
          птичий клюв. Кольцо с орнаментом &quot;кустумсык&quot; выполняло роль
          своеобразного амулета, призванного соединять родственные сердца, служило
          символом единения. Если дочь после замужества передавала кольцо «Қыз
          тумсык» родителям, это означало, что с ней все хорошо, она попала в
          хорошую семью и счастлива в новой семье.
          </p>
        </div>

        <div className="service service2">
          <i className="ti-money"></i>
          <h4>Өркеш (верблюжий горб)</h4>
          <p>
          Символ достатка и большой
          семьи. Используется как пожелание достатка и размножения. Орнамент
          изображает как бы верблюжьи горбы. Его элементы очень часто встречаются
          в общей композиции с орнаментами, украшающими сырмаки (узорчатый
          войлочный казахский ковёр), текеметы (произведение декоративно-
          прикладного искусства, мебель юрты с цветным орнаментом на
          поверхности), тускиизы (настенный войлок).
          </p>
        </div>

        <div className="service service2">
          <i className="ti-money"></i>
          <h4>Қошқар муйіз</h4>
          <p>
          Обозначает материальное
          благополучие. Этот орнамент похож на бараньи рога. Он используется при
          украшении текеметов (произведение декоративно-прикладного искусства,
          мебель юрты с цветным орнаментом на поверхности), сырмаков (узорчатый
          войлочный казахский ковёр), баскуров (узорчатая вытканная тесьма для
          оформления юрты, а также для наружного стягивания мест стыка с кереге), ,
          ковров, кожаных изделий, а также изделий из шерсти, дерева и ювелирных
          изделий.
          </p>
        </div>
    </section>
    </div>
  </div>
  </Div>

);

export default ThirdTask;
