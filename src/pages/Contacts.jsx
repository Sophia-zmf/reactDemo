import React, { useState } from'react';
import './css/contacts.css';
import Banner from './Banner';
import Footer from './Footer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'; // 用于排列表单元素

export default function Contacts() {
  // 存储表单数据和错误状态
  const [formData, setFormData] = useState({
    fullName: '',//姓名
    email: '',//邮箱
    message: '',//留言
  });
  const [errors, setErrors] = useState({
    fullName: false,
    email: false,
    message: false,
    server: false, 
  });
  const [serverError, setServerError] = useState('');

  // 输入变化时更新表单数据
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });//更新对应字段的表单数据
    setErrors({...errors, [name]: false });// 清除对应字段的错误状态
  };

  // 表单验证（提交前检查）
  const validateForm = () => {
    let isValid = true;
    const newErrors = {...errors };

    // 验证全名（非空）
    if (!formData.fullName.trim()) {
      newErrors.fullName = true;
      isValid = false;
    }

    // 验证邮箱（非空 + 格式）
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = true;
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'invalid'; // 标记为“格式错误”
      isValid = false;
    }

    // 验证消息（非空）
    if (!formData.message.trim()) {
      newErrors.message = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // 提交表单
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setTimeout(() => {
        setServerError('Oops! Something went wrong while submitting the form.');
        setErrors({...errors, server: true });
      }, 500);
    }
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
          <a href="/contacts">Contacts</a>
        </div>
        <div className="container bg">
          <div className="kb"></div>
          <div className="product-details deliver">
            <div className="xq">
              <div className="xq-le">
                <h4>Leave a Message</h4>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={2} sx={{ mt: 1 }}>
                    {/* 全名输入框 */}
                    <p className='lab'>Full Name</p>
                    <TextField
                      label="Email Address"//输入框标签文字 显示在输入框上方
                      name="fullName"//输入框名称 可以通过e.target.name获取
                      value={formData.fullName}//受控组件核心：输入框的值
                      onChange={handleChange}//利用onChange事件更新输入框的值
                      error={errors.fullName}//错误状态
                      helperText={errors.fullName? 'Please fill in this field' : ''}//错误提示
                      variant="outlined"//输入框样式
                      fullWidth//输入框宽度
                      sx={{
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#a5c926',// 选中时的边框颜色
                        
                        },
                        '.MuiOutlinedInput-notchedOutline':{borderRadius: '24px'},
                        
                      
                      }}

                    />
                     <p className='lab'>Email Address</p>
                    {/* 邮箱输入框 */}
                    <TextField
                      label="Your contact email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      helperText={
                        errors.email === 'invalid'
                         ? 'Please include the @ symbol in your email address'
                          : errors.email
                         ? 'Please fill in this field'
                          : ''
                      }
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#a5c926',// 选中时的边框颜色
                        
                        },
                        '.MuiOutlinedInput-notchedOutline':{borderRadius: '24px'},
                        
                      
                      }}
                    />
                    <p className='lab'>Email Address</p>
                    {/* 消息输入框（多行） */}
                    <TextField
                      label="Message text..."
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      helperText={errors.message? 'Please fill in this field' : ''}
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#a5c926',// 选中时的边框颜色
                        
                        },
                        '.MuiOutlinedInput-notchedOutline':{borderRadius: '24px'},
                        
                        
                      
                      }}
                    />

                    {/* 提交按钮 */}
                    <Button type="submit" variant="contained" color="success"
                      sx={{
                        borderRadius: '24px',
                        backgroundColor: '#a5c926',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        height: '48px',
                        width: '153px',
                        
                      }}
                    >
                      Send Message
                    </Button>

                    {/* 服务端错误提示 */}
                    {errors.server && (
                      <div style={{ color: 'red', mt: 2 }}>{serverError}</div>
                    )}
                  </Stack>
                </form>
              </div>

              {/* 右侧：联系信息（保持原有逻辑） */}
              <div className="xq-ri addW">
                <div className="addwT">
                  <h4>Contact Info</h4>
                 
                </div>
                <div className="addwB">
                  <h5>Follow Us</h5>
                  <div className="addB-a">
                  <a href="https://elasticthemes.com" target="_blank" class="contact-social-link twitter w-inline-block">
                    <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg" alt=""/>
                  </a>
                  <a href="https://elasticthemes.com" target="_blank" class="contact-social-link facebook w-inline-block">
                    <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg" alt=""/>
                  </a>
                  <a href="https://elasticthemes.com" target="_blank" class="contact-social-link insta w-inline-block">
                    <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg" alt=""/>
                  </a>
                  <a href="https://elasticthemes.com" target="_blank" class="contact-social-link pinterest w-inline-block">
                    <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg" alt=""/>
                  </a>
                  <a href="https://elasticthemes.com" target="_blank" class="contact-social-link youtube w-inline-block">
                    <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg" alt=""/>
                  </a>

                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}