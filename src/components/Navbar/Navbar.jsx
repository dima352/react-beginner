import React from 'react';
import s from'./Navbar.module.css';
const Navbar = () => {
    return  <nav className={s.nav}>
    <div className={s.item}>
      Profile
    </div>
    <div className={s.item}>
      Messages
    </div>
    <div className={s.item}>
      News
    </div>
    <div className={s.item}>
      Listen to the music
    </div>
    <div className={s.item}>
      Settings
    </div>
  </nav>
}



export default Navbar;