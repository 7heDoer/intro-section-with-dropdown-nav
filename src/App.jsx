import { useState } from 'react'
import './styles/App.css'
import Nav from './components/Nav'

function App() {

  return (
    <div className="App">
      <div className="container">

        <header className="header">
          <h1 className="nav-logo"><a href='#'>snap</a></h1>

          <Nav />
        </header>
      </div>
    </div>
  )
}





/*
/ walk through all links
/ watch out whether they have an 'aria-haspopup'
/ as soon as a link has got the 'focus' (also key), then:
/ set nested UL to 'display:block;'
/ set attribute 'aria-hidden' of this UL to 'false'
/ and set attribute 'aria-expanded' to 'true'
*/

let opened;
let openedParent;
let clickInfo = {
  count: 0,
}
// console.log(opened)

// resets currently opened list style to CSS based value
// sets 'aria-hidden' to 'true'
// sets 'aria-expanded' to 'false'
function reset() {
  if (opened) {
    opened.style.display = 'none';
    opened.setAttribute('aria-hidden', 'true');
    opened.setAttribute('aria-expanded', 'false');
  }
  opened = false
}

// sets given list style to inline 'display: block;'
// sets 'aria-hidden' to 'false'
// sets 'aria-expanded' to 'true'
// stores the opened list for later use
function open(el) {
  el.style.display = 'block';
  el.setAttribute('aria-hidden', 'false');
  el.setAttribute('aria-expanded', 'true');
  opened = el;
}

// event delegation
// reset navigation on click outside of list
// document.addEventListener('click', function(event) {
//   console.log('clicked')
//   let target = event.target.closest('button');
//   if (!target) {
//     reset()
//     return;
//   }
//   if (target.classList.contains('menu-btn')) {
//     if (opened) {
      
//       if (openedParent.className == target.className) {
//         console.log('yes opens previous')
//         reset()
//       }else {
//         reset()
//         open(target.nextElementSibling)
//         openedParent = target
//       }
//     }else {
//       open(target.nextElementSibling)
//       openedParent = target;
//     }
//   }
// });



// // event delegation
document.addEventListener('focusin', function(event) {
  reset();

  console.log('focused')
  // check if a[aria-haspopup="true"] got focus
  var target = event.target;

// check if a[aria-haspopup="true"] got focus
  var target = event.target;
  var hasPopup = target.getAttribute('aria-haspopup') === 'true';
  if (hasPopup) {
    if (openedParent) {
     

      if (target.className == openedParent.className)
      {
        // reset()
        // return;
      }
    }

    openedParent = event.target;
    open(event.target.nextElementSibling);
    blur()
    return;
  
  }

  // check if anchor inside sub menu got focus
  var popupAnchor = target.parentNode.parentNode.previousElementSibling;
  var isSubMenuAnchor = popupAnchor && popupAnchor.getAttribute('aria-haspopup') === 'true';
  if (isSubMenuAnchor) {
    openedParent = popupAnchor
    open(popupAnchor.nextElementSibling);
    blur()
    return;
  }



})



// document.addEventListener('click', (e) => {
//   event.preventDefault()
//   console.log('clicked')
//   let target = e.target;
//   if (!openedParent) {
//     if(target !== openedParent || target === openedParent) {
//       reset()
//       openedParent = null;
//       return;
//     }
//   }else {
//     openedParent = target
//     open(target.nextElementSibling)
//   }



  
// })



document.addEventListener('click', function(event) {
  console.log('clicked')
  // reset()
  console.log('count', clickInfo.count)
  let target = event.target.closest('button');
  if (!target) {
    reset()
    clickInfo.count = 0;
    if (clickInfo.ele) delete clickInfo.ele;
    return;
  }
  if (target.classList.contains('menu-btn')) {
    if(clickInfo.ele) {
      if (clickInfo.count == 1 && clickInfo.ele.className == target.className)
      {
        console.log('resetting')
        reset()
        clickInfo.count = 0
        return;
      }else {
        clickInfo.count = 0
      }
      reset()
    }
    clickInfo.count += 1
    clickInfo.ele = target;
    reset()
    if (opened) {
      console.log('opened')
      if (openedParent.className == target.className) {
        console.log('yes opens previous')
        reset()
      }else {
        reset()
        open(target.nextElementSibling)
        openedParent = target
      }
    }else {
      open(target.nextElementSibling)
      openedParent = target;
    }
  }
});
export default App
