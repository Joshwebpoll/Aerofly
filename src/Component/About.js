import React from "react";

const About = () => {
  return (
    <main>
      <section className="section">
        <div className="section-center about-center">
          <article className="about-box">
            <img src="../images/israel.jpg" alt="isreal" />
          </article>
          <article className="about-box">
            <h2>Our History</h2>
            <p>
              Founded in 2018 by Mr. Toluwani Iremide, Aerofly Travels and Tours
              Ltd have come a long way from its beginnings in Sango Ota, Ogun
              State, Nigeria.
            </p>
            <p>
              When our founder first started out, his passion for providing a
              seamless travel services drove him to garner practical experience
              with reliable travel companies so that Aerofly Travels And Tours
              Ltd can offer you a unique travel experience from Nigeria.
            </p>
            <p>
              We now serve customers all over Nigeria and are thrilled that
              we’re able to turn our passion into our own vibrant business.
            </p>
          </article>
        </div>
      </section>
      <section className="section">
        <h2>Our Mission</h2>
        <div className="section-center mission">
          <p>
            Our mission to give you hassle-free travels and tourism makes us the
            premier travel agency in Nigeria in the ever-expanding travel
            industry.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Our 6-D Process</h2>
        <div className="section-center">
          <div className="process">
            <article className="boxes">
              <h3>Discuss</h3>
              <p>
                To guarantee your satisfaction for every travel occasion or
                needs, we offer a 24/7 customer service reachable via email,
                phone (or WhatsApp), and social media platforms.
              </p>
            </article>
            <article className="boxes">
              <h3>Discover</h3>
              <p>
                After discussing with our clients, we are able to
                discover/identify their travel needs, and expectation.
              </p>
            </article>
            <article className="boxes">
              <h3>Define</h3>
              <p>
                We offer our clients extraordinary travel services tailored to
                their needs and expectations. In fact, our numerous services can
                meet any travel inquiry.
              </p>
            </article>
            <article className="boxes">
              <h3>Deal</h3>
              <p>
                At this stage, we collate our clients’ information and essential
                requirements to kick-start the travel service.
              </p>
            </article>
            <article className="boxes">
              <h3>Deploy</h3>
              <p>
                We deploy our team members (experienced travel consultants) to
                execute tasks related to our clients’ travel deals.
              </p>
            </article>
            <article className="boxes">
              <h3>Deliver</h3>
              <p>
                This is what we do, we deliver quality services. That way, you
                can rely on Aerofly Travels for your long-term travel
                expectations.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
