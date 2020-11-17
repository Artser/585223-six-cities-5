import React, {PureComponent} from 'react';

const withHighlightedOffer = (WrappedComponentList) => {
  return class WithHighlightedOffer extends PureComponent {
    constructor(props) {
      super(props);

      this.handleOfferChange = this.handleOfferChange.bind(this);
      this.state = {
        activePlaceIndex: -1,
      };
    }

    handleOfferChange(placeIndex) {
      this.setState({
        offerIndex: placeIndex,
      });

    }

    render() {
      return <WrappedComponentList
        {...this.props}
        activeOfferIndex={this.state.offerIndex}
        handleOfferChange={this.handleOfferChange}


      />;
    }

  };
};
export default withHighlightedOffer;
