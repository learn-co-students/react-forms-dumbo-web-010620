
import React, { Component } from 'react';

class Form extends Component {
  
  

  render() {
    return (
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
          <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.props.formData.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.props.formData.lastName} />
        </form>
      </div>
    )
  }
}

export default Form;