/* eslint-disable react/destructuring-assignment */
import React from 'react';
import uniqid from 'uniqid';
import Input from '../components/Input';
import checkCommands from '../helpers/commands';

class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      content: [
        'Welcome to Yeptony portfolio terminal v1.0.0',
        new Date().toLocaleString(),
        <br key={uniqid()} />,
        'Enter "help" for more informations',
        <br key={uniqid()} />
      ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate() {
    const el = document.getElementsByClassName('terminal-container');
    el[0].scrollTop = el[0].scrollHeight;
  }

  onSubmit(e) {
    if (this.state.value === 'clear') {
      this.setState({
        value: '',
        content: checkCommands(this.state.value)
      });
    } else {
      this.setState({ 
        value: '',
        content: this.state.content.concat(checkCommands(this.state.value))
      });
    }
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="terminal-container">
        {this.state.content.map((l, i) => (
          <p key={uniqid()}>{l}</p>
        ))}
        <Input value={this.state.value} onChange={this.handleChange} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Terminal;
