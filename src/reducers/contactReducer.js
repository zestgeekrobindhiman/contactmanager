import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT
} from './types'

const initialState = {
  contacts: [
    // {
    //   id: '1',
    //   name: 'Robin',
    //   email: 'robin@gmail.com',
    //   phone: '9998886661'
    // },
    // {
    //   id: '2',
    //   name: 'Rohan',
    //   email: 'rohan@gmail.com',
    //   phone: '9998886661'
    // },
    // {
    //   id: '3',
    //   name: 'Akash',
    //   email: 'akash@gmail.com',
    //   phone: '9998886661'
    // }
  ],
  contact: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      }
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      }
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      }
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      }
    default:
      return state
  }
}
