import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withPlaceList = (WrappedComponentList) => {

  class WithPlaceList extends PureComponent {
    constructor(props) {
      super(props);

      this._onHover = props.onHover;
      this.handleHover = this.handleHover.bind(this);
      this.state = {
        activePlaceIndex: -1,
      };
    }

    handleHover(placeIndex) {
      this.setState({
        activePlaceIndex: placeIndex,
      });
      this._onHover(
          placeIndex
      );
    }

    render() {
      return <WrappedComponentList
        {...this.props}
        activePlaceIndex={this.state.activePlaceIndex}
        handleHover={this.handleHover}
        onHover={this._onHover}

      />;
    }
  }

  WithPlaceList.propTypes = {
    onHover: PropTypes.func,
  };

  return WithPlaceList;
};

export default withPlaceList;
