import React from "react";
import {Route} from "react-router-dom";
import CollectionsOverview from "../../Component/collections-overview/collections-overview.component";
import HeaderNav from "../../Component/header/headerNav.component";


import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  console.log(match);
  return(
    
  <div className="shop-page">
  <HeaderNav/>
   <Route exact path={`${match.path}`}  component= {CollectionsOverview}></Route>
    <Route path={`${match.path}/:collectionId`} component= {CollectionPage}></Route>
  </div>
)};



export default ShopPage;
