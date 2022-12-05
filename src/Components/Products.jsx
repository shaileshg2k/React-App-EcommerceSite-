import React, { useContext } from 'react'
import { ProductContext } from '../Store/ProductContext'
import Grid from '@mui/material/Grid';
import ProductItem from './ProductItem';
export default function Products(props) {
  var products = useContext(ProductContext)
  if (props.mc==="All" && props.sc==="All" && props.br==="All") {} 
  else if (props.mc!=="All" && props.sc==="All" && props.br==="All")
    products=products.filter((item)=>item.maincategory===props.mc) 
  
  else if (props.mc==="All" && props.sc!=="All" && props.br==="All")
    products=products.filter((item)=>item.subcategory===props.sc) 
  
  else if (props.mc==="All" && props.sc==="All" && props.br!=="All")
    products=products.filter((item)=>item.brand===props.br) 
  
  else if (props.mc!=="All" && props.sc!=="All" && props.br==="All")
    products=products.filter((item)=>item.maincategory===props.mc && item.subcategory===props.sc) 
  
  else if (props.mc!=="All" && props.sc==="All" && props.br!=="All")
    products=products.filter((item)=>item.maincategory===props.mc && item.brand===props.br) 
  
  else if (props.mc==="All" && props.sc!=="All" && props.br!=="All")
    products=products.filter((item)=>item.subcategory===props.sc && item.brand===props.br) 
  
  else 
   products=products.filter((item)=>item.maincategory===props.mc && item.subcategory===props.sc && item.brand===props.br) 
  
 
  return (
        <Grid container spacing={2}>
            {
                products.map((item, index) => {
                    return <Grid key={index} item xxl={2} xl={2} lg={3} md={4} sm={6} xs={12}>
                        <ProductItem 
                            name={item.name}
                            pic={item.pic1}
                            baseprice={item.baseprice}
                            discount={item.discount}
                            finalprice={item.finalprice}
                            _id={item._id}
                        />
                    </Grid>
                })
            }

        </Grid>
    )
}
