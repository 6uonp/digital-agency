import React, { CSSProperties } from 'react';
import { ReactComponent as ChevronRightIcon } from '../../assets/icon/chevronRightIcon.svg';

interface Props {
  title: string;
  image: string;
  para?: string;
  link?: string;
  style?: CSSProperties;
}

const Item = (props: Props) => {
  const { title, image, para, link, style } = props;
  return (
    <article className="blog__articles__item" style={style}>
      <figure className="blog__articles__item__img">
        <img src={image} alt="article" />
      </figure>
      <h4>{title}</h4>
      {para ? <p>{para}</p> : null}
      {link ? (
        <a>
          {link} <ChevronRightIcon />
        </a>
      ) : null}
    </article>
  );
};

export default Item;
