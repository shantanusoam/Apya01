import SHOP_DATA from '../../Component/shop.data';
import styles from "../../styles/menu-item.module.scss";
// export const getStaticProps = async () => {
//     // const res = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=mujer');
//     return{
//         props: {shopdata: SHOP_DATA},
        
//     }
// }

const Shop = ({SHOP_DATA}) => {
    return (
<div className={styles.collectionpage}>
        <h2 className={styles.title}>lol</h2>
        {SHOP_DATA.map(data => (
            <h2>lol</h2>
        ))}
        {/* <div className={styles.items}>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div> */}
      </div>

    //     <div>
    //          <h1>SHOP</h1>
             
    //     {shopdata.map(data => (
    //     <div className={styles[collection-item]}>
    //   <div
    //     className={styles.image}
    //     style={{
    //       backgroundImage: `url(${data.imageUrl})`
    //     }}
    //   />
    //   <div className={styles[collection-footer]}>
    //     <span className={styles.name}>{data.name}</span>
    //     <span className={styles.price}>{data.price}</span>
    //   </div>
    //   <CustomButton onClick={() => addItem(item)} inverted>
    //     Add to cart
    //   </CustomButton>
    // </div>
    // ))}
    //     </div>
       
    );
}
 
export default Shop;