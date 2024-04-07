import { useState } from 'react'
import './index.css'
const Footer = () => {

    const [onMetaMuse, setMetamuse] = useState(false)
    const [onQuicklinks, setQuicklinks] = useState(false)
    const [onFollowus, setFollowus] = useState(false)

    return(
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-1'> 
                    <h3> BE THE FIRST TO KNOW  </h3>
                    <p> Sign up for updates from metta muse.</p>
                    <input type='text' placeholder='Enter your e-mail...'/>
                    <button className='subscribe' > SUBSCRIBE </button>
                    
                </div>
                <div  className='footer-top-2'> 
                    <h3> CONTACT US</h3>
                    <p> +44 123 456 1234</p>
                    <p> customorcare@mettamuse.com</p>
                    <h3> CURRENCY </h3>
                    <div className='usa-logo'> 
                        <img src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508748/United_States_of_America__US_1_z0jwz7.png' alt='usa'/>
                        <p> +USD </p>
                    </div>
                    <p> Transactions  will be completed in Euros and a currency refernce is avialble on hover</p>

                </div>

                <div className='footer-top-2-mobile'>
                    <hr></hr>
                    <h3> CALL US </h3>
                    <p> +44 123 456 1234 customorcare@mettamuse.com </p>
                    <hr></hr>
                    <h3> CURRENCY </h3>
                    <div className='usa-logo'> 
                        <img src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508748/United_States_of_America__US_1_z0jwz7.png' alt='usa'/>
                        <p> +USD </p>
                    </div>
                     

                </div>
                
            </div>
            <hr/>

            <div className='footer-bottom'>
                <div className='footer-bottom-1'> 
                    <h2> metta muse </h2>
                    <p> About Us </p>
                    <p> Stories </p>
                    <p> Artisanas</p>
                    <p> Boutiques </p>
                    <p> Conatct Us  </p>
                    <p> EU Compliances Docs</p>
                
                </div>

                <div className='footer-bottom-1-mobile'> 
                    <div className='display-footer'> 
                        <h2> metta muse </h2>
                        {!onMetaMuse ? 
                        <img onClick={()=>setMetamuse(prev=>!prev)} src= 'https://res.cloudinary.com/dx94215tz/image/upload/v1712430649/arrow-left_1_ac7gwv.jpg' alt='arrow'/> :
                        <img onClick={()=>setMetamuse(prev=>!prev)} src= 'https://res.cloudinary.com/dx94215tz/image/upload/v1712430618/arrow-left_1_ob74le.jpg' alt='arrow'/> }
                        
                        
                    </div>
                    {onMetaMuse && <div>
                        <p> About Us </p>
                        <p> Stories </p>
                        <p> Artisanas</p>
                        <p> Boutiques </p>
                        <p> Conatct Us  </p>
                        <p> EU Compliances Docs</p>
                        </div>}
                        <hr></hr>
                </div>

                


                <div className='footer-bottom-2'> 
                    <h2> QUICK LINKS </h2>
                    <p> Orders & Shipping </p>
                    <p> Join/Login as a Seller </p>
                    <p> Payments & Pricing </p>
                    <p> Returns & Refunds </p>
                    <p> FAQs </p>
                    <p> Privay & Policy</p>
                    <p> Terms & Conditions </p>
                
                </div>


                <div className='footer-bottom-2-mobile'> 
                <div className='display-footer'> 
                        <h2> QUICK LINKS </h2>
                        {!onQuicklinks ? 
                        <img onClick={()=>setQuicklinks(prev=>!prev)} src= 'https://res.cloudinary.com/dx94215tz/image/upload/v1712430649/arrow-left_1_ac7gwv.jpg' alt='arrow'/> :
                        <img onClick={()=>setQuicklinks(prev=>!prev)} src= 'https://res.cloudinary.com/dx94215tz/image/upload/v1712430618/arrow-left_1_ob74le.jpg' alt='arrow'/> }
                        
                        
                    </div>
                    
                    {onQuicklinks && <div>
                        <p> Orders & Shipping </p>
                        <p> Join/Login as a Seller </p>
                        <p> Payments & Pricing </p>
                        <p> Returns & Refunds </p>
                        <p> FAQs </p>
                        <p> Privay & Policy</p>
                        <p> Terms & Conditions </p>
                        </div>}
                        <hr></hr>
                
                </div>




                <div className='footer-bottom-3'> 
                    <h2> FOLLOW US </h2>
                    <img alt='insta' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712509168/Insta_1_ntf7nc.png'/>
                    <img alt='twitter' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712509151/a_1_ld7eyg.png'/>
                    <h3> metta muse ACCEPTS </h3>
                    <img className='card' alt= 'card' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508819/Group_136188_1_yw7z5i.png'/>
                    <img className='card' alt= 'card' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508842/Group_136190_1_iroett.png'/>
                    <img className='card' alt= 'card' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508864/Group_136192_1_henihu.png'/>
                    <img className='card' alt= 'card' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508887/Group_136193_1_yvfrcd.png'/>
                    <img className='card' alt= 'card' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508919/Group_136194_1_jdwbry.png'/>
                    <img className='card' alt= 'card' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508928/Group_136195_1_ku5sxl.png'/>
                
                </div>

                <div className='footer-bottom-3-mobile'> 
                    <div className='display-footer'>
                    <h2> FOLLOW US </h2>
                    {!onFollowus ? 
                        <img onClick={()=>setFollowus(prev=>!prev)} src= 'https://res.cloudinary.com/dx94215tz/image/upload/v1712430649/arrow-left_1_ac7gwv.jpg' alt='arrow'/> :
                        <img onClick={()=>setFollowus(prev=>!prev)} src= 'https://res.cloudinary.com/dx94215tz/image/upload/v1712430618/arrow-left_1_ob74le.jpg' alt='arrow'/> }
                    
                    </div>
                    {onFollowus && <> 
                        <img alt='insta' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712509168/Insta_1_ntf7nc.png'/>
                        <img alt='twitter' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712509151/a_1_ld7eyg.png'/>
                    </>}
                    <hr></hr>

                    <h3> metta muse ACCEPTS </h3>
                    <img className='card' alt= 'card' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508819/Group_136188_1_yw7z5i.png'/>
                    <img className='card' alt= 'card' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508842/Group_136190_1_iroett.png'/>
                    <img className='card' alt= 'card' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508864/Group_136192_1_henihu.png'/>
                    <img className='card' alt= 'card' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508887/Group_136193_1_yvfrcd.png'/>
                    <img className='card' alt= 'card' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508919/Group_136194_1_jdwbry.png'/>
                    <img className='card' alt= 'card' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712508928/Group_136195_1_ku5sxl.png'/>
                
                </div>
                 
            </div>
            <p className='copy-rights'> Copyright © 2024 mettamuse. All rights reserved. </p>
        </div>
    )

}

export default Footer
