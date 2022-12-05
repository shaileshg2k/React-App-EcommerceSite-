import React from 'react'
import LeftNav from './LeftNav'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
export default function Adminusers() {
    function deleteRecord(_id){
        alert("Deleted"+_id)
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <LeftNav />
                </div>
                <div className='col-xl-10 col-lg-9 col-md-8 col-sm-6 col-12'>
                    <h5 className='background text-center text-light p-2 mt-1'>User List</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email Id</th>
                                <th>Phone</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Shailesh kumar Gupta</td>
                                <td>shailesh</td>
                                <td>guptashailesh2k@gmail.com</td>
                                <td>8318588544</td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(123)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>


                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}
