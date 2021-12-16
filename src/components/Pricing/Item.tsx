import React from 'react';
import { ReactComponent as ValidIcon } from '../../assets/icon/valid.svg';
import { ReactComponent as InvalidIcon } from '../../assets/icon/inValid.svg';
interface Props {
  title: string;
  price: string;
  access: boolean[];
  trial: string;
  list: string[];
  recommended?: boolean;
}

const Item = (props: Props) => {
  const { title, price, access, trial, list, recommended } = props;
  return (
    <div
      className={`pricing__table__content__item${
        recommended ? ' recommended' : ''
      }`}
    >
      {recommended ? (
        <span className="pricing__table__content__item__recommended">
          RECOMMENDED
        </span>
      ) : null}

      <div
        className={`pricing__table__content__container${
          recommended ? ' recommended' : ''
        }`}
      >
        <span className="pricing__table__content__container__title">
          {title}
        </span>
        <span className="pricing__table__content__container__price">
          {price}
          <small>per mo.</small>
        </span>
        {/* <div style={{ marginTop: '30px' }}>test</div> */}
        <ul>
          {access.map((element, index) => {
            return (
              <li>
                <span>{list[index]}</span>
                {element === true ? <ValidIcon /> : <InvalidIcon />}
              </li>
            );
          })}
        </ul>
        <button>Choose Plan</button>
        <span className="pricing__table__content__container__trial">
          {trial} days free trial
        </span>
      </div>
    </div>
  );
};

export default Item;
