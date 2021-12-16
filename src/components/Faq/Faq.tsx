import React from 'react';
import '../../scss/faq.scss';
import Item from './Item';

const data = [
  {
    header: '01. Which domain should I purchase?',
    para: "Get your website tests delivered at the home collect a sample. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
  },
  {
    header: '02. What are some tips when choosing a name?',
    para: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
  },
  {
    header: '03. What if I need help choosing the right domain?',
    para: "Create a hub for cross-functional work that also works with all. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
  },
  {
    header:
      '04. Can I upgrade or downgrade my web hosting subscription system? ',
    para: "The pricing made me a little hesitant at first but I have been. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
  },
  {
    header: '05. Learn from community on Brandwagon',
    para: "Stop your viewers from getting distracted. Publish videos to. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments.",
  },
];
const Faq = () => {
  const [currentOpen, setCurrentOpen] = React.useState(0);
  const handleClickOpen = (id: number) => {
    setCurrentOpen(id);
  };
  return (
    <section className="faq" id="faq">
      <div className="faq__wrapper">
        <div className="faq__title">
          <p>Get your question answer</p>
          <h3>Frequently asked question</h3>
        </div>
        {data.map((element, index) => {
          return (
            <Item
              header={element.header}
              para={element.para}
              isOpen={currentOpen === index ? true : false}
              id={index}
              handleClick={handleClickOpen}
            />
          );
        })}
        <div className="faq__button">
          <button>Still Question? Contact us</button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
