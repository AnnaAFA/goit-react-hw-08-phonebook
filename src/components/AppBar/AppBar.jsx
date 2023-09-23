import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/selectors';

export const AppBar = () => {
  const authenticated = useSelector(selectAuthenticated);
  return (
    <header>
      <Navigation />
      {authenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
