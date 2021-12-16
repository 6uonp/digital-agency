import React from 'react';
import { ReactComponent as PlusIcon } from '../../assets/icon/plusIcon.svg';
import { ReactComponent as MinusIcon } from '../../assets/icon/minusIcon.svg';

interface Props {
  header: string;
  para: string;
  isOpen: boolean;
  id: number;
  handleClick: (id: number) => void;
}
const Item = (props: Props) => {
  const { header, para, isOpen, id, handleClick } = props;

  return (
    <div className={`faq__item${isOpen ? ' isOpen' : ' isClose'}`}>
      <div className="faq__item__header">
        <h4>{header}</h4>
      </div>
      <div
        className={`faq__item__para animation_class`}
        style={{ height: isOpen ? 'auto' : '40px' }}
      >
        <div className="faq__item__para__content">{para}</div>
      </div>
      <span>
        {isOpen ? <MinusIcon /> : <PlusIcon onClick={() => handleClick(id)} />}
      </span>
    </div>
  );
};

export default Item;
