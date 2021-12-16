import React from 'react';
import '../../scss/feature.scss';
import Item from './Items';
import EmailIcon from '../../assets/images/emailBlue.png';
import BoltIcon from '../../assets/images/bolt.png';
import LockIcon from '../../assets/images/lock.png';
import OptionIcon from '../../assets/images/option.png';
import StarIcon from '../../assets/images/star.png';
import ShoppingIcon from '../../assets/images/shopping.png';
const Feature = (): JSX.Element => {
  return (
    <section className="feature" id="feature">
      <div className="feature__wrapper">
        <div className="feature__title">
          <p>Ideal solutions for you</p>
          <h3>Go beyond ultimate features</h3>
        </div>
        <div className="feature__table">
          <Item
            header="Email Subscription"
            para="We’re driven beyond just finishing projects. We want to find
                smart solutions."
            image={EmailIcon}
          />
          <Item
            header="Bolt Performance"
            para="We’re driven beyond just finishing projects. We want to find
                smart solutions."
            image={BoltIcon}
          />
          <Item
            header="Secure Transaction"
            para="We’re driven beyond just finishing projects. We want to find
                smart solutions."
            image={LockIcon}
          />
          <Item
            header="Multiple Options"
            para="We’re driven beyond just finishing projects. We want to find
                smart solutions."
            image={OptionIcon}
          />
          <Item
            header="Customer Support"
            para="We’re driven beyond just finishing projects. We want to find
                smart solutions."
            image={StarIcon}
          />
          <Item
            header="Integrated with Shopify"
            para="We’re driven beyond just finishing projects. We want to find
                smart solutions."
            image={ShoppingIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
