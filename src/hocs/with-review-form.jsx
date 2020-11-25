import React, {PureComponent} from 'react';


const withReviewForm = (WrappedComponentForm) => {
  return class WithReviewForm extends PureComponent {

    constructor(props) {

      super(props);
      this.state = {
        review: ``,
        rating: ``,
        error: false
      };
      this.handleReview = this.handleReview.bind(this);
      this.handleRating = this.handleRating.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.setError = this.setError.bind(this);
    }

    handleRating(evt) {
      this.setState({rating: evt.target.value});

    }

    setError(error) {
      this.setState({error});
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
        error={this.state.error}
        setError={this.setError}
      />;
    }
  };
};


export default withReviewForm;
