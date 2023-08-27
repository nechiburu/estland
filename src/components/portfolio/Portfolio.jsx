import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

const tabList = ["All", "Branding", "Photography", "Fashion", "Product"];
const AllPortfolioContent = [
  {
    img: "img/portfolio/1.jpg",
    title: "Motion Graphy",
    subTitle: "Android App",
    alterText: "Motion Graphy",
    portfolioLink:
      "https://play.google.com/store/apps/details?id=com.alightcreative.motion&hl=en&gl=US",
  },
  {
    img: "img/portfolio/3.jpg",
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Elearning App",
    portfolioLink:
      "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  },
  {
    img: "img/portfolio/2.jpg",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },
  {
    img: "img/portfolio/4.jpg",
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "E-Cosmetics",
    portfolioLink:
      "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
  },
  {
    img: "img/portfolio/7.jpg",
    title: "Code Editing",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
  {
    img: "img/portfolio/6.jpg",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },
];
const BrandingPortfolioContent = [
  {
    img: "img/portfolio/1.jpg",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },

  {
    img: "img/portfolio/7.jpg",
    title: "Code Editing",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
  {
    img: "img/portfolio/3.jpg",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },
];

const PhotographyPortfolioContent = [
  {
    img: "img/portfolio/4.jpg",
    title: "Code Editing",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
  {
    img: "img/portfolio/6.jpg",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },
];
const FashionPortfolioContent = [
  {
    img: "img/portfolio/4.jpg",
    title: "Code Editing",
    subTitle: "Figma Shoot",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
  },
];

const ProductPortfolioContent = [
  {
    img: "img/portfolio/3.jpg",
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  },
  {
    img: "img/portfolio/5.jpg",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },

  {
    img: "img/portfolio/6.jpg",
    title: "Chatting Application",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
];

const Portfolio = () => {
  return (
    <div className="positon-relative">
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex justify-content-center">
            {tabList.map((val, i) => (
              <Tab key={i}>{val}</Tab>
            ))}
          </TabList>
          {/* End tablist */}

          <Gallery>
            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {AllPortfolioContent.map((val, i) => (
                  <div className="col-sm-6 col-lg-4 grid-item product" key={i}>
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={336}
                          height={458}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>

                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-link */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {BrandingPortfolioContent.map((val, i) => (
                  <div className="col-sm-6 col-lg-4 grid-item product" key={i}>
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={336}
                          height={458}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>
                        {/* End gallery link */}
                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {PhotographyPortfolioContent.map((val, i) => (
                  <div className="col-sm-6 col-lg-4 grid-item product" key={i}>
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={336}
                          height={458}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>
                        {/* End gallery link */}
                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {FashionPortfolioContent.map((val, i) => (
                  <div className="col-sm-6 col-lg-4 grid-item product" key={i}>
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={336}
                          height={458}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>
                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  </div>
                ))}
                {/* grid item  */}
              </div>
              {/* End list wrapper */}
            </TabPanel>

            <TabPanel>
              <div className="portfolio-content row lightbox-gallery">
                {ProductPortfolioContent.map((val, i) => (
                  <div className="col-sm-6 col-lg-4 grid-item product" key={i}>
                    <div className="portfolio-box-01">
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={336}
                          height={458}
                        >
                          {({ ref, open }) => (
                            <img
                              src={val.img}
                              alt="Shoot"
                              role="button"
                              ref={ref}
                              onClick={open}
                            />
                          )}
                        </Item>
                        <a
                          href={val.portfolioLink}
                          className="portfolio-icon"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="ti-link"></span>
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  </div>
                ))}
                {/* grid item  */}
              </div>
              {/* End list wrapper */}
            </TabPanel>
          </Gallery>
          {/* End tabpanel */}
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;
