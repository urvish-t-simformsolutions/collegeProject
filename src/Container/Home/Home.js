import React from "react";
import "./Home.css";
import banner from "../../images/banner.png";
import bannerP from "../../images/banner_pattern.png";
import Feature from "../../Components/fixPageComp/Feature/Feature";
import Newsletter from "../../Components/fixPageComp/Newsletter/Newsletter";
import product1 from "../../images/product1.png";
import product2 from "../../images/product2.png";
import product3 from "../../images/product3.png";
import overlay from "../../images/overlay.png";

const Home = () => {
  return (
    <>
      <section className="banner_part">
        <div className="text_container">
          <h1>Best quality pillow</h1>
          <p>
            Seamlessly empower fully researched growth strategies and
            interoperable internal
          </p>
          <a href="/product" className="btn_1">
            shop now
          </a>
        </div>
        <div className="banner_img">
          <img src={banner} alt="#" className="img_banner" />
          <img src={bannerP} alt="#" className="pattern_img img_fluid" />
        </div>
      </section>

      <section className="single_product_list">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single_product_iner">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_img">
                      <img src={product1} className="img-fluid" alt="#" />
                      <img
                        src={overlay}
                        alt="#"
                        className="product_overlay img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="single_product_content">
                      <h5>Started from Rs:3000</h5>
                      <h2>
                        {" "}
                        <a href="single-product.html">
                          Great Mattresses to sleep on with different
                          technologies used in making
                        </a>{" "}
                      </h2>
                      <a href="product_list.html" className="btn_10">
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_product_iner">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_img">
                      <img src={product2} className="img-fluid" alt="#" />
                      <img
                        src={overlay}
                        alt="#"
                        className="product_overlay img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6 ">
                    <div className="single_product_content">
                      <h5>Started from Rs:10000</h5>
                      <h2>
                        {" "}
                        <a href="single-product.html">
                          Different types of bed with great quality
                        </a>{" "}
                      </h2>
                      <a href="product_list.html" className="btn_10">
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_product_iner">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_img">
                      <img src={product3} className="img-fluid" alt="#" />
                      <img
                        src={overlay}
                        alt="#"
                        className="product_overlay img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="single_product_content">
                      <h5>Started from Rs:5000</h5>
                      <h2>
                        {" "}
                        <a href="single-product.html">Night Lamps</a>{" "}
                      </h2>
                      <a href="product_list.html" className="btn_10">
                        Explore Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Feature />
      <Newsletter />
    </>
  );
};

export default Home;
