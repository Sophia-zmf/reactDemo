
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, toggleCart } from '../store/modules/cartSlice';
import goods from "../good";
import wooden from "../wood";
import Banner from './Banner';
import "./css/product.css"
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
export default function Product() {
    const ys = {
        marginTop: "0px",
        marginBottom: "8px",
        
        fontSize: "17px",
        lineHeight: "24px",
        fontWeight: 400,
        padding:"40px",
        textAlign: "center",
        height:"188px"
        
    }
    const btn = {
        height: "40px",
        padding: "8px 24px",
        borderRadius: "20px",
        fontSize: "13px",
        lineHeight: "24px",
        backgroundColor: "#a5c926",
        color: "#fff",
    }
  return (
    <div>
      <Banner />
      <div className="product-detail">
          <div className="search">
            <a href="/">Home</a>
            <img
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg"
                alt=""
                className="breadcrumbs-arrow"
            />
            <a href="/deliver">Deliver</a>
          
          </div>
          <div className="container bg">
           
            <div className="product-details deliver" style={{marginTop:"0px"}}>
             
              <div className="xq">
                <div className="xq-le">
                    <h2>Delivery Info</h2>
                    <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.</p>
                    <h3>What’s a Rich Text element?</h3>
                    <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                    <h4>Static and dynamic content editing</h4>
                    <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. </p>
                    <ul role="list">
                        <li>Beautifully Designed</li>
                        <li>100% Responsive</li>
                        <li>CMS Content</li>
                        <li>Smooth Animations</li>
                    </ul>
                    <p>For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                    <h4>How to customize formatting for each rich text</h4>
                    <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                </div>
                  
                <div className="xq-ri" style={ys}>
                      <h5 style={{marginBottom: "16px",}}>Can't Find the Answer to Your Question?</h5>
                      <a href="/contacts" class="button small w-button" style={btn}>Contact Us</a>
                </div>
              </div>
            </div>
              
          </div>
        
       <Footer></Footer>
      </div>
    </div>
  );
}