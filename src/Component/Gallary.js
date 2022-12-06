import React from "react";

const Gallary = () => {
  return (
    <section className="section">
      <h2>Interesting Tour Photos</h2>
      <div className="line"></div>
      <div className="section-center gallary">
        <div className="box">
          <img src="../images/photo1.jpg" alt="photom" />
        </div>
        <div className="box">
          <img src="../images/photo2.jpg" alt="photo1" />
        </div>
        <div className="box">
          <img src="../images/photo3.jpg" alt="photo2" />
        </div>
        <div className="box">
          <img src="../images/photo4.jpg" alt="photo3" />
        </div>
        <div className="box">
          <img src="../images/photo18.jpg" alt="photo21" />
        </div>
        <div className="box">
          <img src="../images/photo21.jpg" alt="photo18" />
        </div>
      </div>
    </section>
  );
};

export default Gallary;
