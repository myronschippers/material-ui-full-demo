import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
      payload: {
        attribute: this.matchAvailableAttributes(attribute),
        creatureId: this.props.store.creatureDetails.id,
      },
    });
  }

  matchAvailableAttributes(attributeTag) {
    const allAttributes = this.props.store.allAttributes;
    const matchedAttributes = allAttributes.filter(item => attributeTag === item.tag);
    return matchedAttributes[0];
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
    const selectableOptions = this.props.store.allAttributes.filter((attrOpt, index) => {
      let matchWithSaved = attributes.filter(attrSaved => attrOpt.tag === attrSaved);
      return matchWithSaved.length === 0;
    });

    return (
      <div>
        <h4>Attributes:</h4>
        <ul className="blocks">
          {attributes.map((item, index) => {
            return (
              <li key={index}>
                {item}
                {editable &&
                  <button
                    type="button"
                    onClick={this.handleClickDeleteAttr(item)}
                  >
                    x
                  </button>
                }
              </li>
            );
          })}
          {editable && !this.state.isAdding &&
            <li>
              <button
                type="button"
                onClick={this.toggleAdd}
              >
                ADD
              </button>
            </li>
          }
        </ul>
        {this.state.isAdding &&
          <div>
            <select
              onChange={this.handleChangeSelection}
            >
              <option value="">Select an Attribute</option>
              {selectableOptions.map((item, index) => {
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
      </div>
    );
  }
}

export default connect(mapStoreToProps('allAttributes', 'creatureDetails'))(CreatureAttributes);
