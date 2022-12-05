import React, { useState } from 'react'
import LeftNav from './LeftNav'
import { useNavigate } from 'react-router-dom'
export default function AdminAddproducts() {
    var [product, setproduct] = useState({
        name:"",
        maincategory:"Male",
        subcategory:"Jeans",
        brand:"Nike",
        stock:"In Stock",
       color:"",
       size:"",
       baseprice:"",
       discount:"",
       finalprice:"",
       describe:"this is sample product",
       pic1:"",
       pic2:"",
       pic3:"",
       pic4:"", 

    })
    var navigate = useNavigate()
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setproduct((old)=>{
            return{
                ...old,
                [name]:value
            }
        })

    }
    function getFile(e) {
        var name = e.target.name
        var value = e.target.files[0]
        setproduct((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        product.finalprice=product.baseprice-product.baseprice*product.discount/100
        alert(`
        Name:${product.name}
        Maincategory:${product.maincategory}
        Subcategory:${product.subcategory}
        Brand:${product.brand}
        Stock:${product.stock}
        Color:${product.color}
        Size:${product.size}
        BasePrice:${product.baseprice}
        Discount:${product.discount}
        FinalPrice:${product.finalprice}
        Description:${product.description}
        Pic1:${product.pic1}
        Pic2:${product.pic2}
        Pic3:${product.pic3}
        Pic4:${product.pic4}
       
        `)
        navigate("/admin-products")
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-center text-light p-2 mt-1'>Add Products Page</h5>
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder='Enter the products' name='name' onChange={getData} />
                        </div>
                        <div className='row mb-3'>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">MainCategory</label>
                                <select name='maincategory' onChange={getData} className="form-select">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Kids">Kids</option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">SubCategory</label>
                                <select name='subcategory' onChange={getData} className="form-select">
                                    <option value="Jeans">Jeans</option>
                                    <option value="T-Shirt">T-Shirt</option>
                                    <option value="Shirt">Shirt</option>
                                    <option value="Trouser">Trouser</option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Brand</label>
                                <select name='brand' onChange={getData} className="form-select">
                                    <option value="Nike">Nike</option>
                                    <option value="Adidas">Adidas</option>
                                    <option value="Mufti">Mufti</option>
                                    <option value="Gucci">Gucci</option>
                                    <option value="Tommy Hilefigure">Tommy Hilefigure</option>
                                    <option value="Zara">Zara</option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Stock</label>
                                <select name='stock' onChange={getData} className="form-select">
                                    <option value="In Stock">In Stock</option>
                                    <option value="Out of Stock">Out of Stock</option>

                                </select>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col-sm-6 col-12">
                                <label className="form-label">Color</label>
                                <input type="text" className="form-control" placeholder='Enter the product color' name='color' onChange={getData} />
                            </div>
                            <div className="col-sm-6 col-12">
                                <label className="form-label">Size</label>
                                <input type="text" className="form-control" placeholder='Enter the product Size' name='size' onChange={getData} />
                            </div>
                            <div className="col-sm-6 col-12">
                                <label className="form-label">Base Price</label>
                                <input type="number" className="form-control" placeholder='Enter the product base price' name='baseprice' onChange={getData} />
                            </div>
                            <div className="col-sm-6 col-12">
                                <label className="form-label">Discount</label>
                                <input type="number" min={0} className="form-control" placeholder='Enter the Product Discount on Base Price' name='discount' onChange={getData} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descption</label>
                            <textarea type="text" className="form-control" placeholder='Enter Description' name='description' rows={5} onChange={getData} />
                        </div>
                        <div className='row mb-3'>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Pic1</label>
                                <input type="file" className="form-control"  name='pic1' onChange={getFile} />
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Pic2</label>
                                <input type="file" className="form-control"  name='pic2' onChange={getFile} />
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Pic3</label>
                                <input type="file" className="form-control"  name='pic3' onChange={getFile} />
                            </div>
                            <div className="col-md-3 col-sm-6 col-12">
                                <label className="form-label">Pic4</label>
                                <input type="file" className="form-control"  name='pic4' onChange={getFile} />
                            </div>
                        </div>
                        <button type="submit" className='btn background text-light w-100'>Add</button>
                    </form>

                </div>

            </div>
        </div>
    )
}
