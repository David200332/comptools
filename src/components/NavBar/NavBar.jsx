import React, {useState, useEffect} from 'react'
import style from "./NavBar.module.css"
import heart from './img/heart.png'
import loupe from './img/loupe.png'

function NavBar() {

  return (
    <div className={style.navbar}>
      <div className={style.container}>
          <div className={style.left__content}>
          <div className={style.logo}>
              <div className={style.burger}>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
              <div className={style.logo__text}>
                    <h1>FeedBuzz</h1>
              </div>
          </div>
          <div className={style.menu__link}>
              <ul>
                  <li><a href="/">Quizzes</a></li>
                  <li><a href="/">TV & Movies</a></li>
                  <li><a href="/">Shopping</a></li>
                  <li><a href="/">Videos</a></li>
                  <li><a href="/">News</a></li>
                  <li><a href="/">Tasty</a></li>
              </ul>
          </div>
          </div>
          <div className={style.right__content}>
              <ul>
                  <li><img src={heart} alt={heart} /></li>
                  <li><a href="">Sign In</a></li>
                  <li><img src={loupe} alt={loupe} /></li>
              </ul>
          </div>
      </div>
    </div>
  );
}

export default NavBar;
