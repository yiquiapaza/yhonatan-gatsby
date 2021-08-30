import * as React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import { Layout } from '../components/layout';
const IndexPage = () => {
  return (
    <main>
      <Helmet >
        <meta charSet='utf-8'/>
        <title>Home|Yhonatan</title>
        <link rel='canonical' ref='https://yhonatanjesus.com'/>
        <Layout
          title="Cooking in the dark: a mixed reality empathy experience for the embodiment of blindness"
          abstract="In the context of promoting a sense of empathy for the difference in people without disabilities, we propose a gaming experience that allows users to embody having a visual impairment. By occluding the user’s vision and providing spatialized audio and passive haptic feedback, allied with a speech recognition digital assistant, our goal is to offer a multi-sensory experience to enhance the user’s sense of embodiment inside a mixed reality blindness simulation. Inside the game environment, while expecting a guest to arrive, the player is required to cook a meal completely in the dark. Being aided solely by their remaining senses and a digital assistant, players must go through several tasks as to prepare dinner in time, risking to lose a love interest."
          date="2021-06-21"
          authors="Renan Guarese, Franklin BastidasJoão Becker,Mariane Giambastiani,Yhonatan Iquiapaza,Lennon Macedo,Luciana Nedel,Anderson Maciel,Fabio Zambetta,Ron van Schyndel"
        />
      </Helmet>
      <Header />
    </main>
  );
};

export default IndexPage;
