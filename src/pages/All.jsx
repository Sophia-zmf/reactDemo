import React from 'react'
import Banner from './Banner'
import Footer from './Footer'

import "./css/catalog.css"
import wooden from "../wood";
import { useNavigate } from 'react-router-dom';
export default function Woodentoys() {
    const navigate = useNavigate();
    const tz = (id)=>{
      navigate(`/product/${id}`)
    }
  return (
    <div>
      <Banner />
      <div className="catalogMain">
        <div className="search">
            <a href="/">Home</a>
            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg" alt="" class="breadcrumbs-arrow"></img>
            <a href="/catalog">Catalog</a>
        </div>
        <div className="cont-main">
            <div className="container main-con">
                <div className="cont-main-top">
                    <div className="words">
                            <h3>Wooden Toys</h3>
                            <div className="nr">
                                <a href="/catalog" >All Toys</a>
                                <a href="/catalog/wooden-toys" className='xz'>Wooden Toys</a>
                                <a href="/catalog/stuffed-animals" >Stuffed Animals</a>
                            </div>
                            
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
                                            <p>$&nbsp;{item.price}&nbsp;USD</p>
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
  )
}
