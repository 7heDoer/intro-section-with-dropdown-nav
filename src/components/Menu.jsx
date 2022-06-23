import {MdKeyboardArrowDown} from 'react-icons/md'
import {Sub} from './Sub'
import '../styles/Menu.css'

const Menu = (props) => {
    const {title, className, btnName} = props
    
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