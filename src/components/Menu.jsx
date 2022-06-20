import React, { useState } from 'react'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
import {Sub} from './Sub'
import '../styles/Menu.css'


// document.addEventListener('click', (e) => {
//     let span = Array.from(document.querySelectorAll('span.icon'));
//     let sub = Array.from(document.querySelectorAll('.sub-menu'));
//     let menubtns = Array.from(document.querySelectorAll('menu-btn'));
//     let target = e.target;

//     // span.forEach(span => span.classList.remove('rotate'))
//     // sub.forEach(sub => {
//     //     sub.style.display = "none";
//     //     sub.setAttribute('aria-hidden', true);
//     //     sub.setAttribute('aria-expanded', false)
//     // });
// })


const Menu = (props) => {
    const {title, className, btnName} = props
    const [toggle, setToggle] = useState(false)

    // const handleSub = (target, sub, span, toggle) => {
    //     setToggle(toggle)
    //     if (!(target.closest('button')))
    //     {
    //       span.forEach(span => span.classList.remove('rotate'))
    //       sub.forEach(sub => {
    //           sub.style.display = "none";
    //           sub.setAttribute('aria-hidden', true);
    //           sub.setAttribute('aria-expanded', false)
    //       });
    //     }
    // }



   

    


    
  return (
      <>
        <button 
            className={`menu-btn ${btnName}`} aria-haspopup
        >
            {title}
            <span aria-hidden className="icon">
                <MdKeyboardArrowDown className="icon"/>
            </span>
        </button>
        <Sub className={className} label={"Features submenu"}>
            {props.children}
        </Sub>
      </>
  )
}




export default Menu