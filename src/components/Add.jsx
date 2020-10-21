import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions/contactActions'

class Add extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const { name, email, phone } = this.state

    const newContact = {
      name,
      email,
      phone
    }
    // console.log(newContact)
    this.props.addContact(newContact)

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

            <button className='btn btn-dark btn-block'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { addContact })(Add)
