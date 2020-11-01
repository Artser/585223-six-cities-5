import React, {PureComponent} from "react";
import ReviewItem from "../review-item/review-item";
import PropTypes from "prop-types";
// import {Operation} from "../../reducer/data";
// import {connect} from "react-redux";

class ReviewList extends PureComponent {
  constructor(props) {
    super(props);
    this.reviewItems = props.reviewItems;

  }

  /*  componentDidMount() {

    this.props.loadCurrentReview(id);
  }
 */
  render() {
    return (
      <React.Fragment>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
        <ul className="reviews__list">
          {
            this.reviewItems.map((item) => (

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
  reviewItems: PropTypes.array.isRequired,
};
export default ReviewList;
/* const mapStateToProps = (state) => {
  return {
    offer: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadCurrentReview: (id) => {

    dispatch(Operation.oadCommentsByOfferId(id)
    );
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList); */
