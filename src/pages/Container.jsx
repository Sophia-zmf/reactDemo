import React,{useState,useEffect} from 'react'
import "./css/container.css";
import goods from "../good";
import wooden from "../wood";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Slide from '@mui/material/Slide'; 
import { Button } from '@mui/material';

export default function Container() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const tz = (id)=>{
    navigate(`/product/${id}`)
  }
  const handClick = ()=>{
    navigate('/catalog')
  }
   // 组件挂载后触发动画
   useEffect(() => {
    // 强制页面滚动到顶部
    window.scrollTo({
         top: 0, 
         behavior:'smooth' 
    });
    setIsVisible(true);
  }, []);
  return (
    <div >
        <div className='main'>
            
            <div className='content'>
            <Slide
                direction="up"     // 从下往上滑
                in={isVisible}     // 控制是否执行动画
                timeout={800}      // 动画时长（毫秒）
                mountOnEnter       // 进入时挂载组件
                unmountOnExit      // 退出时卸载组件
            >
                <div className="banner">
                    <div className="banner-container">
                        <p>Say Hello to ToyStore!</p>
                        <h1>Free Ecommerce Template for Webflow</h1>
                        <Button 
                            sx={{
                                height: "48px",
                                padding: "12px 28px",
                               
                                borderRadius: "24px",
                                backgroundColor: "#a5c926",
                                color: "#fff",
                                fontSize: "14px",
                                lineHeight: "24px",
                                fontWeight: 600,
                                
                            }}
                            variant="contained"
                            onClick={handClick}
                        >
                            Open Catalog
                        </Button>
                    </div>
                </div>
            </Slide>
           
            <div className="nricon">
                <div className="nrcontain">
                    <div className="cril"></div>
                </div>
            </div>
           
            </div>
            <div className="cont-main">
                <div className="con-card">
                    <div className="card1">
                        <div className="cardImg">
                            <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png" alt="" />
                            
                        </div>
                        <div className="cardText">
                            <h3>Stuffed Animals</h3>
                            <a href="/catalog">Shop Now</a>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="cardText">
                            <h3>Stuffed Animals</h3>
                            <a href="/catalog">Shop Now</a>
                        </div>
                        <div className="cardImg">
                            <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png" alt="" />
                            
                        </div>
                    </div>
                </div>
                <div className="container main-con">
                    <div className="suff">
                        <div className="cont-main-top">
                            <div className="words">
                                    <h3>Stuffed Animals</h3>
                                    <a href="/catalog">See All Toys</a>
                                </div>
                                <div className="line">
                                    <div className="co"></div>
                                </div>
                            
                        </div>
                        <div className="cont-main-main">
                            <div className="lists">
                                <ul>
                                    {goods.map((item,index)=>{
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
                    <div className="suff suffto">
                        <div className="cont-main-top">
                            <div className="words">
                                    <h3>Wooden Toys</h3>
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
                <div className="xsphoto">
                    <div className="xsmain">
                        <p>About The Shop</p>
                        <h2>Watch Our Story</h2>
                        <h4>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.</h4>
                        <a href="#" class="play-button w-inline-block w-lightbox"><img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec4b504f1c4031af32_play-icon-white.svg" alt=""/></a>
                    </div>
                </div>
                
            </div>

        </div>
        
            <Footer></Footer>
    </div>
   
  )
}
