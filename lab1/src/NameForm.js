import React from 'react';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',isAvail:false, isError:true};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  if (this.state.value.match(/^[a-zA-Z]+$/)) {
      event.preventDefault();
      this.setState({isAvail:true})
    } else {
      event.preventDefault();
  }
}
  render() {
    return (
      <div>
      {(!this.state.isAvail) ?
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button>Submit</button>
        </form>
        :
        <div><p>Good morning,
          {this.state.value}
        </p></div>
      } </div>
    );
  }
}

export default NameForm;
