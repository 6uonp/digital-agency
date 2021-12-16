import React from 'react';
import { ReactComponent as ChevronRightIcon } from '../../assets/icon/chevronRightIcon.svg';
interface Props {
  header: string;
  para: string;
  image: string;
}

const Item = (props: Props) => {
  const { header, para, image } = props;
  return (
    <div className="feature__table__item">
      <figure>
        <img src={image} />
      </figure>
      <div>
        <h4>{header}</h4>
        <p>{para}</p>
        <a>
          Learn More <ChevronRightIcon />
        </a>
      </div>
    </div>
  );
};

export default Item;
