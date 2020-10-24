import reviews from "./reviews";

const offers = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at graet location`,
    imgLink: `img/apartment-01.jpg`,
    price: 120,
    type: `Apartment`,
    isPremium: true,
    rating: 80,
    coord: [52.3909553943508, 4.85309666406198],
    city: `Amsterdam`,
    cityId: 40,
    reviews,
  },
  {
    id: 2,
    title: `Wood and stone place`,
    imgLink: `img/room.jpg`,
    price: 80,
    type: `Private room`,
    isPremium: false,
    rating: 80,
    coord: [52.369553943508, 4.85309666406198],
    city: `Hamburg`,
    cityId: 50,
    reviews,

  },
  {
    id: 3,
    title: `You can't live closer to Eiffel Tower`,
    imgLink: `img/apartment-02.jpg`,
    price: 132,
    type: `Apartment`,
    isPremium: false,
    rating: 80,
    coord: [52.3909553943508, 4.929309666406198],
    city: `Paris`,
    cityId: 10,
    reviews,

  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    imgLink: `img/apartment-03.jpg`,
    price: 180,
    type: `Apartment`,
    isPremium: true,
    rating: 100,
    coord: [52.3809553943508, 4.939309666406198],
    city: `Cologne`,
    cityId: 20,
    reviews,

  },
  {
    id: 5,
    title: `You can't live closer to Eiffel Tower`,
    imgLink: `img/apartment-02.jpg`,
    price: 130,
    type: `Apartment`,
    isPremium: true,
    rating: 90,
    coord: [52.3909553943508, 4.929309666406198],
    city: `Paris`,
    cityId: 10,
    reviews,

  },
  {
    id: 6,
    title: `You can't live closer to Eiffel Tower`,
    imgLink: `img/apartment-02.jpg`,
    price: 120,
    type: `Apartment`,
    isPremium: false,
    rating: 70,
    coord: [52.3909553943508, 4.929309666406198],
    city: `Paris`,
    cityId: 10,
    reviews,

  },
  {
    id: 7,
    title: `You can't live closer to Eiffel Tower`,
    imgLink: `img/apartment-02.jpg`,
    price: 110,
    type: `Apartment`,
    isPremium: false,
    rating: 60,
    coord: [52.3909553943508, 4.929309666406198],
    city: `Paris`,
    cityId: 10,
    reviews,

  },
  {
    id: 8,
    title: `You can't live closer to Eiffel Tower`,
    imgLink: `img/apartment-02.jpg`,
    price: 100,
    type: `Apartment`,
    isPremium: false,
    rating: 50,
    coord: [52.3909553943508, 4.929309666406198],
    city: `Paris`,
    cityId: 10,
    reviews,

  }

];

export default offers;
