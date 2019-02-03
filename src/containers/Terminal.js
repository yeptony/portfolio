/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Input from '../components/Input';

class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      content: ['Welcome to Yeptony portfolio terminal v1.0.0', new Date().toLocaleString(), ' ', 'Enter "help" for more informations', ' ']
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    this.setState({ 
      value: '',
      content: this.state.content.concat(this.state.value)
    });
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="terminal-container">
        {this.state.content.map((l, i) => (
          <pre key={i}>{l}</pre>
        ))}
        <Input value={this.state.value} onChange={this.handleChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Terminal;
