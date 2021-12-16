import React from 'react';
import '../../scss/home.scss';
import Google from '../../assets/images/google.png';
import Paypal from '../../assets/images/paypal.png';
import Dropbox from '../../assets/images/dropbox.png';

// interface Props {
//   ref: React.Ref<HTMLDivElement>;
// }

const Home = (): JSX.Element => {
  // const { ref } = props;
  // React.useEffect(() => {
  //   ref && ref.current && console.log(ref.current);
  // });
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__content">
          <div className="home__content--left">
            <h1>A Creative way to grow your Exciting Business ideas</h1>
            <p>
              Get your blood tests delivered at let home collect sample from the
              victory of the managments that supplies best design system
              guidelines ever.
            </p>
            <form className="home__content--left__form">
              {/* <label></label> */}
              <input type="email" placeholder="Enter Email address" />
              <button>Get Started</button>
            </form>
            <div className="home__content--left__sponser">
              <span>Our clients</span>
              <div className="home__content--left__sponser__logo">
                <figure>
                  <img src={Paypal} alt="paypal" />
                </figure>
                <figure>
                  <img src={Google} alt="google" />
                </figure>
                <figure>
                  <img src={Dropbox} alt="dropbox" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// const forwardedHome = React.forwardRef<HTMLDivElement>(Home);

export default Home;
