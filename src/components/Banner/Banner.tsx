import React from 'react';
import '../../scss/banner.scss';
import BannerImg from '../../assets/images/banner.png';
import { ReactComponent as ValidIcon } from '../../assets/icon/valid.svg';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__wrapper">
        <div className="banner__main">
          <div className="banner__main__img">
            <img src={BannerImg} alt="banner" />
          </div>
          <div className="banner__main__content">
            <h2>
              Customer support is our main priority with their hundred percent
              satisfaction.
            </h2>
            <p>
              Get your tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever.
            </p>
            <ul>
              <li>
                <ValidIcon />
                Medical and vision
              </li>
              <li>
                <ValidIcon />
                Life insurance
              </li>
              <li>
                <ValidIcon />
                HSAs and FSAs
              </li>
              <li>
                <ValidIcon />
                Commuter benefits
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
