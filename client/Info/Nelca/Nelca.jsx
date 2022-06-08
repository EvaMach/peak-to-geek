import React from 'react';
import '../Info.css';
import '../../style.css';

const Nelca = () => {
  return (
    <div className="creator">
      <div className="creator__container">
        <div className="creator__header">
          <h1 id="creator__title">O mně</h1>
          <img
            className="creator__photo"
            src={require('./img/nelca.png')}
            alt="Nela Letochová - profilová fotografie"
          />
        </div>
        <p className="creator__text">Čauky,</p>
        <p className="creator__text">
          já jsem Nelča Letochová - věčně usměvavá Moravanda, studentka
          Andragogiky a personálního řízení na UK. Kromě studia pracuji jako IT
          Talent Sourcer v GoodCallu a také jako stážistka v Czechitasím R&amp;D
          týmu 🦄
        </p>
        <p className="creator__text">
          Webový vývoj mám moc ráda pro jeho komplexitu - není to pouze o
          samotném kódu, ale také o přidružených oblastech, především UX/UI,
          grafice a designu celkově. Líbí se mi ta různorodost, šíře možností a
          neustálý posun k novým a novým příležitostem a nápadům, které se dají
          uskutečnit 🧩
        </p>
        <p className="creator__text">
          P.S.: Jsem neuvěřitelný MILOVNÍK LENOCHODŮ 🦥
        </p>
        <div className="creator__contacts">
          <a href="https://github.com/Nelusa">
            <img
              className="creator__contact-icon icon--github"
              src={require('./img/github.png')}
              alt="Ikonka GitHubu - Nelča Letochová"
            />
          </a>
          <a href="mailto:nela.letochova@czechitas.cz">
            <img
              className="creator__contact-icon icon--email"
              src={require('./img/email.jpg')}
              alt="Ikonka e-mailu - Nelča Letochová"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nelca;
