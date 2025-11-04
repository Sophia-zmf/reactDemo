
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

  // 获取 URL 中的 id 参数
  const { id } = useParams();

  const dispatch = useDispatch();
  // 根据 id 查找对应的商品
  const product = goods.find(item => item.id == id) || wooden.find(item => item.id == id);
  
  const navigate = useNavigate();
  const tz = (id)=>{
    navigate(`/product/${id}`)
  }
  // 如果找不到商品
  if (!product) {
    return <div>商品不存在</div>;
  }
  const handleAddToCart = () => {
    // 获取数量输入框的值（默认至少为 1）
    const quantityInput = document.querySelector('input[type="number"]');
    const quantity = parseInt(quantityInput.value) || 1;
    // 把当前商品信息和数量一起传给 cartSlice 里的 addToCart 方法
    dispatch(addToCart({ ...product, quantity }));
    dispatch(toggleCart());
  };
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
            <a href="/catalog">Catalog</a>
            <img
                src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg"
                alt=""
                className="breadcrumbs-arrow"
            />
            <a href="">{product.title}</a>
          </div>
          <div className="container bg">
            <div className="product-container">
              <div className="bg-le">
                    <h1>{product.title}</h1>
                    <p className='text'>{product.text}</p>
                    <p className='price'> ${product.price.toFixed(2)} USD</p>
                    <div className="se">
                        <input type="number" name="" id="" min="1" defaultValue='1'/>
                        <button onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                    
              </div>
              <img src={product.img} alt={product.title} />
            </div>
            <div className="product-details">
              <div className="cont-main-top">
                  <div className="words">
                      <h3>Product Details</h3>
                      <a href="">SKU: {product.sku}</a>
                  </div>
                  <div className="line">
                      <div className="co"></div>
                  </div>
              </div>
              <div className="xq">
                  <div className="xq-le">
                      <h4>Add Your Product Description</h4>
                      <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.

                      </p>
                      <h4>Simple & Elegant Template</h4>
                      <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
                      <ul>
                        <li>Beautifully Designed</li>
                        <li>Fully Responsive</li>
                        <li>CMS Content</li>
                        <li>Smooth Animations</li>
                      </ul>
                      <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</p>
                      <h5>Perfect Choice for Your Business</h5>
                      <p>Grabbing the consumer’s attention isn’t enough; you have to keep that attention for at least a few seconds. This is where your benefits come into play or a product description that sets your offer apart from the others.</p>
                  </div>
                  <div className="xq-ri">
                      
                         <div className="js w">
                            <p>Width</p>
                            <span>{product.width} in</span>
                         </div>
                         <div className="js h">
                            <p>Height</p>
                            <span>{product.height} in</span>
                         </div>
                         <div className="js l">

                            <p>Length</p>
                            <span>{product.length} in</span>
                         </div>
                         <div className="js wei">
                            <p>weight</p>
                            <span>{product.weight} oz</span>
                         </div>
                     
                  </div>
              </div>
            </div>
              
          </div>
          <div className="container main-con">
            <div className="suff suffto">
              <div className="cont-main-top">
                  <div className="words">
                      <h3>Related Products</h3>
                      <a href="/catalog">See All Toys</a>
                  </div>
                  <div className="line">
                      <div className="co"></div>
                  </div>
              </div>
              <div className="cont-main-main">
                  <div className="lists">
                      <ul>
                          {wooden.map((item,index)=>{
                              return <li key={index} className='list' onClick={()=>tz(item.id)}>
                                  <img src={item.img} alt=""/>
                                  <div className="text">
                                      <h3>{item.title}</h3>
                                      <div className="p">
                                          <p>$&nbsp;{item.price.toFixed(2)}&nbsp;USD</p>
                                      </div>
                                  </div>
                              </li>
                          })}
                      </ul>
                  </div>
              </div>
            </div>
          </div>
       <Footer></Footer>
      </div>
    </div>
  );
}