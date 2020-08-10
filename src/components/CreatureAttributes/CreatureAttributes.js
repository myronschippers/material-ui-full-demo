import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// MATERIAL-UI
import {
  Typography,
  Paper,
  Chip,
  Box,
  Button,
  Popover,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Grid,
} from '@material-ui/core';
import {
  withStyles,
  createStyles,
} from '@material-ui/core/styles';

const muiStyles = (theme) => createStyles({
  blockHdg: {
    color: theme.palette.primary.main,
    textShadow: `0 2px 1px ${theme.palette.common.black}`,
  }
});

class CreatureAttributes extends Component {
  state = {
    isAdding: false,
    newAttributeId: '',
    anchorEl: null,
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

  toggleAdd = (event) => {
    console.log('Toggle Add');
    this.setState({
      isAdding: !this.state.isAdding,
      newAttributeId: !this.state.isAdding ? '' : this.state.newAttributeId,
      anchorEl: this.state.isAdding ? null : event.currentTarget,
    });
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
      <Paper>
        <Box p={2}>
          <Typography
            variant="h6"
            component="h4"
            gutterBottom
            className={this.props.classes.blockHdg}
          >
            Attributes:
          </Typography>
          <Box>
            <Grid container spacing={1}>
              {attributes.map((item, index) => {
                let chipProps = {
                  label: item,
                  color: 'secondary',
                };

                if (editable) {
                  chipProps.onDelete = this.handleClickDeleteAttr(item)
                }

                return (
                  <Grid item key={index}>
                    <Chip
                      {...chipProps}
                    />
                  </Grid>
                );
              })}
              {editable &&
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="button"
                    onClick={this.toggleAdd}
                  >
                    ADD
                  </Button>
                </Grid>
              }
            </Grid>
          </Box>

          <Popover
            anchorEl={this.state.anchorEl}
            onClose={this.toggleAdd}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={this.state.isAdding}
          >
            <Box p={1}>
              <Box mb={2}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="attribute-select-label">
                    Attribute:
                  </InputLabel>
                  <Select
                    labelId="attribute-select-label"
                    label="Attribute:"
                    value={this.state.newAttributeId}
                    onChange={this.handleChangeSelection}
                  >
                    <MenuItem value=""><em>Select an Attribute</em></MenuItem>
                    {selectableOptions.map((item, index) => {
                      return (
                        <MenuItem
                          key={index}
                          value={item.id}
                        >
                          {item.tag}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  size="small"
                  onClick={this.handleClickAddAttribute}
                >
                  Add Attribute
                </Button>
              </div>
            </Box>
          </Popover>

        </Box>
      </Paper>
    );
  }
}

export default connect(mapStoreToProps('allAttributes', 'creatureDetails'))(
  withStyles(muiStyles)(CreatureAttributes)
);
