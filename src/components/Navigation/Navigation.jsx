import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/selectors';
import { StyledNavLink } from 'components/AuthNav/AuthNav.styled';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthenticated);
  return (
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {authenticated && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </nav>
  );
};
