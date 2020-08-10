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

class CreatureHabitats extends Component {
  state = {
    isAdding: false,
    newHabitatId: '',
    anchorEl: null,
  }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_ALL_HABITATS' });
  }

  handleClickDeleteHabitat = (habitat) => (event) => {
    this.props.dispatch({
      type: 'DELETE_CREATURE_HABITAT',
      payload: {
        habitat: this.matchAvailableHabitats(habitat),
        creatureId: this.props.store.creatureDetails.id,
      },
    });
  }

  matchAvailableHabitats(habitatLabel) {
    const allHabitats = this.props.store.allHabitats;
    const matchedHabitats = allHabitats.filter(item => habitatLabel === item.label);
    return matchedHabitats[0];
  }

  handleClickAddHabitat = () => {
    this.props.dispatch({
      type: 'SAVE_CREATURE_HABITAT',
      payload: {
        habitatId: this.state.newHabitatId,
        creatureId: this.props.store.creatureDetails.id
      }
    });
    this.toggleAdd();
  }

  handleChangeSelection = (event) => {
    this.setState({
      newHabitatId: parseInt(event.target.value)
    });
  }

  toggleAdd = (event) => {
    console.log('Toggle Add');
    this.setState({
      isAdding: !this.state.isAdding,
      newHabitatId: !this.state.isAdding ? '' : this.state.newHabitatId,
      anchorEl: this.state.isAdding ? null : event.currentTarget,
    })
  }

  seeHabitatSelectionDetails() {
    let habitatDetails = null;

    if (this.state.newHabitatId) {
      const matchedHabitat = this.props.store.allHabitats.filter((item) => {
        return this.state.newHabitatId === item.id;
      });
      habitatDetails = (
        <Typography variant="body1" component="p" gutterBottom>
          {matchedHabitat[0].terrain}
        </Typography>
      );
    }

    return habitatDetails;
  }

  render() {
    const {
      habitats,
      editable,
    } = this.props;
    const selectableOptions = this.props.store.allHabitats.filter((habitatOpt, index) => {
      let matchWithSaved = habitats.filter(habitatSaved => habitatOpt.label === habitatSaved);
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
            Habitats:
          </Typography>
          <Box>
            <Grid container spacing={1}>
              {habitats.map((item, index) => {
                let chipProps = {
                  key: index,
                  label: item,
                  color: 'secondary',
                };

                if (editable) {
                  chipProps.onDelete = this.handleClickDeleteHabitat(item)
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
                  <InputLabel id="habitat-select-label">
                    Habitat:
                  </InputLabel>
                  <Select
                    labelId="habitat-select-label"
                    label="Habitat:"
                    value={this.state.newHabitatId}
                    onChange={this.handleChangeSelection}
                  >
                    <MenuItem value=""><em>Select a Habitat</em></MenuItem>
                    {selectableOptions.map((item, index) => {
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
              </Box>
              {this.seeHabitatSelectionDetails()}
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  size="small"
                  onClick={this.handleClickAddHabitat}
                >
                  Add Habitat
                </Button>
              </div>
            </Box>
          </Popover>
        </Box>
      </Paper>
    );
  }
}

export default connect(mapStoreToProps('allHabitats', 'creatureDetails'))(
  withStyles(muiStyles)(CreatureHabitats)
);
