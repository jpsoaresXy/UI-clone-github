import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/jpsoaresXy"}>
          jpsoaresXy
        </Link>
        <span>/</span>

        <Link className={"reponame"} to={"/jpsoaresXy/UI-clone-github"}>
          UI-clone-github
        </Link>
      </Breadcrumb>

      <p>Recriando a interface do github para exercitar o conhecimento.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>starts</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/jpsoaresXy/UI-clone-github"}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
