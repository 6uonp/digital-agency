import React from 'react';
import { ReactComponent as ArrowRightIcon } from '../../assets/icon/arrowRightIcon.svg';
interface Props {
  label: string;
  para: string;
  img: string;
}

const Item = (props: Props) => {
  const { label, para, img } = props;
  return (
    <div className="support__main--left__option">
      <figure className="support__main--left__option__logo">
        <img src={img} alt="logo" />
      </figure>
      <div className="support__main--left__option__content">
        <h3>
          {label}
          <ArrowRightIcon />
        </h3>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default Item;
