import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminAddbrand from './Admin/AdminAddbrand'
import AdminAddmaincategory from './Admin/AdminAddmaincategory'
import AdminAddproduct from './Admin/AdminAddproduct'
import AdminAddsubcategory from './Admin/AdminAddsubcategory'
import Adminbrand from './Admin/Adminbrand'
import Admincheckoutpage from './Admin/Admincheckoutpage'
import Admincontactpage from './Admin/Admincontactpage'
import AdminHome from './Admin/AdminHome'
import AdminMaincategory from './Admin/AdminMaincategory'
import Adminnewslatter from './Admin/Adminnewslatter'
import Adminproduct from './Admin/Adminproduct'
import Adminsinglecheckout from './Admin/Adminsinglecheckout'
import Adminsinglecontact from './Admin/Adminsinglecontact'
import Adminsubcategory from './Admin/Adminsubcategory'
import AdminUpdatebrand from './Admin/AdminUpdatebrand'
import AdminUpdatemaincategory from './Admin/AdminUpdateMainctegory'
import AdminUpdateproduct from './Admin/AdminUpdateproduct'
import AdminUpdatesubcategory from './Admin/AdminUpdatesubctegory'
import AdminUsers from './Admin/AdminUsers'
import Cart from './Cart'
import Checkout from './Checkout'
import ContactPage from './ContactPage'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'

import Navbar from './Navbar'
import Profile from './Profile'
import Shop from './Shop'
import SignUP from './SignUP'
import SingleProductPage from './SingleProductPage'
import UpdateProfile from './UpdateProfile'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:mc/:sc/:br" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUP />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/single-product-page/:_id' element={<SingleProductPage />} />
          <Route path='/cart' element={<Cart />} />
        <Route path='/update-profile' element={<UpdateProfile/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/contactpage' element={<ContactPage/>}></Route>
        
        
        <Route path='/admin-home' element={<AdminHome/>}></Route>
        <Route path='/admin-users' element={<AdminUsers/>}></Route>
        <Route path='/admin-maincategory' element={<AdminMaincategory/>}></Route>
        <Route path='/admin-add-maincategory' element={<AdminAddmaincategory/>}></Route>
        <Route path='/admin-update-maincategory/:_id' element={<AdminUpdatemaincategory/>}></Route>
        <Route path='/admin-subcategory' element={<Adminsubcategory/>}></Route>
        <Route path='/admin-add-subcategory' element={<AdminAddsubcategory/>}></Route>
        <Route path='/admin-update-subcategory/:_id' element={<AdminUpdatesubcategory/>}></Route>
        <Route path='/admin-brand' element={<Adminbrand/>}></Route>
        <Route path='/admin-add-brand' element={<AdminAddbrand/>}></Route>
        <Route path='/admin-update-brand/:_id' element={<AdminUpdatebrand/>}></Route>
        <Route path='/admin-products' element={<Adminproduct/>}></Route>
        <Route path='/admin-add-products' element={<AdminAddproduct/>}></Route>
        <Route path='/admin-update-products/:_id' element={<AdminUpdateproduct/>}></Route>
        <Route path='//admin-newslatter' element={<Adminnewslatter/>}></Route>
        <Route path='//admin-contact' element={<Admincontactpage/>}></Route>
        <Route path='//admin-single-contact/:_id' element={<Adminsinglecontact/>}></Route>
        <Route path='//admin-single-checkout/:_id' element={<Adminsinglecheckout/>}></Route>
        <Route path='//admin-checkout/' element={<Admincheckoutpage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
