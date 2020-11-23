import React, {PureComponent} from "react";
import ReviewItem from "../review-item/review-item";
import PropTypes from "prop-types";
import {Operation} from "../../reducer/data";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ReviewList extends PureComponent {

  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.loadCurrentReview(id);
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{this.props.comments.length}</span></h2>
        <ul className="reviews__list">
          {
            this.props.comments.map((item) => (

              <ReviewItem key={item.id}
                reviewItem={item}
              />
            ))
          }
        </ul>
      </React.Fragment>

    );

  }
}

ReviewList.propTypes = {
  loadCurrentReview: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  match: PropTypes.shape({params: PropTypes.shape({id: PropTypes.string})}),

};

ReviewList.defaultProps = {
  comments: [],
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadCurrentReview: (id) => {

    dispatch(Operation.loadCommentsByOfferId(id)
    );
  }
});
export {ReviewList};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewList));
