import React from 'react'
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    // ProductButton,
}from './Productsele';
import {productData} from '../Products/prodata'

const Products = ({ heading}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {productData.map((product,index)=>{
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                {/* <ProductButton>{product.button}</ProductButton> */}
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
            
        </ProductsContainer>
    )
}

export default Products
