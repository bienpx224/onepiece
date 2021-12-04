import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const HeaderBot  = ()=>{

    return(
        <div className="header-top-area">
        <div className="container">
          <div className="header-top-content d-flex flex-wrap align-items-center justify-content-between">
            <div className="header-logo">
              <a className="site-logo site-title" href="index.html">
                <img src="images/img-logo.svg" alt="site-logo" />
              </a>
            </div>
            <div className="header-right d-flex flex-wrap align-items-center">
              <div className="header-social-area">
                <ul className="header-social">
                  <li>
                    <a href="https://t.me/OnepieceIO" target="_blank">
                      <i className="fab fa-telegram-plane" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/OnepieceANN" target="_blank">
                      <i className="fab fa-telegram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/OnepieceBSC" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/OnepieceBSC/" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.reddit.com/user/Onepiece" target="_blank">
                      <i className="fab fa-reddit-alien" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="header-action">
                <a href="#0" className="cmn-btn">Join Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  
}

export default React.memo(HeaderBot);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
