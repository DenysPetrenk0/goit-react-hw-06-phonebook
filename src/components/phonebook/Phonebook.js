/** @format */
import React, { Component } from "react";
import { Form } from "./PhoneBookStyles";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addContact } from "../../redux/action";

class Phonebook extends Component {
  state = {
    name: "",
    number: "",
  };

  onHandleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    const { name, number } = this.state;
    event.preventDefault();
    if (
      this.props.contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      this.props.addContact({ name, number, id: uuidv4() });
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.onSubmit}>
        <label>
          Name:
          <input
            value={name}
            type="text"
            name="name"
            autoComplete="off"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={this.onHandleChange}
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
          Number:
          <input
            value={number}
            type="tel"
            name="number"
            autoComplete="off"
            onChange={this.onHandleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps, { addContact })(Phonebook);
