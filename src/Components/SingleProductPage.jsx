import React, { useContext } from 'react'
import Grid from '@mui/material/Grid';

import { ProductContext } from '../Store/ProductContext';
import Carousel from 'react-material-ui-carousel'
import { Link, useParams } from "react-router-dom"
import { Box } from '@mui/system';
import { Paper } from '@mui/material'
import { CartContext } from '../Store/CartContex';
import {WishlistContext} from '../Store/WishlistContex';
export default function SingleProductPage() {
    var product = useContext(ProductContext)
    var { cartdispatch } = useContext(CartContext)
    var {wishlistdispatch} = useContext(WishlistContext)
    var { _id } = useParams()
    product = product.find((item) => item._id === parseInt(_id))


    var items = [
        {
            pic: product.pic1
        },
        {
            pic: product.pic2
        },
        {
            pic: product.pic3
        },
        {
            pic: product.pic4
        },

    ]
    function Item(props) {
        return (
            <Paper>
                <img src={props.item.pic} width="100%" height="500px" />
            </Paper>
        )
    }

    return (
        <div className='container-fluid mt-1'>
            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Carousel>
                            {
                                items.map((item, index) => <Item key={index} item={item} />)
                            }
                        </Carousel>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <h5 className='background text-light text-center p-2'>Product Details</h5>
                        <div className='table-responsive'>
                            <table className='table table-scriped table-hover'>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>{product.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Maincategory</th>
                                        <td>{product.maincategory}</td>
                                    </tr>
                                    <tr>
                                        <th>Subcategory</th>
                                        <td>{product.subcategory}</td>
                                    </tr>
                                    <tr>
                                        <th>Brand</th>
                                        <td>{product.brand}</td>
                                    </tr>
                                    <tr>
                                        <th>Base Price</th>
                                        <td>&#8377;{product.baseprice}</td>
                                    </tr>
                                    <tr>
                                        <th>Discount</th>
                                        <td>{product.discount}</td>
                                    </tr>
                                    <tr>
                                        <th>finalprice</th>
                                        <td>{product.finalprice}</td>
                                    </tr>
                                    <tr>
                                        <th>Color</th>
                                        <td>{product.color}</td>
                                    </tr>
                                    <tr>
                                        <th>Size</th>
                                        <td>{product.size}</td>
                                    </tr>
                                    <tr>
                                        <th>Description</th>
                                        <td>{product.description}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link to="/cart" className='btn background text-light text-center ' style={{ width: "49%" }} onClick={() => { cartdispatch({ type: "ADD_TO_CART", product: product }) }}>Add to Cart</Link>
                            <Link to="/profile" className='btn background text-light text-center ' style={{ width: "49%" }} onClick={() => { wishlistdispatch({ type: "ADD_TO_WISHLIST", product: product }) }} >Add to Wishlist</Link>

                        </div></Grid>
                </Grid>
            </Box>
        </div >
    )
}
