import React from "react";
import { connect } from "react-redux";
import collectionItemComponent from "../../Component/collection-item/collection-item.component";
import { selectCollections } from "../../redux/shop/shop.selector";
import './collection.styles.scss'

const CollectionPage = ({collection}) => {
const {title,items} = collection;
    console.log(collection);
       return(
       <div className="category">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (<collectionItemComponent key={item.id} item={item}></collectionItemComponent>))
                }
            </div>
        </div> 
        )
}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollections(ownProps.match.params.collectionId)(state)
 })

export default connect(mapStateToProps)(CollectionPage);