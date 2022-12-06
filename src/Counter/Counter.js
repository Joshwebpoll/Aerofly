import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section className="section">
      <div className=" section-center counter-center">
        <article className="box">
          <img src="./images/handshake.png" alt="handshake" />
          <h2>
            {" "}
            <CountUp start={0} end={2000} k duration={3} />
          </h2>
          <h3>client trust</h3>
        </article>
        <article className="box">
          <img src="./images/leader.png" alt="handshake" />
          <h2>
            {" "}
            <CountUp start={0} end={12} duration={3} />
          </h2>
          <h3>expert</h3>
        </article>
        <article className="box">
          <img src="./images/rating.png" alt="handshake" />
          <h2>
            {" "}
            <CountUp start={0} end={15} duration={3} />
          </h2>
          <h3>experience</h3>
        </article>
        <article className="box">
          <img src="./images/trophy.png" alt="trophy" />
          <h2>
            {" "}
            <CountUp start={0} end={500} duration={3} />
          </h2>
          <h3>partners</h3>
        </article>
      </div>
    </section>
  );
};

export default Counter;
