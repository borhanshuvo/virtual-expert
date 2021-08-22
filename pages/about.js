import React from "react";
import AboutC from "../src/components/about/about";

const About = ({
  aboutData,
  aboutTeamData,
  aboutUniquetData,
  aboutUniquetListData,
  teams,
}) => {
  return (
    <div>
      <AboutC
        aboutData={aboutData}
        aboutTeamData={aboutTeamData}
        aboutUniquetData={aboutUniquetData}
        aboutUniquetListData={aboutUniquetListData}
        teams={teams}
      />
    </div>
  );
};

export default About;

export async function getServerSideProps() {
  const aboutResponse = await fetch(
    "https://virtual-expert.herokuapp.com/about"
  );
  const aboutData = await aboutResponse.json();

  const aboutUniqueResponse = await fetch(
    "https://virtual-expert.herokuapp.com/aboutUnique"
  );
  const aboutUniquetData = await aboutUniqueResponse.json();

  const aboutUniqueListResponse = await fetch(
    "https://virtual-expert.herokuapp.com/aboutUniqueList"
  );
  const aboutUniquetListData = await aboutUniqueListResponse.json();

  const aboutTeamResponse = await fetch(
    "https://virtual-expert.herokuapp.com/aboutTeam"
  );
  const aboutTeamData = await aboutTeamResponse.json();

  const resTeams = await fetch("https://virtual-expert.herokuapp.com/teams");
  const teams = await resTeams.json();

  return {
    props: {
      aboutData: aboutData[0],
      aboutUniquetData: aboutUniquetData[0],
      aboutUniquetListData: aboutUniquetListData,
      aboutTeamData: aboutTeamData[0],
      teams,
    },
  };
}
