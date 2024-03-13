import {React, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavbarMenu from '../../components/Navbar/NavbarMenu'
import ListMenu from '../../components/ListMenu/ListMenu'

const Menu = () => {
    useEffect(() => {
        AOS.init({
          offset:100,
          duration:700,
          easing: 'ease-in',
          delay:100,
        })
    })
  return (
    <div>
        <NavbarMenu />
        <ListMenu />
    </div>
  )
}

export default Menu