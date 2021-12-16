import React from 'react';
import Item from './Item';
import Email from '../../assets/images/email.png';
import Ticket from '../../assets/images/ticket.png';
import SupportImg from '../../assets/images/support.png';
import '../../scss/support.scss';

const Support = () => {
  return (
    <section className="support" id="support">
      <div className="support__wrapper">
        <div className="support__main">
          <div className="support__main--left">
            <div className="support__main--left__content">
              <h2 className="support__main--left__content__header">
                Do you need help? Our support team ready to help you
              </h2>
              <p className="support__main--left__content__para">
                Get your tests delivered at let home collect sample from the
                victory of the managements that supplies best design system
                guidelines ever.
              </p>
            </div>
            <Item
              label="Email client support"
              para="Ultimate access to all credit popular exercises and assessments materials"
              img={Email}
            />

            <Item
              label="Live ticket support"
              para="Total assessment corrections with live support tickets download access system"
              img={Ticket}
            />
          </div>
          <figure className="support__main--right">
            <img
              className="support__main--right__image "
              src={SupportImg}
              alt="support"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Support;
