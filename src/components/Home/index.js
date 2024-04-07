import {useState} from 'react'
import ProductsCard from '../ProductsCard'
import './index.css'

const Home = () => {

    const imgUrls = [
        {id: 1, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406953/Image_1_kpecnc.png'},
        {id: 2, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406998/Image_2_de0sk9.png'},
        {id: 3, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406809/img14_xiaozm.jpg'},
        {id: 4, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406809/img16_ytfksd.jpg'},
        {id: 5, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406823/img7_ur35b5.jpg'},
        {id: 6, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406823/img6_i9i74v.jpg'},
        {id: 7, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406817/img8_a00inf.jpg'},
        {id: 8, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406821/img9_jrorzv.jpg'},
        {id: 9, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406822/img10_xckwjp.jpg'},
        {id: 10, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406817/img11_lwtzpg.jpg'},
        {id: 11, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406821/img12_lnbyh9.jpg'},
        {id: 12, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406821/img13_mbermv.jpg'},
        {id: 13, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406809/img14_xiaozm.jpg'},
        {id: 14, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406810/img15_h7ex3y.jpg'},
        {id: 15, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406809/img16_ytfksd.jpg'},
        {id: 16, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406822/img10_xckwjp.jpg'},
        {id: 17, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406823/img7_ur35b5.jpg'},
        {id: 18, imgUrl: 'https://res.cloudinary.com/dx94215tz/image/upload/v1712406821/img13_mbermv.jpg'}
      ]

      const [isHidded , setHideStatus] = useState(true)
      const [isIdealFor, setIdealFor] = useState(true)
      const [isOccasion, setOccasion] = useState(false)
      const [isWork, setWork] = useState(false)
      const [isFabric, setFabric] = useState(false)
      const [isSegment, setSegment] = useState(false)
      const [isSuitable, setSutiable] = useState(false)
      const [isMaterial, setMaterial] = useState(false)
      const [isPattern, setPattern] = useState(false)

      const onHideClicks = () =>{
        setHideStatus((prveState=> !prveState))
      }

      const filterShow = () => {
        return(
            <div className='filters'>
                
                <input id='checkbox' type='checkbox' value='' />
                <label htmlFor='checkbox'> CUSTOMIZABLE </label>

                <>
                <div className='filter-heading'> 
                    <p> IDEAL FOR </p>
                    
                    {isIdealFor ? <img  onClick={()=>{ setIdealFor(prev=> !prev)}} className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430618/arrow-left_1_ob74le.jpg' alt='arrow-left'/> :
                    <img onClick={()=>{ setIdealFor(prev=> !prev)}}  className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430649/arrow-left_1_ac7gwv.jpg' alt='arrow-left'/>}
                    
                </div>
                <p> All </p>
                {isIdealFor ? <> 
                <p> Unselect all</p>

                <div>
                    <input id='men' type='checkbox' value=''/>
                    <label htmlFor='men'> MEN </label>
                </div>

                <div>
                    <input id='women' type='checkbox' value=''/>
                    <label htmlFor='women'> WOMEN </label>
                </div>

                <div>
                    <input id='baby' type='checkbox' value=''/>
                    <label htmlFor='baby'> BABY & KIDS </label>
                </div> </>: null}

                <hr/>

                </>

                <>
                <div className='filter-heading'> 
                    <p> OCCASION </p>
                    
                    {isOccasion ? <img  onClick={()=>{ setOccasion(prev=> !prev)}} className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430618/arrow-left_1_ob74le.jpg' alt='arrow-left'/> :
                    <img onClick={()=>{ setOccasion(prev=> !prev)}}  className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430649/arrow-left_1_ac7gwv.jpg' alt='arrow-left'/>}
                    
                </div>
                <p> All </p>
                {isOccasion ? <> 
                <p> Unselect all</p>

                <div>
                    <input id='men' type='checkbox' value=''/>
                    <label htmlFor='men'> MEN </label>
                </div>

                <div>
                    <input id='women' type='checkbox' value=''/>
                    <label htmlFor='women'> WOMEN </label>
                </div>

                <div>
                    <input id='baby' type='checkbox' value=''/>
                    <label htmlFor='baby'> BABY & KIDS </label>
                </div> </>: null}

                <hr/>

                </>

                <>
                <div className='filter-heading'> 
                    <p> WORK </p>
                    
                    {isWork ? <img  onClick={()=>{ setWork(prev=> !prev)}} className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430618/arrow-left_1_ob74le.jpg' alt='arrow-left'/> :
                    <img onClick={()=>{ setWork(prev=> !prev)}}  className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430649/arrow-left_1_ac7gwv.jpg' alt='arrow-left'/>}
                    
                </div>
                <p> All </p>
                {isWork ? <> 
                <p> Unselect all</p>

                <div>
                    <input id='men' type='checkbox' value='' />
                    <label htmlFor='men'> MEN </label>
                </div>

                <div>
                    <input id='women' type='checkbox' value=''/>
                    <label htmlFor='women'> WOMEN </label>
                </div>

                <div>
                    <input id='baby' type='checkbox' value=''/>
                    <label htmlFor='baby'> BABY & KIDS </label>
                </div> </>: null}

                <hr/>

                </>

                <>
                <div className='filter-heading'> 
                    <p> FABRIC </p>
                    
                    {isFabric ? <img  onClick={()=>{ setFabric(prev=> !prev)}} className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430618/arrow-left_1_ob74le.jpg' alt='arrow-left'/> :
                    <img onClick={()=>{ setFabric(prev=> !prev)}}  className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430649/arrow-left_1_ac7gwv.jpg' alt='arrow-left'/>}
                    
                </div>
                <p> All </p>
                {isFabric ? <> 
                <p> Unselect all</p>

                <div>
                    <input id='men' type='checkbox' value=''/>
                    <label htmlFor='men'> MEN </label>
                </div>

                <div>
                    <input id='women' type='checkbox' value=''/>
                    <label htmlFor='women'> WOMEN </label>
                </div>

                <div>
                    <input id='baby' type='checkbox' value=''/>
                    <label htmlFor='baby'> BABY & KIDS </label>
                </div> </>: null}

                <hr/>

                </>

                <>
                <div className='filter-heading'> 
                    <p> SEGMENT </p>
                    
                    {isSegment ? <img  onClick={()=>{ setSegment(prev=> !prev)}} className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430618/arrow-left_1_ob74le.jpg' alt='arrow-left'/> :
                    <img onClick={()=>{ setSegment(prev=> !prev)}}  className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430649/arrow-left_1_ac7gwv.jpg' alt='arrow-left'/>}
                    
                </div>
                <p> All </p>
                {isSegment ? <> 
                <p> Unselect all</p>

                <div>
                    <input id='men' type='checkbox' value=''/>
                    <label htmlFor='men'> MEN </label>
                </div>

                <div>
                    <input id='women' type='checkbox' value=''/>
                    <label htmlFor='women'> WOMEN </label>
                </div>

                <div>
                    <input id='baby' type='checkbox' value=''/>
                    <label htmlFor='baby'> BABY & KIDS </label>
                </div> </>: null}

                <hr/>

                </>

                <>
                <div className='filter-heading'> 
                    <p> SUITABLE FOR </p>
                    
                    {isSuitable ? <img  onClick={()=>{ setSutiable(prev=> !prev)}} className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430618/arrow-left_1_ob74le.jpg' alt='arrow-left'/> :
                    <img onClick={()=>{ setSutiable(prev=> !prev)}}  className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430649/arrow-left_1_ac7gwv.jpg' alt='arrow-left'/>}
                    
                </div>
                <p> All </p>
                {isSuitable ? <> 
                <p> Unselect all</p>

                <div>
                    <input id='men' type='checkbox' value='' />
                    <label htmlFor='men'> MEN </label>
                </div>

                <div>
                    <input id='women' type='checkbox' value=''/>
                    <label htmlFor='women'> WOMEN </label>
                </div>

                <div>
                    <input id='baby' type='checkbox' value=''/>
                    <label htmlFor='baby'> BABY & KIDS </label>
                </div> </>: null}

                <hr/>

                </>

                <>
                <div className='filter-heading'> 
                    <p> RAW MATERIALS </p>
                    
                    {isMaterial ? <img  onClick={()=>{ setMaterial(prev=> !prev)}} className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430618/arrow-left_1_ob74le.jpg' alt='arrow-left'/> :
                    <img onClick={()=>{ setMaterial(prev=> !prev)}}  className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430649/arrow-left_1_ac7gwv.jpg' alt='arrow-left'/>}
                    
                </div>
                <p> All </p>
                {isMaterial ? <> 
                <p> Unselect all</p>

                <div>
                    <input id='men' type='checkbox' value='' />
                    <label htmlFor='men'> MEN </label>
                </div>

                <div>
                    <input id='women' type='checkbox' value=''/>
                    <label htmlFor='women'> WOMEN </label>
                </div>

                <div>
                    <input id='baby' type='checkbox'  value=''/>
                    <label htmlFor='baby'> BABY & KIDS </label>
                </div> </>: null}

                <hr/>

                </>

                <>
                <div className='filter-heading'> 
                    <p> PATTERN </p>
                    
                    {isPattern ? <img  onClick={()=>{ setPattern(prev=> !prev)}} className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430618/arrow-left_1_ob74le.jpg' alt='arrow-left'/> :
                    <img onClick={()=>{ setPattern(prev=> !prev)}}  className='left-arrow' src='https://res.cloudinary.com/dx94215tz/image/upload/v1712430649/arrow-left_1_ac7gwv.jpg' alt='arrow-left'/>}
                    
                </div>
                <p> All </p>
                {isPattern ? <> 
                <p> Unselect all</p>

                <div>
                    <input id='men' type='checkbox' value=''/>
                    <label htmlFor='men'> MEN </label>
                </div>

                <div>
                    <input id='women' type='checkbox' value='' />
                    <label htmlFor='women'> WOMEN </label>
                </div>

                <div>
                    <input id='baby' type='checkbox' value='' />
                    <label htmlFor='baby'> BABY & KIDS </label>
                </div> </>: null}

                <hr/>

                </>
               
            </div>
        )
      }

    return(
        <>
        <div className='heading-section'> 
        <h1> DISCOVER OUR PRODUCTS </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
        </p>
        </div>

        <div className='filter-container'>
            <div className='hide-filter-cont'>
                <p > 3245 ITEMS</p>
                {isHidded ? <button onClick = {onHideClicks} className='btn-style hide-filter-text'> &lt; SHOW FILTERS </button> : 
                            <button onClick = {onHideClicks} className='btn-style hide-filter-text'> &lt; HIDE FILTERS </button>}
                
                
            </div>
            
            <div> 
             <select className='recomended'>
                <option selected> RECOMENDED  </option>
                <option> NEWEST FIRST</option>
                <option> POPULAR  </option>
                <option> PRICE: HIGH TO LOW </option>
                <option> PRICE: LOW TO HIGH </option>
             </select>
            </div>
            
        </div>

        <div className='filter-cont-mobile'>
            <div> <p> FILTER </p></div>
            <div>
            <select className='recomended-mobile'>
                <option  selected> RECOMENDED  </option>
                <option> NEWEST FIRST</option>
                <option> POPULAR  </option>
                <option> PRICE: HIGH TO LOW </option>
                <option> PRICE: LOW TO HIGH </option>
             </select>
                
            </div>


        </div>
         
        <div className='product-main-container'> 
        {!isHidded ? 
            <div className='products-cont'> 
            {filterShow()}
            <div className='items'>                 
            {imgUrls.map(eachItem => <ProductsCard  productDetails={eachItem} key={eachItem.id}/> )}
            </div> 
            </div>
             :  
             <div className='full-items'>                 
                {imgUrls.map(eachItem => <ProductsCard  productDetails={eachItem} key={eachItem.id}/> )}
            </div>}

            </div>   

        <div className='product-cont-mobile full-items'>
             
        {imgUrls.map(eachItem => <ProductsCard  productDetails={eachItem} key={eachItem.id}/> )}
        
        </div>           
           
        
        </>
    )
}

export default Home