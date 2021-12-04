import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Banner from './banner/Banner';
import Header from "./header/Header"

const Home  = ()=>{
    const [user, setUser] = useState("")
    const testStr = useSelector((state) => state.testReducer.testStr )

    return(
        <div>
            <Header />
            <Banner />
        </div>
    )
  
}

export default React.memo(Home);  // Sử dụng memo khi mà trang thường xuyên bị re-render những thành phần ko cần thiết.
// React.memo chỉ có thể xác định việc rerender dựa trên sự thay đổi của props
