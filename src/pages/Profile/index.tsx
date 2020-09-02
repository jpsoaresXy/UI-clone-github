import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">21</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
       <div className="wrapper">
         <span className="offset"/>
       <TabContent />
       </div>
        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={"jpsoaresXy"}
            name={"João Pedro Lima"}
            avatarUrl={"https://avatars2.githubusercontent.com/u/59944502?v=4"}
            followers={100}
            following={7}
            company={undefined}
            location={"Taubaté-SP,Brasil"}
            email={undefined}
            blog={"linkedin.com/in/jp-soares/"}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"jpsoaresXy"}
                  reponame={"be-the-hero"}
                  description={"Teste"}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={0}
                  forks={8}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
