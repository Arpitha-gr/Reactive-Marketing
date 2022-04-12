import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdg1Mdh55R-GQiGK-BOFG9iBtHI8fsTGwzGw&usqp=CAU" alt="" width={30} height={30} />
        BRAND NAME</div>
        <div className='icons'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7MbHgevWMDt0zvs2l0EF7pme4YJr8hEUxQ&usqp=CAU" alt="" width={30} height={30} />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXSrFhi3qzso0fRns44RchlA2Kv_-bgCAMA&usqp=CAU" alt="" width={30} height={30} />
        </div>
    </div>
  )
}

export default Navbar