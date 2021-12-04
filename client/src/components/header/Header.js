import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HeaderTop from "./HeaderTop"
import HeaderBot from "./HeaderBot"

const Header = ()=>{

    return(
      <header class="header-section" id="header">
      <div class="header">
            <HeaderTop />
            <HeaderBot />
        </div>
        </header>
    )
  
}

export default React.memo(Header);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
