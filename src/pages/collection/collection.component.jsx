import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { connect } from 'react-redux';
import image1 from '../../Images/football.jpg';
import image2 from '../../Images/football1.jpg';
import image3 from '../../Images/football2.jpg';
import CollectionItem from '../../Component/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import './collection.styles.scss';
import Styled, { keyframes } from 'styled-components';

// Pagination module
const ImageS = Styled.div`
background-image: radial-gradient(#42424280,#9f9e9e17),  url(${(props) =>
  props.img});
background-size: cover;
background-position: center;
margin: 0;
padding: 0;
  
width: 100%;

height: 100vh;
@media screen and (max-width: 768px) {
  height: 75vh;
}
`;

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ImageS alt="" img={image1}></ImageS>
        </SwiperSlide>
        <SwiperSlide>
          <ImageS alt="" img={image2}></ImageS>
        </SwiperSlide>
        <SwiperSlide>
          <ImageS alt="" img={image3}></ImageS>
        </SwiperSlide>
      </Swiper>
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
