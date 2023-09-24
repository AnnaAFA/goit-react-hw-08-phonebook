import { AppBar } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FooterStyle, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <FooterStyle>
        <Footer />
      </FooterStyle>
    </div>
  );
};
