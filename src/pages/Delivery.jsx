
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart, toggleCart } from '../store/modules/cartSlice';
import goods from "../good";

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
                    <h4>Delivery Coverage</h4>
                    <p>We provide delivery services to the 48 contiguous United States. For shipments to Alaska, Hawaii, Puerto Rico, and other U.S. territories, please contact customer service to confirm delivery feasibility and additional details.</p>
                    <h4>Delivery Timeframes</h4>
                    <ul role="list">
                        <li> Standard Shipping: Delivers in 3-5 business days with no extra expedited fees.</li>
                        <li>Expedited Shipping: Arrives in 2-3 business days, requiring payment of an additional service fee.</li>
                        <li>Express Shipping: Delivers in 1-2 business days, ideal for time-sensitive orders.</li>
                        <li>Holiday Delivery: Delivery timeframes may be extended by 1-2 business days during major holidays (e.g., Thanksgiving, Christmas). Please refer to logistics notifications for the latest updates.</li>
                        
                    </ul>

                    <h4>Shipping Fees</h4>
              
                    <ul role="list">
                        <li>Free Standard Shipping on orders with a subtotal of $79 or more (after discounts and before taxes).</li>
                        <li>Orders under $79: Standard Shipping fee is $8.99; Expedited Shipping fee is $15.99; Express Shipping fee is $24.99.</li>
                        <li>Additional surcharges apply to shipments to Alaska, Hawaii, and U.S. territories (varies by delivery location and package weight).</li>
                        
                    </ul>
                    <h4>Shipment Tracking</h4>
                    <p>Once your order is shipped, you will receive a confirmation email containing a tracking number. You can track the real-time delivery status of your package via the "My Orders" page on our official website, brand app, or by entering the tracking number on the logistics carrier’s website (e.g., USPS, UPS, FedEx).</p>
                    <h4>Important Notes</h4>
                    <ul role="list">
                        <li>Please inspect the package’s exterior and the quantity of items upon delivery. If there is damage, missing items, or discrepancies, refuse acceptance and contact customer service immediately for assistance.</li>
                        <li>To change the delivery address or scheduled delivery time, please contact customer service before the package is shipped. Modifications are not available once the package has been dispatched.</li>
                        <li>All toy products are packaged with shockproof materials to ensure intact delivery. If you receive a defective or damaged item, you may request a return or exchange with your order number within the return window.</li>
                        
                    </ul>
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