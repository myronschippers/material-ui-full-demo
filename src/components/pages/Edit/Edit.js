import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';

// MATERIAL-UI
import {
  Button,
  Grid,
  Typography,
  TextField,
  Box,
  LinearProgress,
} from '@material-ui/core';

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
    const showFields = creatureDetails.id ? true : false;

    let editableImgPath = this.props.store.creatureDetails.img_path;

    if (this.state.edit_img_path) {
      editableImgPath = this.state.edit_img_path;
    }

    return (
      <div>
        <Grid
          container
          alignItems="center"
          justify="space-between"
        >
          <Grid item>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
            >
              Edit Creature Details
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={this.handleClickToBack}
            >
              BACK TO DETAILS
            </Button>
          </Grid>
        </Grid>
        {!showFields && <LinearProgress />}
        {showFields &&
        <form onSubmit={this.handleSubmitEdit}>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <Box mb={3}>
                {editableImgPath &&
                  <img
                    src={`images/${editableImgPath}`}
                    alt={creatureDetails.name}
                  />
                }
              </Box>

              <TextField
                label="Image File Name:"
                variant="outlined"
                fullWidth
                defaultValue={creatureDetails.img_path}
                onChange={this.handleChangeField('img_path')}
              />
            </Grid>

            <Grid item xs={7}>
              <Box mb={3}>
                <TextField
                  label="Name:"
                  variant="outlined"
                  fullWidth
                  defaultValue={creatureDetails.name}
                  onChange={this.handleChangeField('name')}
                />
              </Box>

              <Box mb={3}>
                <TypeEditor
                  typeId={creatureDetails.type_id}
                  changeCallback={this.changeType}
                />
              </Box>

              <Box mb={3}>
                <TextField
                  label="Physical Description:"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={10}
                  defaultValue={creatureDetails.physical_description}
                  onChange={this.handleChangeField('physical_description')}
                />
              </Box>

              <Box mb={3}>
                <TextField
                  label="Background:"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={10}
                  defaultValue={creatureDetails.background}
                  onChange={this.handleChangeField('background')}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box mb={3}>
                <CreatureAttributes
                  editable
                  attributes={creatureDetails.attributes}
                />
              </Box>

              <Box mb={3}>
                <CreatureHabitats
                  editable
                  habitats={creatureDetails.habitats}
                />
              </Box>

              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!this.state.hasEdited}
                >
                  SAVE CHANGES
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
        }

        <AlertMessages />
      </div>
    );
  }
}

export default connect(mapStoreToProps('creatureDetails'))(Edit);
