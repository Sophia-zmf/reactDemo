import React from 'react'
import './css/about.css'
import Banner from './Banner'
import Footer from './Footer'
export default function About() {
  return (
    <div>
        <Banner />
        <div className="aboutMain">
            <div className="search">
                <a href="/">Home</a>
                <img
                    src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg"
                    alt=""
                    className="breadcrumbs-arrow"
                />
                <a href="/about">About</a>
            
            </div>
            <div className="about-words">
                <p className='words-text'>All You Need is Fun!</p>
                <h1>Introducing ToyStore</h1>
                <p>Welcome to ToyStore—your go-to spot for fun, safe, and high-quality toys! We curate a vibrant collection for kids of all ages, from cuddly stuffed animals to interactive games and educational playsets. Every toy is picked to spark joy, creativity, and endless hours of play. Shop online with fast U.S. delivery and exclusive deals—let the fun begin!</p>
                <a href="#" class="link">More About Us</a>
               
            </div>
            <div className='imgs'>
                <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-2000.jpeg" alt=""  />
            </div> 
            <div className="about-words ab1">
                <p className='words-text'>Made for ToyStore</p>
                <h1>Simple & Colorful Plush Toy Store – Pick Your Favorite!</h1>
            </div>  
            <div className="about-list">
                <div className="about-list1">
                    <div className="about-le">
                        <h2>Beautifully Designed</h2>
                        <div className="lines"></div>
                        <p>Our plush toys shine with beautifully designed details, blending charm and quality. Crafted from soft, skin-friendly fabrics in vibrant yet gentle hues, they’re perfect for little hands to cuddle. With meticulously made facial expressions and thoughtful design elements, these lovingly created companions spark imagination, prioritize safety, and offer huggable comfort.</p>
                        <a href="/">Get It for FREE!</a>
                    </div>
                    <div className="about-ri">
                        <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg" alt="" />
                    </div>
                </div>
                <div className="about-list1 mar-t">
                    
                    <div className="about-ri">
                        <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77f0b5b7843138dc3c3_side-image-02-p-1080.jpeg" alt="" />
                    </div>
                    <div className="about-le">
                        <h2>100% Colorful</h2>
                        <div className="lines"></div>
                        <p>Our plush toys are 100% colorful charm—bright, gentle hues that spark joy. From sunny yellows to vibrant blues, each fade-resistant plushie boasts vivid colors, perfect for kids and playrooms alike!</p>
                        <a href="/" class="button w-button">Explore Our Toys</a>
                    </div>
                </div>
            </div> 
            <div className="xsphoto">
                <div className="xsmain">
                    <p>About The Shop</p>
                    <h2>Watch Our Story</h2>
                    <h4>This video showcases products from ToyStore. We hope you can find and purchase your favorite items!</h4>
                    <a href="#" class="play-button w-inline-block w-lightbox"><img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec4b504f1c4031af32_play-icon-white.svg" alt="/catalog"/></a>
                </div>
            </div>       
        </div>
        <Footer />
    </div>
  )
}
