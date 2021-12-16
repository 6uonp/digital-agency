import React from 'react';
import CliensImg from '../../assets/images/clients.png';
import '../../scss/clients.scss';
import { ReactComponent as ChevronRightIcon } from '../../assets/icon/chevronRightIcon.svg';

const Clients = (): JSX.Element => {
  return (
    <section className="clients">
      <div className="clients__wrapper">
        <div className="clients__header">
          <h3>Company who also worked us</h3>
          <p>
            Every email, web page, and social media post makes an impression on
            your customers. With our software you can be confident it's
            impression.
          </p>
          <a>
            Explore Details
            <ChevronRightIcon />
          </a>
        </div>
        <figure className="clients__img">
          <img src={CliensImg} alt="clients" />
        </figure>
      </div>
    </section>
  );
};

export default Clients;
