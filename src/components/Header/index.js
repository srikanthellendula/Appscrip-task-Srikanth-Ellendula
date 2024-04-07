import {useState} from 'react'
import './index.css'

const Header = () => {

    const [onMenubar, setMenubar] = useState(false)

    return(
        <> 
            <div className='desktop-header'> 
            <div className='header-top-section'>
                <div className='main-logo'>
                    <img src='https://res.cloudinary.com/dx94215tz/image/upload/v1712412103/Vector_1_qg8d2m.png' alt='logo'/>
                </div>
                <div className='main-head'> 
                    <h2> LOGO </h2>
                </div>
                <div className='logo-container'> 
                    <img className='logo-styles' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712412033/search-normal_1_vlz4yn.png' alt='search'/>
                    <img  className='logo-styles' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712407202/heart_2_qq58py.png' alt='heart'/>
                    <img className='logo-styles' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712411928/shopping-bag_1_oe0b9k.png' alt='cart'/>
                    <img  className='logo-styles' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712413560/profile_1_jybeww.jpg' alt='profile'/>
                    <select className='dropdown'>
                        <option selected> ENG </option>
                        <option> HINDI </option>
                        <option> SPANISH </option>
                        <option> FRENCH  </option>
                    </select>
                </div>

            </div>

            <div className='header-bottom-section'>
                <ul>
                 <a href=''>  <li> SHOP </li> </a>
                 <a href=''>  <li> SKILLS </li> </a>
                 <a href=''>  <li> STORIES </li> </a>
                 <a href=''>  <li> ABOUT </li> </a>
                 <a href=''>   <li> CONTACT US </li> </a>
                </ul>

            </div>
            </div>
            
            <div>
                 <div className='mobile-header'> 
                <div>
                    <img onClick={()=>{setMenubar(prev=> !prev)}} src='https://res.cloudinary.com/dx94215tz/image/upload/v1712512325/Group_48100065_1_qtvkb2.png' alt='menu-bar'/>
                    <img className='mobile-logo' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712412103/Vector_1_qg8d2m.png' alt='logo'/>

                </div>

                <div>
                        <h2> LOGO </h2>
                </div>

                <div>
                    <img src='https://res.cloudinary.com/dx94215tz/image/upload/v1712412033/search-normal_1_vlz4yn.png' alt='search'/>
                    <img src='https://res.cloudinary.com/dx94215tz/image/upload/v1712407202/heart_2_qq58py.png' alt='love'/>
                    <img src='https://res.cloudinary.com/dx94215tz/image/upload/v1712411928/shopping-bag_1_oe0b9k.png' alt='cart'/>
                </div>
                </div>
                {onMenubar&& 
                <div className='mobile-list'> 
                 <ul>
                    <li> HOME</li>
                    <li> SHOP </li>
                 </ul>
                </div>
                }

            </div>
            
            
         
        </>
    )
}

export default Header