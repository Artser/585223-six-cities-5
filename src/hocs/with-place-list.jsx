import React, {PureComponent} from 'react';
import {SORT_TYPES} from '../utils/functions';
const withPlaceList = (WrappedComponentList) => {
  return class WithPlaceList extends PureComponent {
    constructor(props) {

      super(props);
      this.handleHover = this.handleHover.bind(this);
      this.state = {
        activePlaceIndex: -1,
      };
    }

    handleHover(placeIndex) {
      this.setState({
        activePlaceIndex: placeIndex,
        currentSortType: SORT_TYPES.POPULAR
      });
    }
    render() {
      return <WrappedComponentList
        {...this.props}
        activePlaceIndex={this.state.activePlaceIndex}
        handleHover={this.handleHover}


      />;
    }

  };
};
export default withPlaceList;
