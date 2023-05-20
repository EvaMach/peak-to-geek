import React from 'react';
import '../InfoPage.scss';
import '../../../style.scss';

const Evca = () => {
  return (
    <div className="creator">
      <div className="creator__container">
        <div className="creator__header">
          <h1 id="creator__title">O mně</h1>
          <img
            className="creator__photo"
            src={require('./img/evca.png')}
            alt="Evča Machová - profilová fotografie"
          />
        </div>
        <p className="creator__text">Ahoj,</p>
        <p className="creator__text">
          já jsem Evča Machová. Už z dálky mě asi poznáte podle poměrně vysoké
          postavy a širokého úsměvu. Původem lingvistika a nadšenkyně do IT už
          nějakou dobu, ale až s Digitální akademií jsem programování i změnu
          oboru vzala opravdu seriózně.💪
        </p>
        <p className="creator__text">
          Momentálně pracuju jako tester a UX/UI designérka, ale doufám, že už
          se brzy přesunu na pozici FE vývojářky. Javascript mě nadchnul a
          připadá mi, že jsem se konečně našla. Už se těším, až rozjedu nějaké
          další projekty!🎉
        </p>
        <div className="creator__contacts">
          <a href="https://github.com/EvaMach">
            <img
              className="creator__contact-icon icon--github"
              src={require('./img/github.png')}
              alt="Ikonka GitHubu - Evča Machová"
            />
          </a>
          <a href="mailto:evca.machova@gmail.com">
            <img
              className="creator__contact-icon icon--email"
              src={require('./img/email.jpg')}
              alt="Ikonka e-mailu - Evča Machová"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Evca;
