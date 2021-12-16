import React from 'react';
import Item from './Item';
import '../../scss/pricing.scss';

const Pricing = (): JSX.Element => {
  const labelList = [
    'Full Access Library',
    'Multiple user',
    'Refund Policy',
    'Google Analytics',
    '24/7 support',
  ];
  return (
    <section className="pricing" id="pricing">
      <div className="pricing__wrapper">
        <div className="pricing__title">
          <p>Deal for your business</p>
          <h3>Meet our pricing plan that suit you</h3>
        </div>
        <div className="pricing__table">
          <ul className="pricing__table__title">
            {labelList.map((element) => {
              return <li>{element}</li>;
            })}
          </ul>
          <div className="pricing__table__content">
            <Item
              list={labelList}
              title="Starter Pack"
              price="$18.99/"
              access={[true, true, false, false, false]}
              trial="15"
            />
            <Item
              recommended
              list={labelList}
              title="Premium Pack"
              price="$23.99/"
              access={[true, true, true, false, false]}
              trial="30"
            />
            <Item
              list={labelList}
              title="Custom Pack"
              price="$29.99/"
              access={[true, true, true, true, false]}
              trial="30"
            />
            <Item
              list={labelList}
              title="Ultimate Pack"
              price="$35.99/"
              access={[true, true, true, true, true]}
              trial="45"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
