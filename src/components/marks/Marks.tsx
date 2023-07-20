import React from "react";

import star from "../../assets/images/star.png";
import style from "../marks/marks.module.scss";

const Marks = () => {
  return (
    <div className={style.marks}>
      <div className={style.marksContainer}>
        <div className={style.marksContainerTitle}>
          <h5>IMDb</h5>
          <p>256 отзывов</p>
        </div>
        <div className={style.marksContainerMarks}>
          <img src={star} className={style.iconStar} />
          <h1 className={style.numberWithBorder}>9.2</h1>
        </div>
      </div>
      <div className={style.marksContainer}>
        <div className={style.marksContainerTitle}>
          <h5>Кинопоиск</h5>
          <p>132 отзыва</p>
        </div>
        <div className={style.marksContainerMarks}>
          {" "}
          <img src={star} className={style.iconStar} />
          <h1>8.9</h1>
        </div>
      </div>
    </div>
  );
};

export default Marks;
