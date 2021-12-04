import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Banner = ()=>{

    return(
        <section className="banner-section bg bg_img" data-background="images/banner-bg.png">
        <div className="banner-element-eight">
          <img src="images/banner-line3.png" alt="element" />
        </div>
        <div className="banner-element-nine">
          <img src="images/banner-line4.png" alt="element" />
        </div>
        <div className="banner-element-twelve">
          <img src="images/banner-line3.png" alt="element" />
        </div>
        <div className="banner-element-thirteen">
          <img src="images/banner-line6.png" alt="element" />
        </div>
        <div className="banner-element-fourteen">
          <img src="images/banner-line6.png" alt="element" />
        </div>
        <div className="banner-element-fifteen">
          <img src="images/banner-line3.png" alt="element" />
        </div>
        <div className="banner-element-sixteen">
          <img src="images/banner-line7.png" alt="element" />
        </div>
        <div className="banner-element-seventeen">
          <img src="images/banner-line1.png" alt="element" />
        </div>
        <div className="banner-element-eightteen">
          <img src="images/banner-manyline.png" alt="element" />
        </div>
        <div className="banner-element-nineteen">
          <img src="images/banner-whitedot.png" alt="element" />
        </div>
        <div className="container d-flex align-content-center align-items-center">
          <div className="row">
            <div className="col-12">
              <div className="banner-content">
                <h2 className="title mb-30">
                  <span className="text-primary">Onepiece</span><br />
                  <div data-i18n="banner.title" />
                </h2>
                <h5 className="text-white">
                  ZOON address
                </h5>
                <div className="input-group copy-contract">
                  <input id="zoon-address" type="text" className="form-control" defaultValue="0x9D173E6c594f479B4d47001F8E6A95A7aDDa42bC" readOnly />
                  <div className="input-group-append">
                    <button id="copyaddress" className="btn btn-outline-secondary" type="button" data-clipboard-target="#zoon-address">
                      <i className="fas fa-copy text-white" />
                    </button>
                  </div>
                </div>
                <a href="https://bscscan.com/address/0x9D173E6c594f479B4d47001F8E6A95A7aDDa42bC" target="_blank" className="text-yellow">
                  <div data-i18n="banner.check" />
                </a>
                <h5 className="text-white mt-3">
                  YAG address
                </h5>
                <div className="input-group copy-contract">
                  <input id="yag-address" type="text" className="form-control" defaultValue="0x2722c9db0Fc6818DC9DD3A01254Afc3804438b64" readOnly />
                  <div className="input-group-append">
                    <button id="copyaddress" className="btn btn-outline-secondary" type="button" data-clipboard-target="#yag-address">
                      <i className="fas fa-copy text-white" />
                    </button>
                  </div>
                </div>
                <a href="https://bscscan.com/address/0x2722c9db0Fc6818DC9DD3A01254Afc3804438b64" target="_blank" className="text-yellow">
                  <div data-i18n="banner.check" />
                </a>
                <div className="banner-btn-area">
                  <div className="dropdown show">
                    <a className="cmn-btn-border dropdown-toggle ml-0" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span>Buy ZOON - YAG</span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="https://exchange.biswap.org/#/swap?outputCurrency=0x9D173E6c594f479B4d47001F8E6A95A7aDDa42bC" target="_blank">
                        Buy ZOON
                      </a>
                      <a className="dropdown-item" href="https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x2722c9db0Fc6818DC9DD3A01254Afc3804438b64" target="_blank">
                        BUY YAG
                      </a>
                    </div>
                  </div>
                  <div className="dropdown show">
                    <a className="cmn-btn-border dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span data-i18n="banner.docs" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <a className="dropdown-item" href="https://docs.Onepiece.io" target="_blank">ENG</a>
                      <a className="dropdown-item" href="https://docs-cn.Onepiece.io" target="_blank">Chinese</a>
                    </div>
                  </div>
                  <div className="banner-btn-area mb-5">
                    <a href="https://app.Onepiece.io" className="cmn-btn enter-app" target="_blank" data-i18n="banner.enter">Enter App<i className="fas fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  
}

export default React.memo(Banner);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
