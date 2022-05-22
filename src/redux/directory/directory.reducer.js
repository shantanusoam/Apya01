const INITIAL_STATE = {
  sections: [
    {
      title: 'Sports-tshirt',
      imageUrl:
        'https://stylesatlife.com/wp-content/uploads/2018/02/Superhero-sports-T-shirts-for-men.jpg.webp',
      id: 1,
      linkUrl: 'shop/sports-tshirt',
    },
    {
      title: 'Volleyball',
      imageUrl:
        'https://img.olympicchannel.com/images/image/private/t_16-9_3200/v1536936974/primary/exvzqcvorticinejmmel',
      id: 2,
      linkUrl: 'shop/volleyball',
    },
    {
      title: 'Kabaddi',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/1/1f/Iran_men%27s_national_kabaddi_team_13970602000432636707284535394012_98208.jpg',
      id: 3,
      linkUrl: 'shop/kabaddi',
    },
    {
      title: 'Football',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/1200px-Football_iu_1996.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/football',
    },
    {
      title: 'caps',
      imageUrl:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baseballe-caps-2021-lead-1626097690.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/caps',
    },
    {
      title: 'Cricket',
      imageUrl:
        'https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg',
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
