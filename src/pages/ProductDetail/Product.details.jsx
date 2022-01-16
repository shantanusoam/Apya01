import React from "react";
import "./style.css";
export default function Productdetails() {
  return (
    <div id="content-wrapper">
      <div class="column">
        <div id="img-container">
          <div id="lens"></div>
          <img id="featured " src="images/shoe1.jpg" />
        </div>
        <div id="slide-wrapper">
          <img id="slideLeft" class="arrow" src="images/arrow-left.png" />

          <div id="slider">
            <img class="thumbnail active" src="images/shoe1.jpg" />
            <img class="thumbnail" src="images/shoe2.jpg" />
            <img class="thumbnail" src="images/shoe3.jpg" />
          </div>

          <img id="slideRight" class="arrow" src="images/arrow-right.png" />
        </div>
      </div>

      <div class="column">
        <h1>Awesome Shoes</h1>
        <hr />
        <h3>$89.99</h3>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <input value="1" type="number" />
        <a class="btn btn-dark" href="#">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
