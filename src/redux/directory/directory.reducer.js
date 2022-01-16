const INITIAL_STATE = {
  sections: [
    {
      title: 'Sports-tshirt',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'shop/sports-tshirt',
    },
    {
      title: 'Volleyball',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: 'shop/volleyball',
    },
    {
      title: 'Kabaddi',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: 'shop/kabaddi',
    },
    {
      title: 'Football',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/football',
    },
    {
      title: 'caps',
      imageUrl: 'https://i.ibb.co/GCCdy8t/mens.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/caps',
    },
    {
      title: 'Cricket',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 6,
      linkUrl: 'shop/cricket',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
