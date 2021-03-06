import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import {white} from 'material-ui/styles/colors';

class ForMakersMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <span>
        <FlatButton
          style={{color: white, position: 'relative', verticalAlign: 'middle'}}
          onTouchTap={this.handleTouchTap}
          label="For Makers"
          labelPosition="before"
          primary={true}
          icon={<i className="material-icons">arrow_drop_down</i>}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem
              primaryText="Intro"
              containerElement={<Link to="/makers/intro" />}
              onClick={this.handleRequestClose}
            />
            <MenuItem
              primaryText="Tutorials"
              containerElement={<Link to="/teachers/tutorials" />}
              onClick={this.handleRequestClose}
            />
            <MenuItem
              primaryText="How Tos"
              containerElement={<Link to="/teachers/howtos" />}
              onClick={this.handleRequestClose}
            />
            <MenuItem
              primaryText="IoT in Action"
              containerElement={<Link to="/teachers/examples" />}
              onClick={this.handleRequestClose}
            />
          </Menu>
        </Popover>
      </span>
    );
  }
}

export default ForMakersMenu;
