import React from "react";

const Contact = () => {
  return (
    <section className="section">
      <div className="section-center contact">
        <div className="box">
          <h3>Our Office</h3>
          <article>
            <h4>address</h4>
            <p>
              4th Floor, Shobo House, 5 Simpson Street, Lagos Island, Nigeria.
            </p>
          </article>
          <article>
            <h4>phone number</h4>
            <p>+2348022235119, +23418880225, +2348055469754</p>
          </article>
          <article>
            <h4>website</h4>
            <p>https://www.aeroflygroup.com</p>
          </article>
          <article>
            <h4>Email</h4>
            <p>info@Aeroflygroup.com</p>
          </article>
        </div>
        <div className="box">
          <h3 className="heading">Contact</h3>
          <form action="">
            <div className="form">
              <input type="text" placeholder="first name" />
            </div>
            <div className="form">
              <input type="text" placeholder="last name" />
            </div>
            <div className="form">
              <input type="email" placeholder="email" />
            </div>
            <div className="form">
              <input type="text" placeholder="phone" />
            </div>
            <div className="form">
              <input type="text" placeholder="subject" />
            </div>
            <div className="form">
              <textarea name="" id="" placeholder="message"></textarea>
            </div>

            <input type="button" value="submit" className="btn btn-contact" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
