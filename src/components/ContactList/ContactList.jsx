import PropTypes from 'prop-types';
import { DeleteBtn } from './ContactList.styled';

const ContactList = ({ visibleContact, deleteContacts }) => {
  return (
    <ul>
      {visibleContact.map(({ id, number, name }) => {
        return (
          <li key={id}>
            <span>
              {name}: {number}
            </span>
            <DeleteBtn type="button" onClick={() => deleteContacts(id)}>
              Delete
            </DeleteBtn>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  visibleContact: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

export default ContactList;
