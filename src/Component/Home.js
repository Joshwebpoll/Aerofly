import React from "react";
import Accordion from "../Accordion/Accordion";
import Counter from "../Counter/Counter";
import Swipers from "../Caurosel/Swipers";
const Home = () => {
  return (
    <main>
      <header>
        <div className="hero-center">
          <h1>Aerofly Travels And Tours Ltd</h1>
          <p>The Premier Travel Agency In Nigeria</p>
          <a href="/about" className="btn">
            learn more
          </a>
        </div>
      </header>
      <section className="section">
        <h2>What Can We Do For You?</h2>
        <div className="line"></div>
        <div className="section-center offer-center">
          <article className="boxes">
            <img src="./images/travelass.png" alt="travel" />
            <h3>Flight Reservation</h3>

            <p>
              We offer air ticketing/flight reservations for both local and
              international flights to all destinations. We take into
              consideration your preferred airline services, budget, and
              preferred flight class when making flight reservations.
            </p>
          </article>
          <article className="boxes">
            <img src="./images/hotel1.png" alt="" />
            <h3>Hotel Reservation</h3>
            <p>
              We can book the perfect hotel rooms for you based on your budget,
              needs, or purpose as a business traveler, couple, or tourist.
              Besides, we offer you detailed and informative descriptions to
              help you make a choice.
            </p>
          </article>
          <article className="boxes">
            <img src="./images/man.png" alt="person" />
            <h3>Study Abroad Programs</h3>
            <p>
              We partnered with reputable educational institution in Turkey,
              Cyprus, Canada, UK, France, Australia, Germany, Ukraine, and many
              more. Thankfully, some of these countries facilitates study-work
              permit.
            </p>
          </article>
          <article className="boxes">
            <img src="./images/suitcase.png" alt="suitcase" />
            <h3>Tour Packages</h3>
            <p>
              We offer various tour packages such as religious tours to Israel
              (Jerusalem), Rome, Italy, Saudi Arabia (Hajj), India, and Uganda.
              Additionally, we offer tour packages to exotic locations like UAE,
              Seychelles, Mauritius, Malaysia, UK, Canada, Ghana, etc.
              Conversely, we also offer custom tour packages.
            </p>
          </article>
          <article className="boxes">
            <img src="./images/car.png" alt="car" />
            <h3>Airport Pickup/Car Hire</h3>
            <p>
              We can provide you with a safe, convenient, and conducive airport
              pickup service depending on your needs. We partner with local and
              international car rental companies to ensure your pickup/drop-off
              from the airport to your preferred destinations.
            </p>
          </article>
          <article className="boxes">
            <img src="./images/earth.png" alt="images" />
            <h3>Travel Insurance</h3>
            <p>
              We partnered with renowned travel insurance service providers in
              the world to offer you comprehensive travel coverage like student
              travel insurance, medical cover, Schengen travel insurance (worth
              30,000 Euros), and more.
            </p>
          </article>
          <article className="boxes">
            <img src="./images/visa.png" alt="visa" />
            <h3>Visa Assistance</h3>
            <p>
              Our visa assistance experts can help you procure visas for a wide
              range of countries in Europe, North and South America, Oceania,
              Australia, and Africa. For a smooth visa application process, we
              offer you current, up-to-date information regarding visa
              requirements relating to work, immigration, study, tourism, birth
              tourism, etc. Therefore, you can count on us for your visa
              application, fixing an appointment with the consular, interview
              tips, travel document verification, and more.
            </p>
          </article>
          <article className="boxes">
            <img src="./images/ticket.png" alt="ticket" />
            <h3>Travel Consultancy</h3>
            <p>
              We specialize in handling and coordinating flight/travel
              arrangements for individuals, groups, businesses, and corporate
              entities. Additionally, we provide comprehensive insight about
              itinerary or hotels based on your budget and needs. Plus, advice
              and recommendations regarding where to travel, and the best time
              to travel considering critical factors like weather, activities,
              cultures, policies, economy, etc.
            </p>
          </article>
        </div>
      </section>
      <section className="section">
        <h2>Why Choose Us?</h2>
        <div className="section-center">
          <Accordion />
        </div>
      </section>
      <section className="counter-app">
        <Counter />
      </section>
      <section className="section">
        <h2>our partners</h2>
        <div className="section-center swipper-center">
          <Swipers />
        </div>
      </section>
    </main>
  );
};

export default Home;
