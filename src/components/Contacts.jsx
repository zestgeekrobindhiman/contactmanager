import React from 'react'
import { connect } from 'react-redux'
import Contact from './Contact'
import { getContacts } from '../actions/contactActions'

class Contacts extends React.PureComponent {
  componentDidMount () {
    this.props.getContacts()
  }
  render () {
    const { contacts } = this.props
    return (
      <>
        <div className='container mb-3'>
          <h1 className='display-3'>
            <span className='text-danger'>Contact</span> Manager
          </h1>
        </div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getUSer: async () => {
//       const res = await Axios.get('https://jsonplaceholder.typicode.com/users')
//       dispatch({
//         type: 'GET_USER',
//         payload: res.data
//       })
//     }
//   }
// }

export default connect(mapStateToProps, { getContacts })(Contacts)
