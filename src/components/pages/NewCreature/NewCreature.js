import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewCreature extends Component {
  state = {
    name: '',
    physical_description: '',
    background: '',
    img_path: '',
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_TYPES',
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChangeField = (fieldKey) => (event) => {
    this.setState({
      [fieldKey]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2>New Creature</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div>Name:</div>
            <input
              type="text"
              placeholder="Creature Name"
              onChange={this.handleChangeField('name')}
            />
          </label>
          <label>
            <div>Image File Name:</div>
            <input
              type="text"
              placeholder="Enter File Name:"
              onChange={this.handleChangeField('img_path')}
            />
          </label>
          <label>
            <div>Physical Description:</div>
            <textarea
              placeholder="What does the creature look like?"
              onChange={this.handleChangeField('physical_description')}
            ></textarea>
          </label>
          <label>
            <div>Background:</div>
            <textarea
              placeholder="What does the creature look like?"
              onChange={this.handleChangeField('background')}
            ></textarea>
          </label>
          <div className="blocks">
            <label>
              <div>Name:</div>
              <input
                type="radio"
                value="Creature Name"
                onChange={this.handleChangeField('name')}
              />
            </label>
          </div>
          <div>
            <button className="btn">ADD CREATURE</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(NewCreature);
