import React from 'react';
import AboutC from '../src/components/about/about';

const About = ({ aboutData, aboutTeamData }) => {
  console.log(aboutData, 'about');
  return (
    <div>
      <AboutC aboutData={aboutData} aboutTeamData={aboutTeamData} />
    </div>
  );
};

export default About;

export async function getServerSideProps() {
  const aboutResponse = await fetch('http://localhost:8000/about');
  const aboutData = await aboutResponse.json();

  const aboutTeamResponse = await fetch('http://localhost:8000/aboutTeam');
  const aboutTeamData = await aboutTeamResponse.json();

  return {
    props: {
      aboutData: aboutData[0],
      aboutTeamData: aboutTeamData[0],
    },
  };
}
