import React from "react";
import {Route} from "react-router-dom";
import CollectionsOverview from "../../Component/collections-overview/collections-overview.component";
import HeaderNav from "../../Component/header/headerNav.component";


import CollectionPage from "../collection/collection.component";
import {convertCollectionsSnapshotToMap, firestore  } from "../../firebase/firebase.util";
import WithSpinner from '../../Component/with-spinner/with-spinner.component';
import {updateColections} from '../../redux/shop/shop.action'
import { connect } from "react-redux";
import Header from "../../Component/Header";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <HeaderNav/>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateColections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);



