import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';

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
        
        {definedType != null && !this.state.isSelecting &&
          <div onClick={this.handleClickToSelect}>
            <div>Type:</div>
            <div>
              {definedType.label}
            </div>
          </div>
        }
        {this.state.isSelecting &&
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="type-select-label">
              Type:
            </InputLabel>
            <Select
              labelId="type-select-label"
              value={this.state.selectedType}
              onChange={this.handleChangeTypeSelection}
            >
              <MenuItem value=""><em>Select a Type</em></MenuItem>
              {this.props.store.allTypes.map((item, index) => {
                return (
                  <MenuItem
                    key={index}
                    value={item.id}
                  >
                    {item.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        }
      </label>
    );
  }
}

export default connect(mapStoreToProps('allTypes'))(TypeEditor);
