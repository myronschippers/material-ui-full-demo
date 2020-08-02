import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class TypeEditor extends Component {
  state = {
    selectedType: '',
    isSelecting: false,
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ALL_TYPES',
    });
  }

  handleChangeTypeSelection = (event) => {
    const newId = parseInt(event.target.value);

    this.setState({
      selectedType: newId
    }, () => {
      if (this.props.typeId
        && newId !== this.props.typeId
        && this.props.changeCallback
      ) {
        this.props.changeCallback(newId);
      }
    });
  }

  matchTypeById(typeId) {
    if (!typeId || typeId === ' ') {
      return null;
    }

    const matchList = this.props.store.allTypes.filter((item, index) => {
      return item.id === typeId;
    });

    return matchList[0];
  }

  handleClickToSelect = (event) => {
    this.setState({
      selectedType: this.props.typeId,
      isSelecting: true,
    });
  }

  render() {
    const definedType = this.matchTypeById(this.props.typeId);

    return (
      <label className="vr vr_x2">
        <div>Type:</div>
        {definedType != null && !this.state.isSelecting &&
          <div onClick={this.handleClickToSelect}>
            {definedType.label}
          </div>
        }
        {this.state.isSelecting &&
          <select
            value={this.state.selectedType}
            onChange={this.handleChangeTypeSelection}
          >
            <option type="">Select a Type</option>
            {this.props.store.allTypes.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item.id}
                >
                  {item.label}
                </option>
              );
            })}
          </select>
        }
      </label>
    );
  }
}

export default connect(mapStoreToProps('allTypes'))(TypeEditor);
