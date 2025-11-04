import React, { useState } from "react";
import './css/footer.css'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
export default function Footer() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  const handleSubscribe = () => {
    if (!email.trim()) {
      setError(true);
      setErrorMessage("请填写此字段。");
    } else {
      setError(true);
      setErrorMessage("Oops! Something went wrong submitting the form.");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // 输入有内容时，清除错误状态
    if (event.target.value.trim()) {
      setError(false);
      setErrorMessage("");
    }
  };

  return (
    <div>
        <div className="catalog-center">
            <div className="cata-left">
                <div className="icon">
                    <img
                        src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf56dcace69cfd39b34f7a_paperplane-icon-white.svg"
                        alt=""
                    />
                </div>
                <h4>
                Subscribe to our newsletter
                <br />
                &amp; get <span className="text-green">10% discount!</span>
                </h4>
            </div>
            <div className="cata-right">
                <Box display="flex" alignItems="center" gap={2} marginBottom={1}>
                <TextField
                    sx={{
                    width: 381,
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#a5c926',// 选中时的边框颜色
                      
                      },
                      '.MuiOutlinedInput-notchedOutline':{borderRadius: '24px'},
                    }}
                    label="Enter your email address"
                    variant="outlined"
                    value={email}
                    onChange={handleEmailChange}
                    error={error}
                />
                <Button
                    sx={{
                    height: "48px",
                    padding: "12px 28px",
                    borderRadius: "24px",
                    backgroundColor: "#a5c926",
                    }}
                    variant="contained"
                    color="success"
                    onClick={handleSubscribe}
                >
                    Subscribe
                </Button>
                </Box>
                {error && (
                <Box
                    sx={{
                    backgroundColor: "#ffebee",
                    color: "#f44336",
                    padding: "8px",
                    borderRadius: "4px",
                    }}
                >
                    {errorMessage}
                </Box>
                )}
            </div>
        </div>
        <div className="cataPhoto">
            <div className="cataPhoto-words">
                <p>@ElasticThemes</p>
                <h2>We're on Instagram!</h2>
            </div>
        
            <div className="cataPhoto-main">
                <a href="https://instagram.com" target="_blank" class="instagram-link w-inline-block">
                    <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg" alt="" class="full-width"/>
                </a>
                <a href="https://instagram.com" target="_blank" class="instagram-link w-inline-block">
                    <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg" alt="" class="full-width"/>
                </a>
                <a href="https://instagram.com" target="_blank" class="instagram-link w-inline-block">
                    <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg" alt="" class="full-width"/>
                </a>
                <a href="https://instagram.com" target="_blank" class="instagram-link w-inline-block">
                    <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg" alt="" class="full-width"/>
                </a>
                <a href="https://instagram.com" target="_blank" class="instagram-link w-inline-block">
                    <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg" alt="" class="full-width"/>
                </a>
                <a href="https://instagram.com" target="_blank" class="instagram-link w-inline-block">
                    <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg" alt="" class="full-width"/>
                </a>
            </div>
            <div className="cataPhoto-bottom">
            <a href="https://instagram.com" target="_blank" class="button w-button">See More Photos</a>
            </div>
        </div>
        <div className="foot-main">
            <div className="foot-container">
                <div className="foot-main-top">
                    <div className="foot-main-top-left">
                        <p>ToyStore</p>
                    </div>
                    <div className="foot-main-top-center">
                        <a href="/">Home</a>
                        <a href="/catalog">Catalog</a>
                        <a href="/delivery">Delivery</a>
                        <a href="/about">About</a>
                        <a href="/contacts">Contacts</a>
                    </div>
                    <div className="foot-main-top-right">
                        <a href="https://elasticthemes.com" target="_blank" class="social-link w-inline-block">
                            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg" alt=""/>
                        </a>
                        <a href="https://elasticthemes.com" target="_blank" class="social-link w-inline-block">
                            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg" alt=""/>
                        </a>
                        <a href="https://elasticthemes.com" target="_blank" class="social-link w-inline-block">
                            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg" alt=""/>
                        </a>
                        <a href="https://elasticthemes.com" target="_blank" class="social-link w-inline-block">
                            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg" alt=""/>
                        </a>
                        <a href="https://elasticthemes.com" target="_blank" class="social-link w-inline-block">
                            <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="foot-main-bottom">
                    <div className="foot-main-bottom-left">
                        <span>Created with love by </span>
                        <a href="https://elasticthemes.com" target="_blank" class="link-white">Elastic Themes</a>
                    </div>
                    <div className="foot-main-bottom-center">
                        <span>Powered by </span>
                        <a href="">Webflow</a>
                        <span>-</span>
                        <a href="">Style Guide</a>
                      
                        <span>-</span>
                        <a href="">Licensing</a>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}
