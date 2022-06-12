import React from 'react';
import '../Info.scss';

const About = () => {
  return (
    <>
      <section>
        <h2>O projektu</h2>
        <p className="about-project__text">
          Peak to geek je motivační IT platforma, zaměřená na znalostní a
          kariérní rozvoj v oblasti UX a UI designu. Základem platormy je
          unikátní uživatelský profil s dashboardem, který mapuje postup
          uživatele napříč UX/UI oborem. Kromě dashboardu má platforma dvě
          hlavní komponenty - UX/UI roadmapu s gamifikačními prvky a osobní
          databázi online kurzů s doporučenými kurzy od komunity Geeků.
        </p>
      </section>
      <section>
        <h2>Jak nápad vznikl?</h2>
        <p className="about-project__text">
          Na tématu jsme se shodly celkem rychle. Obě nás to táhne k UX a UI
          designu a zároveň jsme obě přesně cílovou skupinou naší platformy -
          nadšenkyně do IT, které sledují několik online kurzů na webech typu
          Coursera, Skillshare, Udemy apod. a už celkem ztrácí přehled o tom,
          jaké kurzy kde všude mají a jaké všechny znalosti vlastně k UX/UI
          designu potřebují. O motivaci se pořád vzdělávat a nevzdat to ani
          nemluvě.
        </p>
        <br />
        <p className="about-project__text">
          Platforma, kde by uživatel získával každodenní motivaci, měl přehled o
          svých kurzech a věděl, co všechno se potřebuje v daném oboru naučit,
          nám přišla jako skvělý projekt, který budeme samy hojně používat.
        </p>
      </section>
      <section>
        <h2>Fáze projektu</h2>
        <p className="about-project__text">
          Téma našeho projektu vzniklo poměrně rychle. Pak následovalo několik
          schůzek a callů, kde jsme si utřídily, jak vlastně chceme, aby projekt
          vypadal.
        </p>
        <h3>Rozvržení obsahu v Miru</h3>
        <p className="about-project__text">
          Miro bylo naším základem, kde jsme si rozvrhly, jaký obsah by
          platforma mohla mít a na kolik samostatných stránek by se to vlastně
          vešlo. Naše plány byly zpočátku samozřejmě velké, takže platforma měla
          mít až k desítce stránek a komponent, ale s postupem času jsme ubíraly
          a ubíraly a ubíraly... Aktuálně se v Miru nachází především přehled
          obsahu, který na stránce bude.
        </p>
        <figure className="about-project__phases">
          <img
            className="phases__picture"
            src={require('../img/miro.png')}
            alt="Fáze vývoje projektu v Miru - screenshot"
          />
          <figcaption className="phases__picture--caption">
            Rozvržení stránek, obsahu a návrh stromu v Miru
          </figcaption>
        </figure>
        <h3>Návrhy ve Figmě</h3>
        <p className="about-project__text">
          Brzy po vyjasnění obsahu jsme začaly pracovat na návrzích ve Figmě.
          Časem se postupně měnily, ale hlavní design se víceméně dodnes drží
          prvního návrhu. Už tehdy v počátcích jsme se shodly, že ústředním
          motivem bude strom znalostí, po kterém budu uživatel šplhat nahorů.
          Druhým hlavním prvkem byl maskot lenochoda, který bude uživatele
          motivovat a poleze s ním nahoru. Ve finální verzi návrhů jsme vybraly
          font a barvy, které v projektu využijeme.
        </p>
        <figure className="about-project__phases">
          <img
            className="phases__picture"
            src={require('../img/figma.png')}
            alt="Fáze vývoje projektu ve Figmě - screenshot"
          />
          <figcaption className="phases__picture--caption">
            Návrh vzhledu stránek, výběr barev a fontů
          </figcaption>
        </figure>
        <h3>Programování</h3>
        <p className="about-project__text">
          Aktuální a nejnáročnějí fáze. Držte nám palce! 🤞🏼
        </p>
      </section>
      <section>
        <h2>Plány do budoucna</h2>
        <p className="about-project__text">
          Jsme holky motivované, takže samozřejmě máme velké plány do budoucna!
          Aktuální cíle? Vytvořit kromě přihlašování i registraci, přidat kromě
          UX/UI designu i další IT obory, rozšířit uživatelský profil na
          portfolio propojené s Githubem, udělat mobilní aplikaci...
          <br />
          No, varovaly jsme vás - plány jsou to velké! 😄💫
        </p>
      </section>
    </>
  );
};

export default About;
