import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreatureForm extends Component {
  state = {
    enteredName: '',
    enteredOrigin: '',
  }

  handleClickAdd = () => {
    // this.props.addCreature({
    //   name: this.state.enteredName,
    //   origin: this.state.enteredOrigin,
    // });
    // dispatch to redux
    this.props.dispatch({
      type: 'ADD_TO_CREATURE_LIST',
      payload: {
        name: this.state.enteredName,
        origin: this.state.enteredOrigin,
      },
    });

    this.setState({
      enteredName: '',
      enteredOrigin: '',
    })
  }

  // handleChangeName = (event) => {
  //   this.setState({
  //     enteredName: event.target.value
  //   })
  // }

  // handleChangeOrigin = (event) => {
  //   this.setState({
  //     enteredOrigin: event.target.value
  //   })
  // }

  // handleAllChange = (event, fieldKey) => {
  //   this.setState({
  //     [fieldKey]: event.target.value
  //   })
  // }

  handleAllChange = (fieldKey) => {
    console.log('fieldKey', fieldKey);
    return (event) => {
      console.log('value:', event.target.value);
      this.setState({
        [fieldKey]: event.target.value
      })
    }
  }

  render() {
    return (
      <div className="stackBlock">
        <h2>Add a New Creature</h2>
        <div className="formWrap">
          <input
            className="field"
            type="text"
            placeholder="Creature Name"
            onChange={this.handleAllChange('enteredName')}
            value={this.state.enteredName}
          />
          <input
            className="field"
            type="text"
            placeholder="Creature Origin"
            onChange={this.handleAllChange('enteredOrigin')}
            value={this.state.enteredOrigin}
          />
          <button
            className="btn"
            onClick={this.handleClickAdd}
          >
            ADD CREATURE
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(CreatureForm);
