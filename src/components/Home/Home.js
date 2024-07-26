import React from 'react'
import meta from '../../assets/img/meta.jpeg'
import { FaWhatsapp } from "react-icons/fa6";
import './Home.css'

function Home() {
    return (
        <section>
            <div className='container'>
                <div className='home_container'>
                    <div className='contant'>
                        <div className='content_text'>
                            <h1>Learn Everythimg fpr free!!</h1>
                            <p>Master Trending Teachnologies with TeachFlix AI , Invest your time and return Skills</p>
                        </div>
                        <div className='content_buttons'>
                            <button className='button'>Get Started</button>
                            <button className='button'>Watch Now</button>
                        </div>
                    </div>
                    <div className='contant_img'>
                        <div className='img_radios'>
                            <div className='box'>
                                    <img src={meta}></img>
                                
                            </div>
                        </div>

                        <div className='img_content_1'>
                            <h5>500+ students</h5>
                            <FaWhatsapp color='green' />
                        </div>
                        <div className='img_content_2'>
                            Active Support
                        </div>
                    </div>

                </div>


            </div>

        </section>
    )
}

export default Home