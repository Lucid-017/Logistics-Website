import {Logo} from "../Logo"
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import {useState} from 'react'
import { NavLink } from "react-router-dom"

// import {Link} from 'react-router-dom'
const Navbar = () => {
  const [active,setActive]=useState(false)


  const handleActive =()=>{
    setActive(!active)
  }
  const closeMenu =()=>{
    setActive(false)
  }
  return (
    <nav className="navbar relative px-4 bg-white text-neutral-content ">
      <div className="container ">
        <div className="grid grid-cols-2 ">
          <div className="flex ">
            <Logo/>
          </div>
         
        
        <div className="flex hidden md:block lg:block self-center absolute right-10">
            <ul className="flex">
          <NavLink to={'/'} className='link btn md:mr-5 lg:mr-10 pt-3 cursor-pointer'>
            <li className="">Home</li>
          </NavLink>
          <NavLink to={'/faq'} className='link btn md:mr-5 lg:mr-10 pt-3 cursor-pointer'>
            <li className="">FAQ</li>
          </NavLink>
          <NavLink to={'/about'} className='link btn md:mr-5 lg:mr-10 pt-3 rounded-btn cursor-pointer'>
            <li  className=" ">About</li>
          </NavLink>
          <NavLink to={'/contact'} className='link btn md:mr-5 lg:mr-10 pt-3 cursor-pointer'>
            <li className="">Contact</li>
          </NavLink>
         
            </ul>
          </div>
          
        <div className='block md:hidden lg:hidden absolute right-10'>
          <div onClick={handleActive} className='mt-9'>
            {active ? <AiOutlineClose size='25px'/>:<AiOutlineMenu size='25px'/>}
          </div>
          
          
          {/* <label htmlFor="checkbox" className="hamburger relative  inline-flex items center justify-center cursor-pointer p-2" >
            <input type="checkbox" id="checkbox" className="hidden"/>
            <div className="t" onClick={handleActive}>
              <span className={active ?'before:bg-black after:bg-black line line-main':' before:bg-ash-900 after:bg-ash-900 line line-main'} ></span>
              <span className='before:bg-Limegreen-500 after:bg-Limegreen-500 line line-split'></span>
            </div>
            
          </label> */}

        </div>
        {active &&(
          <>
          <ul className="rounded shadow-lg block md:hidden lg:hidden w-11/12 bg-white p-5 text-center absolute top-20 " onClick={closeMenu}>

              <li className="btn mr-10 pt-2  btn-sm rounded-btn  cursor-pointer">Home</li>
             <li  className="btn mr-10 pt-2  rounded-btn cursor-pointer">About</li>
              <li className="btn mr-10 pt-2 btn-sm rounded-btn cursor-pointer">Contact</li>
              <li className="btn mr-10 pt-2 btn-sm rounded-btn cursor-pointer">Blog</li>
              <li className="btn mr-10 pt-2 btn-sm rounded-btn cursor-pointer">Careers</li>
          </ul>
          </>
            
          )}
        

      </div>
      </div>
      
      
    </nav>
  )
}

export default Navbar