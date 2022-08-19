import React, { useState} from 'react'
import '../../assets/scss/hamburger.scss';
import { NavLink } from "react-router-dom";
import { FiShoppingBag } from 'react-icons/fi';
import venia from '../../assets/images/venia.png';

function Hamburger(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className='hamburgerPhone'>
      <div class="navbar">
        <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id=""
            onClick={showSidebar}
            checked={sidebar} />
          <div class="hamburger-lines" onClick={showSidebar}>
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div className="hamberger__logo" >
            <NavLink className="" to="/"><img src={venia} /></NavLink>
          </div>
          <div className="header__icons">
            <ul>
              <NavLink to="/cart" className="">
                <FiShoppingBag />{' '}
                {props.countCartItems ? (
                  <button className="cartCount1">{props.countCartItems}</button>
                ) : (
                  ''
                )}
              </NavLink>{' '}
            </ul>
          </div>
          {sidebar ? (
            <div class="menu-items" onClick={showSidebar}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/women">Women</NavLink></li>
              <li><NavLink to="/men" >Men</NavLink></li>
              <li><NavLink to="/jewelery" >Jewellery</NavLink></li>
              <li><NavLink to="/electronics" >Electronics</NavLink></li>
            </div>

          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default Hamburger