import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import {
  List,
  ListButton,
  ListItem,
  ListWrapper,
  Name,
  NumberStyle,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };
  return (
    <ListWrapper>
      <List>
        {showContacts &&
          contacts.map(contact => (
            <ListItem key={contact.id}>
              <Name>{contact.name}</Name>
              <NumberStyle>{contact.number}</NumberStyle>
              <ListButton
                onClick={() => handleDeleteContact(contact.id)}
                type="button"
                aria-label="Delete contact"
              >
                &times;
              </ListButton>
            </ListItem>
          ))}
      </List>
    </ListWrapper>
  );
};
