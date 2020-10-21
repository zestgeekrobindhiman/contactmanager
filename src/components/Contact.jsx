import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

import { deleteContact } from '../actions/contactActions'

class Contact extends Component {
  state = {
    showInfo: false
  }
  showDetails = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  onDeleteClick = id => {
    this.props.deleteContact(id)
  }
  render () {
    const { name, email, phone, id } = this.props.contact
    const { showInfo } = this.state
    return (
      <div className='card card-body mb-3'>
        <h3>
          {name}{' '}
          <FontAwesomeIcon
            icon={faSortDown}
            onClick={this.showDetails}
            style={{
              cursor: 'pointer'
            }}
          />
          <FontAwesomeIcon
            icon={faTrash}
            style={{
              cursor: 'pointer',
              color: 'red',
              float: 'right'
            }}
            className='ml-3'
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${id}`}>
            <FontAwesomeIcon
              icon={faEdit}
              style={{
                cursor: 'pointer',
                color: 'blue',
                float: 'right'
              }}
            />
          </Link>
        </h3>
        {showInfo ? (
          <ul className='list-group'>
            <li className='list-group-item'>{email}</li>
            <li className='list-group-item'>{phone}</li>
          </ul>
        ) : null}
      </div>
    )
  }
}
export default connect(null, { deleteContact })(Contact)
