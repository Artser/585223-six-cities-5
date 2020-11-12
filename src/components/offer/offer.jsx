import React, {PureComponent} from "react";
import ReviewForm from "../review-form/review-form";
import ReviewList from "../review-list/review-list";
import Coord from "../coord/coord";
import PropTypes from "prop-types";
import withReviewForm from "../../hocs/with-review-form";
import {Operation} from "../../reducer/data";
import {connect} from "react-redux";
import {offerType} from "../../types";
import {Header} from "../header/header";
// import {getCurrentOffer} from '../../reducer/reselect';
import NearPlace from "../../components/near-places/near-places";
import {FavoriteStatus} from "../../utils/functions";
const ReviewFormWrapped = withReviewForm(ReviewForm);
import {getRating} from '../../utils/functions';


class Offer extends PureComponent {
  constructor(props) {

    super(props);
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(evt) {
    evt.preventDefault();
    const {updateFavorite, offer} = this.props;
    updateFavorite(offer.id, offer.isFavorite ? FavoriteStatus.MINUS : FavoriteStatus.PLUS);
  }

  componentDidMount() {

    const id = this.props.match.params.id;
    this.props.loadCurrentOffer(id);
    this.props.loadNearPlaces(id);
  }


  render() {
    const {offer, nearPlaces} = this.props;
    if (offer === null) {
      return <p >Loading</p>;

    }
    const bookmarkClass = offer.isFavorite ? `property__bookmark-button--active` : `property__bookmark-button`;
    const ImageBlock = ({img}) => {
      return (
        <div className="property__image-wrapper">
          <img className="property__image" src={img} alt="Photo studio" />
        </div>
      );
    };
    const Goods = ({good}) => {
      return (
        <li className="property__inside-item">
          {good}
        </li>
      );
    };
    return (
      <div className="page">
        <Header
          authorizationStatus={this.props.authorizationStatus}
          authInfo={this.props.authInfo}
        />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {
                  offer.images.map((img, key) => (
                    <ImageBlock
                      key={key}
                      img={img}
                    />
                  ))
                }

              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div className="property__mark">
                  <span>{offer.isPremium}</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <button onClick={this.handleButton} className={`${bookmarkClass} button`} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: getRating(offer.rating)}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value"> {offer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">

                    {
                      offer.goods.map((goods, key) => (
                        <Goods
                          key={key}
                          good={goods}
                        />

                      ))
                    }

                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={offer.avatar} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {offer.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>

                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewList
                  />

                  <ReviewFormWrapped
                    id={this.props.match.params.id}
                  />

                </section>
              </div>
            </div>
            <div style={{height: `579px`}}>
              <Coord


                coords={nearPlaces.map((nearPlace) => (nearPlace.coord))}


                activeOffer={offer.coord}

              />
            </div>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {
                  nearPlaces.map((nearPlace) => (
                    <NearPlace
                      key={nearPlace.id}
                      type={nearPlace.type}
                      title={nearPlace.title}
                      price={nearPlace.price}
                      imgLink={nearPlace.imgLink}
                      rating={nearPlace.rating}
                    />
                  ))
                }

              </div>
            </section>
          </div>
        </main>
      </div>

    );
  }
}
Offer.propTypes = {
  match: PropTypes.shape({params: PropTypes.shape({id: PropTypes.string})}),
  offer: offerType,
  updateFavorite: PropTypes.func,
  img: PropTypes.object,
  good: PropTypes.string,
  loadCurrentOffer: PropTypes.func,
  loadNearPlaces: PropTypes.func,
  authorizationStatus: PropTypes.string,
  authInfo: PropTypes.object,
  nearPlaces: PropTypes.array
};
const mapStateToProps = (state) => {
  return {
    offer: state.activeOffer,
    authorizationStatus: state.authorizationStatus,
    authInfo: state.authInfo,
    nearPlaces: state.nearPlaces,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFavorite: (offerId, status) => {
    dispatch(Operation.postFavorite(offerId, status));
  },
  loadNearPlaces: (id) => {
    dispatch(Operation.loadNearPlacesId(id));
  },

  loadCurrentOffer: (id) => {

    dispatch(Operation.loadOfferById(id));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
