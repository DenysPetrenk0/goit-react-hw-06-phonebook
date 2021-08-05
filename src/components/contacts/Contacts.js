/** @format */

import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/action";
import { ContactsLi } from "./ContactsStyles";

const Contacts = ({ name, number, deleteContact, id }) => {
  const remuvContact = () => {
    deleteContact(id);
  };
  return (
    <ContactsLi>
      {name}: {number}
      <button type="button" onClick={remuvContact}>
        Delete
      </button>
    </ContactsLi>
  );
};

export default connect(null, {
  deleteContact,
})(Contacts);
