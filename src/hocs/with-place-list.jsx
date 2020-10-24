import React, {PureComponent} from 'react';
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
        activePlaceIndex: placeIndex
      });
    }
    render() {
      return <WrappedComponentList
        {...this.props}
        activePlaceIndex={this.state.activePlaceIndex}
        handleHover={this.handlHover}


      />;
    }

  };
};
export default withPlaceList;
