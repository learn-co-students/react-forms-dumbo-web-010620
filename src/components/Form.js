import React from 'react';

class Form extends React.Component {
  // why don't we have constructor(props) or super(props)
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }
}

export default Form;


// import React from 'react';

// class Form extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry",
//     submittedData: []
//   }

//   handleFirstNameChange = event => {
//     console.log(event.target.value)
//     this.setState({
//       firstName: event.target.value
//     })
//     // console.log(this.state.firstName) // why doesn't this console.log anything?2
//   }

//   handleLastNameChange = event => {
//     this.setState({
//       lastName: event.target.value
//     })
//   }

//   handleSubmit = event => {
//     // it doesn't look like this is actually preventing default
//     // also why do we even need this? I thought React event handlers
//     // had preventDefault() built in?
//     event.preventDefault()
//     let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
//     let dataArray = this.state.submittedData.concat(formData)
//     this.setState({submittedData: dataArray})

//     // this.setState({
//     // submissions: this.state.submissions.push(event.target.value) })
//     // not sure about this key value assignment working  
//   }

//   listOfSubmissions = () => {
//     return this.state.submittedData.map(data => {
//       return <div><span>{data.firstName}</span><span>{data.lastName}</span></div>
//     })
//   }

//   render() {
//     return (
//   <div>
//      <form onSubmit={event => this.handleSubmit(event)}>
//         <input 
//           type="text" 
//           name="firstName" 
//           onChange={event => this.handleFirstNameChange(event)} 
//           value={this.state.firstName} 
//         />
//         <input 
//           type="text" 
//           name="lastName" 
//           onChange={event => this.handleLastNameChange(event)} 
//           value={this.state.lastName} 
//         />
//         <input 
//           type="submit" 
//         />
//       </form>
//       {this.listOfSubmissions()}
//     </div>
//     )
//   }
// }

// export default Form;