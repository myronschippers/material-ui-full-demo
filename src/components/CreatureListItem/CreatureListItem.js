import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// MATERIAL-UI
import {
  Button,
  Paper,
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
} from '@material-ui/core';
import {
  withStyles,
  createStyles,
} from '@material-ui/core/styles';

const muiStyles = (theme) => createStyles({
  // styles for main heading
  mainHdg: {
    color: theme.palette.common.white,
  },
  // styles for sub heading
  subHdg: {
    color: theme.palette.common.white,
  },
  // styles for description content
  desc: {
    height: '90px',
    overflowY: 'auto',
    margin: `0 0 ${theme.spacing(3)}px`,
  },
});

class CreatureListItem extends Component {

  handleClickDetails = () => {
    // navigate to creature details page
    this.props.history.push(`/creature-details/${this.props.creature.id}`);
  }

  render() {
    const {
      creature,
    } = this.props;

    return (
      <Card>
        <CardActionArea onClick={this.handleClickDetails}>
          <CardHeader
            avatar={
              <Avatar alt={creature.name} src={`images/${creature.img_path}`} />
            }
            title={creature.name}
            titleTypographyProps={{
              variant: "h6",
              component: "h3",
              className: this.props.classes.mainHdg,
            }}
            subheader={`Type: ${creature.type_label}`}
            subheaderTypographyProps={{
              variant: "subtitle1",
              component: "span",
              className: this.props.classes.subHdg,
            }}
          />
          <CardContent className={this.props.classes.desc}>
            <Typography
              variant="body2"
              component="p"
            >
              {creature.physical_description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default connect()(withRouter(
  withStyles(muiStyles)(CreatureListItem)
));
