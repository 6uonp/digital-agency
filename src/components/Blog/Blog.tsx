import React from 'react';
import Item from './Item';
import ArticleImg1 from '../../assets/images/article_1.png';
import ArticleImg2 from '../../assets/images/article_2.png';
import ArticleImg3 from '../../assets/images/article_3.png';
import ArticleImg4 from '../../assets/images/article_4.png';
import '../../scss/blog.scss';
import { useWindowSize } from '../../hook/useDimension';

const Blog = () => {
  const [width, height] = useWindowSize();
  console.log(width);

  return (
    <section className="blog" id="blog">
      <div className="blog__wrapper">
        <div className="blog__title">
          <p>Latest newsfeed</p>
          <h3>Our recent blog post that updated</h3>
        </div>
        <div className="blog__articles">
          <Item
            title="Introducing our newest team with great experience"
            image={ArticleImg1}
            para="Brian Halligan knows that you need more than a great product to have a great brand."
            link="Learn More"
            style={{ position: 'absolute', left: '0px', bottom: '0px' }}
          />
          <Item
            title="New banking application has developed and we expecting good feedback"
            image={ArticleImg2}
            link="Learn More"
            style={
              width >= 1024
                ? { position: 'absolute', left: '416.663px', bottom: '0px' }
                : { position: 'absolute', left: '345px', bottom: '0px' }
            }
          />
          <Item
            title="Develop you design experience with figma features."
            image={ArticleImg3}
            style={
              width >= 1024
                ? {
                    position: 'absolute',
                    left: ' 833.326px',
                    bottom: '314.3px',
                  }
                : { position: 'absolute', left: '345px', bottom: '511.888px' }
            }
          />
          <Item
            title="Ui/UX industry are doing great job in previous year history"
            image={ArticleImg4}
            style={
              width >= 1024
                ? { position: 'absolute', left: ' 833.326px', bottom: '0px' }
                : { position: 'absolute', left: '0px', bottom: '577.312px' }
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
