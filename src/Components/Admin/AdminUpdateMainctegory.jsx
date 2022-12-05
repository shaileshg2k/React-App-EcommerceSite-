import React, { useState } from 'react'
import LeftNav from './LeftNav'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function AdminUpdatemaincategory() {
    var [name, setname] = useState("")
    var navigate = useNavigate()
    var {_id}= useParams()
    function getData(e) {
        setname(e.target.value)
    }
    function postData(e) {
        e.preventDefault()
        alert("Name :" + name)
        navigate("/admin-maincategory")
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-center text-light p-2 mt-1'>Update MainCategory Page</h5>
                    <form onSubmit={postData}>
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control" placeholder='Enter the Maincategory' name='name' value={name} onChange={getData} />
                        </div>
                        <button type="submit" className='btn background text-light w-100'>Add</button>
                    </form>

                </div>

            </div>
        </div>
    )
}
