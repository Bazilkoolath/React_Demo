import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo.png'

function Header() {
   const nav_titles=[{
    path:'/',title:'Home'
   },{
    path:'/',title:'Services'
   },{
    path:'/',title:'Courses'
   },{
    path:'/',title:'About Us'
   },
]
  return (
    <header className='header'>
    <div className='main_container'>
        <div className='logo_container'>
            <div className='logo_img'>
                <img src={logo} alt=''></img>
            </div>
            <h1> TachFlix AI</h1>
        </div>
        <div className='items'>
         {
            nav_titles.map((item)=>
               
            <div className='item'>
            {item.title}
            </div>
        
            )
         
         }
        </div>
    </div>
    </header>
  )
}

export default Header