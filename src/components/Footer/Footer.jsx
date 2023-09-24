import { IconContext } from 'react-icons';
import { BsGithub } from 'react-icons/bs';
import { Descr, Link, Wrap } from './Footer.styled';
export const Footer = () => {
  return (
    <Wrap>
      <Descr>Developed by Anna Fedoruk</Descr>
      <Link
        href="https://github.com/AnnaAFA/goit-react-hw-08-phonebook"
        target="_blank"
      >
        <IconContext.Provider value={{ color: 'white', size: '2em' }}>
          <div>
            <BsGithub />
          </div>
        </IconContext.Provider>
      </Link>
    </Wrap>
  );
};
