/** @format */
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, deleteContact, filterContacts } from "./action";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const Itemsreducer = createReducer(initialState, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});

const filterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

const contactReducer = combineReducers({
  items: Itemsreducer,
  filter: filterReducer,
});

export default contactReducer;
