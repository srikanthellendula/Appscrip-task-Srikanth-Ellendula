import './index.css'

const ProductsCard = (props) => {
    const {productDetails} = props


    return(
        
        <div  className='img-cont'>             
            <img className='img-properties' src={productDetails.imgUrl} alt='img' />             
            <div className='product-text'> 
                <div className='product-heart'> 
                    <p> PRODUCT NAME  </p>
                    <img src='https://res.cloudinary.com/dx94215tz/image/upload/v1712407202/heart_2_qq58py.png' alt='heart' />
                </div>               
                <p> <a className='sign-in' href='#'> Sign in </a>  or  Create an acccount for pricing</p> 
            </div>
        </div>
    )
}

export default ProductsCard