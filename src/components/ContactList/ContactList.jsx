// import PropTypes from 'prop-types';
// import { List, ListButton, ListWrapper } from './ContactList.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts, selectFilter } from 'redux/selectors';
// import { deleteContactThunk } from 'redux/operations';

// export const ContactList = () => {
//   const contacts = useSelector(selectContacts);
//   const filter = useSelector(selectFilter);

//   const dispatch = useDispatch();

//   const filterContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   const onRemoveContact = id => dispatch(deleteContactThunk(id));

//   return (
//     <ListWrapper>
//       <List>
//         {filterContacts.map(contact => (
//           <li key={contact.id}>
//             <p>
//               {contact.name} : {contact.phone}
//             </p>
//             <ListButton
//               type="button"
//               onClick={() => onRemoveContact(contact.id)}
//             >
//               Delete
//             </ListButton>
//           </li>
//         ))}
//       </List>
//     </ListWrapper>
//   );
// };

// ContactList.prototype = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       phone: PropTypes.string,
//     })
//   ),
//   onRemoveContact: PropTypes.func,
// };
