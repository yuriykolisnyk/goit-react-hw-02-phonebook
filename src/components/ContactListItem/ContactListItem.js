const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li>
      <span>{contact.name}: </span>
      <a href={`tel:${contact.number}`}>{contact.number}</a>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
