import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class CreatureHabitats extends Component {
  state = {
    isAdding: false,
    newHabitatId: '',
  }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_ALL_HABITATS' });
  }

  handleClickDeleteHabitat = (habitat) => (event) => {
    this.props.dispatch({
      type: 'DELETE_CREATURE_HABITAT',
      payload: habitat,
    });
  }

  handleClickAddHabitat = () => {
    this.props.dispatch({
      type: 'SAVE_CREATURE_HABITAT',
      payload: this.state.newHabitatId
    });
    this.toggleAdd();
  }

  handleChangeSelection = (event) => {
    this.setState({
      newHabitatId: parseInt(event.target.value)
    });
  }

  toggleAdd = () => {
    console.log('Toggle Add');
    this.setState({
      isAdding: !this.state.isAdding
    })
  }

  seeHabitatSelectionDetails() {
    let habitatDetails = null;

    if (this.state.newHabitatId) {
      const matchedHabitat = this.props.store.allHabitats.filter((item) => {
        return this.state.newHabitatId === item.id;
      });
      habitatDetails = <p>{matchedHabitat[0].terrain}</p>;
    }

    return habitatDetails;
  }

  render() {
    const {
      habitats,
      editable,
    } = this.props;

    return (
      <div>
        <h4>Habitats:</h4>
        <ul className="blocks">
          {habitats.map((item, index) => {
            return (
              <li key={index}>
                {item}
                {editable &&
                  <button
                    type="button"
                    onClick={this.handleClickDeleteHabitat(item)}
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
              <option value="">Select a Habitat</option>
              {this.props.store.allHabitats.map((item, index) => {
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
            {this.seeHabitatSelectionDetails()}
            <div>
              <button
                type="button"
                className="btn"
                onClick={this.handleClickAddHabitat}
              >
                Add Habitat
              </button>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default connect(mapStoreToProps('allHabitats'))(CreatureHabitats);
