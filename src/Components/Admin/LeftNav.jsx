import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftNav() {
    return (
        <>
            <div class="list-group">
                <h5 className='background text-light text-center p-2 mt-1'> Menu</h5>
                <Link to="/admin-home" class="list-group-item list-group-item-action background text-light ">Home</Link>
                <Link to="/admin-users" class="list-group-item list-group-item-action background text-light ">User list</Link>
                <Link to="/admin-maincategory" class="list-group-item list-group-item-action background text-light ">Maincategory</Link>
                <Link to="/admin-subcategory" class="list-group-item list-group-item-action background text-light ">Subcategory</Link>
                <Link to="/admin-brand" class="list-group-item list-group-item-action background text-light ">Brands</Link>
                <Link to="/admin-products" class="list-group-item list-group-item-action background text-light ">Products</Link>
                <Link to="/admin-checkout" class="list-group-item list-group-item-action background text-light ">Checkout</Link>
                <Link to="/admin-contact" class="list-group-item list-group-item-action background text-light ">Contact</Link>
                <Link to="/admin-newslatter" class="list-group-item list-group-item-action background text-light ">Newslatter</Link>
                
             </div>
        </>
    )
}
