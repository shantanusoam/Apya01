import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import { Autoplay, Pagination, Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Styled, { keyframes } from 'styled-components';
import './collection-preview.style.scss';

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

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
