import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import {
  Typography,
  Paper,
  Chip,
  Box,
} from '@material-ui/core';

class CreatureAttributes extends Component {
  state = {
    isAdding: false,
    newAttributeId: '',
  }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_ALL_ATTRIBUTES' });
  }

  handleClickDeleteAttr = (attribute) => (event) => {
    this.props.dispatch({
      type: 'DELETE_CREATURE_ATTRIBUTE',
      payload: attribute,
    });
  }

  handleClickAddAttribute = () => {
    this.props.dispatch({
      type: 'SAVE_CREATURE_ATTRIBUTE',
      payload: {
        attributeId: this.state.newAttributeId,
        creatureId: this.props.store.creatureDetails.id
      }
    });
    this.toggleAdd();
  }

  handleChangeSelection = (event) => {
    this.setState({
      newAttributeId: parseInt(event.target.value)
    });
  }

  toggleAdd = () => {
    console.log('Toggle Add');
    this.setState({
      isAdding: !this.state.isAdding,
      newAttributeId: !this.state.isAdding ? '' : this.state.newAttributeId,
    })
  }

  render() {
    const {
      attributes,
      editable,
    } = this.props;

    return (
      <Paper>
        <Box p={2}>
          <Typography
            variant="h6"
            component="h4"
            gutterBottom
          >
            Attributes:
          </Typography>
          <Box>
            {attributes.map((item, index) => {
              let chipProps = {
                key: index,
                label: item,
                color: 'primary',
              };

              if (editable) {
                chipProps.onDelete = this.handleClickDeleteAttr(item)
              }

              return (
                <Chip
                  {...chipProps}
                />
              );
            })}
            {editable && !this.state.isAdding &&
              <button
                type="button"
                onClick={this.toggleAdd}
              >
                ADD
              </button>
            }
          </Box>
          {this.state.isAdding &&
            <div>
              <select
                onChange={this.handleChangeSelection}
              >
                <option value="">Select an Attribute</option>
                {this.props.store.allAttributes.map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={item.id}
                    >
                      {item.tag}
                    </option>
                  );
                })}
              </select>
              <div>
                <button
                  type="button"
                  className="btn"
                  onClick={this.handleClickAddAttribute}
                >
                  Add Attribute
                </button>
              </div>
            </div>
          }
        </Box>
      </Paper>
    );
  }
}

export default connect(mapStoreToProps('allAttributes', 'creatureDetails'))(CreatureAttributes);
