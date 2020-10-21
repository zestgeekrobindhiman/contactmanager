import Axios from 'axios'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT
} from '../reducers/types'

export const getContacts = () => async dispatch => {
  const res = await Axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(res.data)
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  })
}
export const getContact = id => async dispatch => {
  const res = await Axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  //   console.log(res.data)
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  })
}

export const addContact = contact => async dispatch => {
  const res = await Axios.post(
    'https://jsonplaceholder.typicode.com/users',
    contact
  )

  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  })
}

export const deleteContact = id => async dispatch => {
  try {
    Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  } catch (error) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  }
}

export const updateContact = contact => async dispatch => {
  const res = await Axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  )

  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  })
}
