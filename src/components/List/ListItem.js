import React from "react";

import styles from "./ListItem.module.scss";

import Title from "../Title/Title";

const ListItem = ({ image, title, description, nuberOfRoom, price }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className={styles.wrapper}>
      {image && (
        <ImageTag
          src={image}
          className={image ? styles.image : styles.imageNone}
          alt={title}
          onError={e => {
            e.target.src = "https://unsplash.it/300/300";
          }}
        />
      )}
      <div>
        <Title>{title}</Title>
        <p></p>
        <p>price: {price} PLN</p>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

ListItem.defaultProps = {
  image: null
};

export default ListItem;
