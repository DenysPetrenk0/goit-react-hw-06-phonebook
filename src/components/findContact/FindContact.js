/** @format */

import React from "react";
import { DivFindContact } from "./FindContactStyles";
import { connect } from "react-redux";
import { filterContacts } from "../../redux/action";

const FindContact = ({ filterContacts, filter }) => {
  const onHandleChange = (event) => {
    const query = event.target.value;
    filterContacts(query);
  };

  return (
    <DivFindContact>
      Find Contsct by Name:
      <input
        type="text"
        value={filter}
        name="filter"
        autoComplete="off"
        onChange={onHandleChange}
      />
    </DivFindContact>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { filterContacts })(FindContact);
