import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, toggleCart } from "../store/modules/cartSlice";
import goods from "../good";
import Banner from "./Banner";
import "./css/product.css";
import Footer from "./Footer";

export default function Product() {
  // 1. 获取 URL 中的 id 参数（仅一次，无需重复调用）
  const { id } = useParams();
  const dispatch = useDispatch();

  // 2. 根据 id 查找对应的商品（用 === 严格匹配，避免类型转换问题）
  const product = goods.find((item) => item.id === Number(id));

  // 3. 用 useState 管理数量输入框状态（替代直接操作 DOM）
  const [quantity, setQuantity] = useState(1);

  // 4. 处理数量变化（同步输入框值和状态）
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value) || 1; // 确保值为数字，且最小为 1
    setQuantity(value);
  };

  // 5. 加入购物车逻辑（使用状态中的 quantity，而非 DOM 值）
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    dispatch(toggleCart());
  };

  return (
    <div>
      <Banner /> {/* 保持 Banner 始终显示 */}
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
          {/* 商品不存在时，显示“商品不存在”而非 product.title */}
          <a href="">{product ? product.title : "商品不存在"}</a>
        </div>

        {/* 商品详情区域：根据 product 是否存在显示不同内容 */}
        <div className="container bg">
          {product ? (
            <>
              <div className="product-container">
                <div className="bg-le">
                  <h1>{product.title}</h1>
                  <p className="text">{product.text}</p>
                  <p className="price"> ${product.price.toFixed(2)} USD</p>
                  <div className="se">
                    {/* 绑定状态和事件，替代直接操作 DOM */}
                    <input
                      type="number"
                      name=""
                      id=""
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                    />
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
                    {/* 根据商品类型动态显示详情标题（木制玩具/毛绒玩具） */}
                    <h2>
                      {product.type === "wooden"
                        ? "Materials and Texture of Wooden Toys"
                        : "Materials and Texture of Plush Toys"}
                    </h2>
                    {/* 动态替换详情内容（你之前要求的木制/毛绒玩具介绍） */}
                    {product.type === "wooden" ? (
                      <>
                        <p>
                          Our wooden toys are crafted from 100% natural,
                          sustainably sourced wood—safe, non-toxic, and gentle
                          on little hands. Designed to spark creativity and
                          hands-on learning, each piece encourages
                          problem-solving, fine motor skills, and imaginative
                          play that grows with your child.
                        </p>
                        <p>
                          Unlike plastic alternatives, these timeless toys boast
                          exceptional durability, resisting wear and tear for
                          years of joyful use. From classic building blocks to
                          interactive puzzles, every wooden toy blends
                          craftsmanship with educational value.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>
                          Our stuffed animals are crafted with OEKO-TEX
                          certified super-soft fabric and eco-friendly PP cotton
                          filling—safe, non-toxic, and gentle on kids’ skin.
                          Their cuddly texture offers a soothing sensory
                          experience, perfect for naptime snuggles or bedtime
                          comfort.
                        </p>
                        <p>
                          With vibrant, fade-resistant colors and exquisite
                          embroidered details, each plushie sparks imaginative
                          role-play and fosters a sense of security. Just the
                          right size for little hands to hold, they’re durable
                          companions for years of joyful play.
                        </p>
                      </>
                    )}
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
                      <p>Weight</p>
                      <span>{product.weight} oz</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // 商品不存在时，显示友好提示
            <div className="product-not-found">
              <h2>商品不存在或已下架</h2>
              <p>
                请返回 <a href="/catalog">商品列表</a> 查看其他商品
              </p>
            </div>
          )}
        </div>

        {/* 相关商品区域：仅当商品存在时显示 */}

        {product && (
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
                  <ul className="list-main">
                    {/* 1. 排除当前商品 → 2. 随机排序 → 3. 截取前8个 */}
                    {goods
                      .filter((item) => item.id !== product.id) // 排除当前查看的商品
                      .sort(() => Math.random() - 0.5) // 随机排序（Math.random()返回0-1，减0.5后随机得到正负值，实现乱序）
                      .slice(0, 8) // 只保留前8个商品
                      .map((item) => (
                        <li
                          key={item.id}
                          className="list"
                          onClick={() =>
                            (window.location.href = `/product/${item.id}`)
                          }
                        >
                          <img src={item.img} alt={item.title} />
                          <div className="text">
                            <h3>{item.title}</h3>
                            <div className="p">
                              <p>$&nbsp;{item.price.toFixed(2)}&nbsp;USD</p>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer> {/* 保持 Footer 始终显示 */}
    </div>
  );
}
