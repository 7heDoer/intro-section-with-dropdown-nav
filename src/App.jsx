import './styles/App.css'
import Nav from './components/Nav'
import Main from './components/Main'

function App() {

  const menuOpen = (e) => {
    document.querySelector('.header-nav').classList.add('display')
  }

  return (
    <div className="App">
      <div className="container">

        <header className="header">
          <h1 className="nav-logo"><a href='#'>snap</a></h1>
          <Nav />
          <button
            onClick={menuOpen}
            aria-hidden id="menu" className="menu">
            menu
          </button>
        </header>

        <Main />
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
let prevSibling;
let clickInfo = {
  count: 0,
}

// resets currently opened list style to CSS based value
// sets 'aria-hidden' to 'true'
// sets 'aria-expanded' to 'false'
function reset() {
  if (opened) {
    opened.style.display = 'none';
    opened.setAttribute('aria-hidden', 'true');
    opened.setAttribute('aria-expanded', 'false');
    opened.previousElementSibling.querySelector('span.icon').classList.remove('rotate')
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
  el.previousElementSibling.querySelector('span.icon').classList.add('rotate')
  opened = el;
}


document.addEventListener('click', function(event) {
  // console.log('count', clickInfo.count)
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
        // console.log('resetting')
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
      // console.log('opened')
      if (prevSibling.className == target.className) {
        console.log('yes opens previous')
        reset()
      }else {
        reset()
        open(target.nextElementSibling)
        prevSibling = target
      }
    }else {
      open(target.nextElementSibling)
      prevSibling = target;
    }
  }
});
export default App
