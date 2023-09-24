import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/selectors';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const authenticated = useSelector(selectAuthenticated);
  return (
    <Header>
      <Navigation />
      {authenticated ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
