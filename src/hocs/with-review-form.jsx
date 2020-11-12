import React, {PureComponent} from 'react';


const withReviewForm = (WrappedComponentForm) => {
  return class WithReviewForm extends PureComponent {

    constructor(props) {

      super(props);
      this.state = {
        review: ``,
        rating: 0
      };
      this.handleReview = this.handleReview.bind(this);
      this.handleRating = this.handleRating.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleRating(evt) {
      this.setState({rating: evt.target.value});

    }

    handleSubmit() {
      this.setState({rating: ``, review: ``});

    }
    handleReview(evt) {
      this.setState({review: evt.target.value});
    }

    render() {
      return <WrappedComponentForm
        {...this.props}
        rating={this.state.rating}
        review={this.state.review}
        onRatingChange={this.handleRating}
        onReviewChange={this.handleReview}
        onFormSubmit={this.handleSubmit}
      />;
    }
  };
};


export default withReviewForm;
