import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/selectors';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthenticated);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {authenticated && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
