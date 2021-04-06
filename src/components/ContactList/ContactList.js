import PropTypes from 'prop-types';
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.TaskList}>
    {contacts.map((contact) => (
      <li className = {styles.TaskList_item}key={contact.id}>
        {contact.name + ":" + contact.number}
        {
          <button
            className={styles.TaskList_button}
            type="button"
            name="delte"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        }
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;