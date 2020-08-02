import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// CUSTOM COMPONENT
import AlertMessages from '../../AlertMessages/AlertMessages';
import CreatureHabitats from '../../CreatureHabitats/CreatureHabitats';
import CreatureAttributes from '../../CreatureAttributes/CreatureAttributes';
import TypeEditor from '../../TypeEditor/TypeEditor';

class Edit extends Component {
  state = {
    hasEdited: false,
    edit_img_path: '',
  }

  componentDidMount() {
    if (!this.props.store.creatureDetails.id
      || this.props.store.creatureDetails.id !== this.props.match.params.id
    ) {
      this.props.dispatch({
        type: 'GET_CREATURE_DETAILS',
        payload: parseInt(this.props.match.params.id),
      });
    }
  }

  /**
   * Scan through the current state and extract only updated values.
   * @returns {object}
   */
  assembleEditedValues() {
    const possibleValueKeys = Object.keys(this.props.store.creatureDetails);
    const editedValues = {};

    for (let fieldKey of possibleValueKeys) {
      const currentValue = this.state.form[fieldKey];
      const storedValue = this.props.store.creatureDetails[fieldKey];

      if (currentValue && currentValue !== storedValue) {
        editedValues[fieldKey] = currentValue;
      }
    }

    return editedValues;
  }

  handleSubmitEdit = (event) => {
    event.preventDefault();
    const onlyEditedValues = this.assembleEditedValues();
    const allCreatureData = {
      ...this.props.store.creatureDetails,
      ...onlyEditedValues,
    };

    this.props.dispatch({
      type: 'UPDATE_CREATURE_DETAILS',
      payload: allCreatureData,
    });
    this.props.history.push(`/creature-details/${allCreatureData.id}`);
  }

  changeType = (newTypeId) => {
    this.handleChangeField('type_id')({ target: { value: newTypeId } });
  }

  handleChangeField = (fieldKey) => (event) => {
    const enteredValue = event.target.value;
    let imageFile = this.props.store.creatureDetails.img_path;

    if (fieldKey === 'img_path'
      && (
        enteredValue.indexOf('.jpg') !== -1
        || enteredValue.indexOf('.jpeg') !== -1
        || enteredValue.indexOf('.png') !== -1
        || enteredValue.indexOf('.gif') !== -1
      )
    ) {
      imageFile = enteredValue;
    }

    this.setState({
      hasEdited: true,
      edit_img_path: imageFile,
      form: {
        ...this.state.form,
        [fieldKey]: enteredValue
      }
    });
  }

  handleClickToBack = () => {
    const creatureId = this.props.match.params.id;
    this.props.history.push(`/creature-details/${creatureId}`);
  }

  render() {
    const {
      creatureDetails
    } = this.props.store;

    let editableImgPath = this.props.store.creatureDetails.img_path;

    if (this.state.edit_img_path) {
      editableImgPath = this.state.edit_img_path;
    }

    return (
      <div>
        <div>
          <h2>Edit Creature Details</h2>
          <button
            type="button"
            className="btn"
            onClick={this.handleClickToBack}
          >
            BACK TO DETAILS
          </button>
        </div>
        <form onSubmit={this.handleSubmitEdit}>
          <label className="vr vr_x2">
            <div>Name:</div>
            <input
              type="text"
              placeholder="Creature Name"
              defaultValue={creatureDetails.name}
              onChange={this.handleChangeField('name')}
            />
          </label>
          <TypeEditor
            typeId={creatureDetails.type_id}
            changeCallback={this.changeType}
          />
          <div className="vr">
            {editableImgPath &&
              <img
                src={`images/${editableImgPath}`}
                alt={creatureDetails.name}
              />
            }
          </div>
          <label className="vr vr_x2">
            <div>Image File Name:</div>
            <input
              type="text"
              placeholder="Enter File Name:"
              defaultValue={creatureDetails.img_path}
              onChange={this.handleChangeField('img_path')}
            />
          </label>
          <label className="vr vr_x2">
            <div>Physical Description:</div>
            <textarea
              placeholder="What does the creature look like?"
              defaultValue={creatureDetails.physical_description}
              onChange={this.handleChangeField('physical_description')}
            ></textarea>
          </label>
          <label className="vr vr_x2">
            <div>Background:</div>
            <textarea
              placeholder="What does the creature look like?"
              defaultValue={creatureDetails.background}
              onChange={this.handleChangeField('background')}
            ></textarea>
          </label>

          <div className="vr vr_x2">
            <CreatureAttributes
              editable
              attributes={creatureDetails.attributes}
            />
          </div>

          <div className="vr vr_x2">
            <CreatureHabitats
              editable
              habitats={creatureDetails.habitats}
            />
          </div>

          <div>
            <button
              className="btn"
              disabled={!this.state.hasEdited}
            >
              SAVE CHANGES
            </button>
          </div>
        </form>

        <AlertMessages />
      </div>
    );
  }
}

export default connect(mapStoreToProps('creatureDetails'))(Edit);
