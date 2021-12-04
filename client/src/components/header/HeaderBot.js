import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const HeaderBot  = ()=>{

    return(
        <div className="header-bottom">
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0">
            <a className="site-logo site-title d-lg-none" href="index.html">
              <img src="images/img-logo.svg" alt="site-logo" />
            </a>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav main-menu">
                <li className="active">
                  <a href="index.html" data-i18n="header.home">
                  </a>
                </li>
                <li>
                  <a href="#features" data-i18n="header.features">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#howtoplay" data-i18n="header.howToPlay">
                    How to play
                  </a>
                </li>
                <li>
                  <a href="#howtoplay" data-i18n="header.tokenomics">
                  </a>
                </li>
                <li>
                  <a href="#roadmap" data-i18n="header.roadMap">
                  </a>
                </li>
                <li>
                  <a href="#faq" data-i18n="header.faq">
                  </a>
                </li>
                <li>
                  <a href="#partners">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#community" data-i18n="header.community">
                  </a>
                </li>
                <li className="menu_has_children"><a href="#0">
                    <b data-i18n="header.audit">
                      Audit
                    </b>
                    <i className="fa fa-caret-down" aria-hidden="true" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://www.certik.org/projects/Onepiece" target="_blank">
                        Certik
                      </a>
                    </li>
                    <li>
                      <a href="./PeckShield-Audit-Report-CryptoZoan-v1.0.pdf" target="_blank">
                        PeckShield
                      </a>
                    </li>
                    <li>
                      <a href="https://dessertswap.finance/audits/Onepiece%20BEP-20%20Audit%209551341.pdf" target="_blank">
                        Dessertswap
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu_has_children"><a href="#0">More <i className="fa fa-caret-down" aria-hidden="true" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="./Onepiece-WhitePaper.pdf" data-i18n="header.whitepaper">
                        Leader
                      </a>
                    </li>
                    <li>
                      <a href="https://leaderboard.Onepiece.io">
                        Leaderboard
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  
}

export default React.memo(HeaderBot);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
