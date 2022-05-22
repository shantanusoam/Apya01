// import React, { useRef, useState } from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
// import "./scroller.scss";

// // import Swiper core and required modules

// const data = [
//   {
//     id: "1",
//     title: "T-shirt",
//     peice: "800$",
//     img: "img/t1.jpg",
//   },
//   {
//     id: "2",
//     title: "T-shirt",
//     peice: "100$",
//     img: "img/t2.jpg",
//   },
//   {
//     id: "3",
//     title: "T-shirt",
//     peice: "220$",
//     img: "img/t3.jpg",
//   },
//   {
//     id: "4",
//     title: "T-shirt",
//     peice: "230$",
//     img: "img/t4.jpg",
//   },
//   {
//     id: "5",
//     title: "T-shirt",
//     peice: "100$",
//     img: "img/t5.jpg",
//   },
//   {
//     id: "6",
//     title: "T-shirt",
//     peice: "203$",
//     img: "img/t6.jpg",
//   },
// ];
// const slides = [];
// for (let i = 0; i < 5; i += 1) {
//   slides.push(
//     <SwiperSlide key={`slide-${i}`} tag="li">
//       <img
//         src={`https://picsum.photos/id/${i + 1}/500/300`}
//         style={{ listStyle: "none" }}
//         alt={`Slide ${i}`}
//       />
//     </SwiperSlide>
//   );
// }
// const Scroller = () => {
//   return (
//     <Swiper
//       slidesPerView={4}
//       centeredSlides={false}
//       spaceBetween={20}
//       pagination={{
//         clickable: true,
//       }}
//       scrollbar={true}
//       navigation
//       className="mySwiper"
//     >
//       {data.map((item) => (
//         <SwiperSlide key={item.id} className='slide'>

//          <div className="box">
//          <div className="slide-img">
//                <img src={item.img} alt="Tshirt" />
//         </div>
//                <div class="detail-box">

//                 <div class="type">
//                 <a href="/#" >{item.title}</a>
//                   <span >new</span>
//                 </div>
//                 <a href="/#" className="price">{item.price}</a>
//                 <a href="/#" type="submit" class="btn-small btn-small--green">
//                   add
//                 </a>
//               </div>
//          </div>

//         </SwiperSlide>
//       ))}
//     </Swiper>
//     //   <div >
//     //       <div class="u-center-text">
//     //             <h2 class="heading-secondary">
//     //                 Cricket
//     //             </h2>
//     //         </div>
//     //         <div class="owl-carousel owl-theme">

//     //             <div class="item py-2">
//     //                 <div class="Product">
//     //                     <a href="/#"><img src="img/t6.jpg" alt="Tshirt" class="img-fluid"/></a>
//     //                     <div class="text-center">
//     //                         <h3 class="owl-carousel-text">
//     //                             T-shirt
//     //                         </h3>
//     //                         <div>
//     //                             <span>
//     //                                 <i class=""></i>
//     //                             </span>
//     //                         </div>
//     //                         <div class="py-2">
//     //                             <span class="owl-carousel-text">200$</span>
//     //                         </div>
//     //                         <a href="/#" type="submit" class="btn-small btn-small--green">add</a>
//     //                     </div>

//     //                 </div>

//     //             </div>
//     //             <div class="item py-2">
//     //                 <div class="Product">
//     //                     <a href="/#"><img src="img/t2.jpg" alt="Tshirt" class="img-fluid"/></a>
//     //                     <div class="text-center">
//     //                         <h3 class="owl-carousel-text">
//     //                             T-shirt
//     //                         </h3>
//     //                         <div>
//     //                             <span>
//     //                                 <i class=""></i>
//     //                             </span>
//     //                         </div>
//     //                         <div class="py-2">
//     //                             <span class="owl-carousel-text">200$</span>
//     //                         </div>

//     //                         <a href="/#" type="submit" class="btn-small btn-small--green">add</a>
//     //                     </div>

//     //                 </div>

//     //             </div>
//     //             <div class="item py-2">
//     //                 <div class="Product">
//     //                     <a href="/#"><img src="img/t3.jpg" alt="Tshirt" class="img-fluid"/></a>
//     //                     <div class="text-center">
//     //                         <h3 class="owl-carousel-text">
//     //                             T-shirt
//     //                         </h3>
//     //                         <div>
//     //                             <span>
//     //                                 <i class=""></i>
//     //                             </span>
//     //                         </div>
//     //                         <div class="py-2">
//     //                             <span class="owl-carousel-text">200$</span>
//     //                         </div>
//     //                         <a href="/#" type="submit" class="btn-small btn-small--green">add</a>
//     //                     </div>

//     //                 </div>

//     //             </div>
//     //             <div class="item py-2">
//     //                 <div class="Product">
//     //                     <a href="/#"><img src="img/t4.jpg" alt="Tshirt" class="img-fluid"/></a>
//     //                     <div class="text-center">
//     //                         <h3 class="owl-carousel-text">
//     //                             T-shirt
//     //                         </h3>
//     //                         <div>
//     //                             <span>
//     //                                 <i class=""></i>
//     //                             </span>
//     //                         </div>
//     //                         <div class="py-2">
//     //                             <span class="owl-carousel-text">200$</span>
//     //                         </div>
//     //                         <a href="/#" type="submit" class="btn-small btn-small--green">add</a>
//     //                     </div>

//     //                 </div>

//     //             </div>
//     //             <div class="item py-2">
//     //                 <div class="Product">
//     //                     <a href="/#"><img src="img/t5.jpg" alt="Tshirt" class="img-fluid"/></a>
//     //                     <div class="text-center">
//     //                         <h3 class="owl-carousel-text">
//     //                             T-shirt
//     //                         </h3>
//     //                         <div>
//     //                             <span>
//     //                                 <i class=""></i>
//     //                             </span>
//     //                         </div>
//     //                         <div class="py-2">
//     //                             <span class="owl-carousel-text">200$</span>
//     //                         </div>
//     //                         <a href="/#" type="submit" class="btn-small btn-small--green">add</a>
//     //                     </div>

//     //                 </div>

//     //             </div>
//     //           </div>
//     //   </div>
//   );
// };

// export default Scroller;
