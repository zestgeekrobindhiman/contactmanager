import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContact, updateContact } from '../actions/contactActions'

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }
  UNSAFE_componentWillReceiveProps (nextProps) {
    const { name, email, phone } = nextProps.contact
    this.setState({
      name,
      email,
      phone
    })
  }

  componentDidMount () {
    const { id } = this.props.match.params
    this.props.getContact(id)
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { name, email, phone } = this.state
    const { id } = this.props.match.params
    const updateContact = {
      id,
      name,
      email,
      phone
    }
    // console.log(updateContact)
    this.props.updateContact(updateContact)

    // empty state
    this.setState({
      name: '',
      email: '',
      phone: ''
    })

    this.props.history.push('/')
  }
  render () {
    const { name, email, phone } = this.state
    return (
      <div className='card mb-3'>
        <label className='card-header'>Add Contact</label>
        <div className='card-body'>
          <form onSubmit={this.onSubmit} className='form-group'>
            <label>Name</label>
            <input
              onChange={this.onChange}
              name='name'
              value={name}
              type='text'
              className='form-control mb-3'
            />
            <label>Email</label>

            <input
              onChange={this.onChange}
              name='email'
              value={email}
              type='text'
              className='form-control mb-3'
            />
            <label>Phone</label>
            <input
              onChange={this.onChange}
              name='phone'
              value={phone}
              type='text'
              className='form-control mb-3'
            />

            <button className='btn btn-dark btn-block'>Update</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ contact: state.contact })

export default connect(mapStateToProps, { getContact, updateContact })(
  EditContact
)
