/** @format */

import React from "react";
import Contacts from "./components/contacts/Contacts";
import Phonebook from "./components/phonebook/Phonebook";
import Section from "./components/section/Section";
import FindContact from "./components/findContact/FindContact";
import { connect } from "react-redux";

// class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],

//     filter: "",
//   };

//   onHandleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   onHandleSubmit = (nameContact, numberContact) => {
//     this.setState((prev) => ({
//       contacts: [
//         ...prev.contacts,
//         { name: nameContact, number: numberContact, id: uuidv4() },
//       ],
//     }));
//   };

//   deleteContact = (id) => {
//     this.setState((prev) => ({
//       contacts: prev.contacts.filter((contact) => contact.id !== id),
//     }));
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//     console.log(this.state);
//     console.log(prevState);
//   }

//   componentDidMount() {
//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   render() {
//     const findContacts = this.state.contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(this.state.filter)
//     );
//     return (
//       <>
//         <Section title="Phonebook">
//           <Phonebook
//             onHandleSubmit={this.onHandleSubmit}
//             contacts={this.state.contacts}
//           />
//         </Section>
//         <Section title="Contacts">
//           <ul>
//             {findContacts.map((contact) => (
//               <Contacts
//                 name={contact.name}
//                 number={contact.number}
//                 key={contact.id}
//                 id={contact.id}
//                 deleteContact={this.deleteContact}
//               />
//             ))}
//           </ul>
//         </Section>
//       </>
//     );
//   }
// }

// export default App;

const App = ({ contacts, filter }) => {
  const findContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <FindContact />
        <ul>
          {findContacts.map((contact) => (
            <Contacts
              name={contact.name}
              number={contact.number}
              key={contact.id}
              id={contact.id}
            />
          ))}
        </ul>
      </Section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

export default connect(mapStateToProps)(App);
