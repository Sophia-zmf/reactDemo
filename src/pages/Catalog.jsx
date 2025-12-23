import React, { useState } from "react";
import Banner from "./Banner";
import "./css/catalog.css";
import goods from "../good";
import { useNavigate, Link } from "react-router-dom"; // 引入Link
import Footer from "./Footer";

export default function Catalog() {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState("all");

  const categories = [
    { key: "all", name: "All Toys" },
    { key: "wooden", name: "Wooden Toys" },
    { key: "stuffed", name: "Stuffed Animals" }
  ];

  const filteredGoods = goods.filter(item => {
    if (activeType === "all") return true;
    return item.type === activeType;
  });

  const tz = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <Banner />
      <div className="catalogMain">
        <div className="search">
          <Link to="/">Home</Link> {/* 替换a为Link */}
          <img
            src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg"
            alt=">"
            className="breadcrumbs-arrow"
          />
          <Link to="/catalog">Catalog</Link> {/* 替换a为Link */}
        </div>
        <div className="cont-main">
          <div className="container main-con">
            <div className="cont-main-top">
              <div className="words">
                <h3>{categories.find(cat => cat.key === activeType).name}</h3>
                <div className="nr">
                  {categories.map((cat) => (
                    // 用Link替换a标签，无需href="javascript:;"
                    <Link
                      key={cat.key}
                      to="#" // 空路由，仅用点击事件
                      className={activeType === cat.key ? "xz" : ""}
                      onClick={(e) => {
                        e.preventDefault(); // 阻止Link默认跳转
                        setActiveType(cat.key);
                      }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="line">
                <div className="co"></div>
              </div>
            </div>
            <div className="cont-main-main">
              <div className="lists">
                <ul className="list-main">
                  {filteredGoods.map((item) => (
                    <li key={item.id} className="list" onClick={() => tz(item.id)}>
                      {/* 添加onError处理图片加载失败 */}
                      <img
                        src={item.img}
                        alt={item.title}
                        onError={(e) => {
                          e.target.src = "默认图片地址"; // 可替换为你的兜底图片
                        }}
                      />
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
        <Footer></Footer>
      </div>
    </div>
  );
}