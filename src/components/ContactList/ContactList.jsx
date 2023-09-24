import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations';
import {
  selectContactsLoading,
  selectFilteredContacts,
} from 'redux/contacts/selectors';
import {
  List,
  ListButton,
  ListItem,
  ListWrapper,
  Name,
  NumberStyle,
  Text,
} from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectContactsLoading);

  const dispatch = useDispatch();

  const showContacts = Array.isArray(contacts) && contacts.length > 0;

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };
  return (
    <ListWrapper>
      <List>
        {isLoading && <Loader />}
        {showContacts ? (
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
          ))
        ) : (
          <Text>No contacts</Text>
        )}
      </List>
    </ListWrapper>
  );
};
