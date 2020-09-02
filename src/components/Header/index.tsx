import React from 'react';

import { Container, GithubLog, SearchForm } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <GithubLog />
      <SearchForm>
        <input placeholder="Enter Username or Repo..." />
      </SearchForm>

    </Container>
  );
}

export default Header;