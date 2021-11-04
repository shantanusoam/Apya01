import React from "react";
import styles from "../../styles/menu-item.module.scss";
// import { withRouter } from "react-router";


const MenuItem = ({title,imageUrl,size, history ,linkUrl,match}) => (
    
    <div 
    // onClick={()=> history.push(`${match.url}${linkUrl}`)}
    className={`${styles[size]} ${styles.menuitem}`} >
        <div className={styles.backgroundimage} style={{
        backgroundImage: `url(${imageUrl})`,
    }}></div>
                <div className={styles.content}>
                    <h1 className={styles.title}>{title.toUpperCase()}</h1>
                    <span className={styles.subtitle}>SHOP NOW</span>
                </div>
            </div>
)
export  default MenuItem;