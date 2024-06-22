import React from 'react'
import Blog from './Blog';


const BlogSection:React.FC = () => {
     const articles  = [
       {
         title: "Kitchen Design",
         description:
           "Let’s Get Solution For Building Construction Work",
         date: "June 25, 2024",
         image: "src/assets/images/backgrounds/ArticleBg1.png",
       },
       {
         title: "Living Design",
         description:
           "Low Cost Latest Invented Interior Designing  Ideas",
         date: "June 24, 2024",
         image: "src/assets/images/backgrounds/ArticleBg2.png",
       },
       {
         title: "Interior Designing",
         description:
           "Best For Any Office & Business Interior  Solution",
         date: "June 23, 2024",
         image: "src/assets/images/backgrounds/ArticleBg3.png",
       },
     ];
  return (
      <section className="margin-section max-w-[1210px] mx-auto">
        <h1 className=" font-style text-nowrap  text-center font-DM-serif-Display  text-black-dark ">
          Articles &amp; News
        </h1>
        <p className="mx-auto mt-2 w-[340px] max-w-[740px] text-center font-Jost text-lg font-medium text-black-light sm:mx-auto sm:w-[600px] sm:text-xlp md:w-[640px] xl:text-2xlp xsm:w-[300px]">
          Stay informed and inspired with our latest articles and news, curated
          to elevate your interior design journey.
        </p>
        <div className=" article-news mt-14   grid grid-cols-1 gap-12  md:grid-cols-2 md:gap-8 lg:grid-cols-3  ">
{articles.map((article, index) => (
        <Blog
          key={index}
          title={article.title}
          description={article.description}
          image={article.image}
          date={article.date}
        ></Blog>
      ))}

        </div>
      </section>

      
  );
}

export default BlogSection