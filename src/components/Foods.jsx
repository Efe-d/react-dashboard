import React from "react";
import p1 from "./p1.jpeg";
import p2 from "./p2.jpg";

function Foods() {
  return (
    <div className="food-container">
      <div className="foods">
        <div className="image-name">
          <img src={p2} />
          <h3>Chocolate Cake</h3>
        </div>
        <div className="food-info">
          <h5>Cakes</h5>
          <h3>09.04.2018</h3>
          <h3 className="progress">PROCESSED</h3>
          <input type="checkbox" />
        </div>
      </div>
      <div className="foods">
        <div className="image-name">
          <img src={p1} />
          <h3>Cheesecake</h3>
        </div>
        <div className="food-info">
          <h5>Cupcakes</h5>
          <h3>09.04.2018</h3>
          <h3 className="onhold">ON HOLD</h3>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}

export default Foods;
