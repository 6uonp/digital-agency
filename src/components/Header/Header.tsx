/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../scss/header.scss';
import { ReactComponent as Logo } from '../../assets/icon/logo.svg';

const headerList = ['Home', 'Feature', 'Pricing', 'Support', 'Blog', 'Faq'];
const Header = (ref: any): JSX.Element => {
  // const { refGroup } = props;
  // const { homeRef } = ref;
  const [onTop, setOnTop] = React.useState(true);
  const [current, setCurrent] = React.useState(0);

  React.useEffect((): any => {
    window.onscroll = () => {
      window.pageYOffset !== 0 && onTop && setOnTop(false);
      window.pageYOffset === 0 && setOnTop(true);
    };
    return () => (window.onscroll = null);
  });

  const scrollTo = (ele: string, index: number) => {
    setCurrent(index);
    const idScroll = document.getElementById(ele);
    idScroll?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  // const

  return (
    <div className="header" style={!onTop ? { height: '0px' } : {}}>
      <div
        className="header__wrapper"
        style={
          !onTop
            ? { top: '0px', width: '1519.2px', position: 'fixed' }
            : { position: 'relative' }
        }
      >
        <header className={`header__content${!onTop ? ' is-sticky' : ''}`}>
          <div className="header__content__container">
            <a className="header__content__container__logo">
              <Logo />
            </a>
            <nav className="header__content__container__nav">
              {headerList.map((element, index) => {
                return (
                  <a
                    key={index}
                    className={`header__content__container__nav__item${
                      current === index ? ' active' : ''
                    }`}
                    onClick={() => {
                      scrollTo(element.toLowerCase(), index);
                    }}
                  >
                    {element}
                  </a>
                );
              })}
              {/* <a
                className="header__content__container__nav__item"
                onClick={() => {
                  scrollTo('home');
                }}
              >
                Home
              </a>
              <a
                className="header__content__container__nav__item"
                onClick={() => {
                  scrollTo('feature');
                }}
              >
                Feature
              </a>
              <a
                className="header__content__container__nav__item"
                onClick={() => {
                  scrollTo('pricing');
                }}
              >
                Pricing
              </a>
              <a
                className="header__content__container__nav__item"
                onClick={() => {
                  scrollTo('support');
                }}
              >
                Support
              </a>
              <a
                className="header__content__container__nav__item"
                onClick={() => {
                  scrollTo('blog');
                }}
              >
                Blog
              </a>
              <a
                className="header__content__container__nav__item"
                onClick={() => {
                  scrollTo('faq');
                }}
              >
                Faq
              </a> */}
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

// const headerRef = React.forwardRef(Header);
export default Header;
