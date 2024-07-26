import React from 'react'
import logo from '../../assets/img/footer.png'
import './Footer.css'

function Footer() {
  const company=[
    {path:'/',display:'Our programs'},
    {path:'/',display:'Our plan'},
    {path:'/',display:'Become a member'},
  ]
  const quick_link=[
    {path:'/',display:'About Us'},
    {path:'/',display:'Contact Us'},
    {path:'/',display:'Support'},
  ]
  return (
    <footer className=''>
      <div className='footer'>
        <div className='logo'>
          <div className='img-logo'>
          <img src={logo}></img>
            <h3>TECHFLIX AI</h3>
          </div>
          <p>Emprace the future of innovation ang technology with our cutting-edge bussiness solution</p>
        </div>
        <div className='company'>
          <h4>Company</h4>
          {
            company.map((items)=>
              <div className='company_items'>
                {items.display}
              </div>
            )
          }
        </div>
        <div className='quick_link'>
          
          <h4>Quick link</h4>
            {
              quick_link.map((items)=>
                <div className='quick_link_items'>
                  {items.display}
                </div>
              )
            }

          
        </div>
      </div>

    </footer>
  )
}

export default Footer