import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, PageLink } from './SharedLayout.styles';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <PageLink to="/" end>
            Home
          </PageLink>
          <PageLink to="/movies">Movies</PageLink>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
