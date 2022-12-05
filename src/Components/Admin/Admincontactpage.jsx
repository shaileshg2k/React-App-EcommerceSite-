import React from 'react'
import LeftNav from './LeftNav'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
export default function Admincontactpage() {
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
                    <h5 className='background text-center text-light p-2 mt-1'>Contact Us List</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Nitin Chauhan</td>
                                <td>vishankchauhan@gmail.com</td>
                                <td>9873848620</td>
                                <td>Active</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/1`} ><VisibilityIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(1)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Naveen</td>
                                <td>vishankchauhan1@gmail.com</td>
                                <td>9873848620</td>
                                <td>Active</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/2`} ><VisibilityIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(2)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>nitin</td>
                                <td>vishankchauhan2@gmail.com</td>
                                <td>9873848620</td>
                                <td>Done</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/3`}><VisibilityIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(3)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>nitin</td>
                                <td>vishankchauhan2@gmail.com</td>
                                <td>9873848620</td>
                                <td>Done</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/4`}><VisibilityIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(4)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>nitin</td>
                                <td>vishankchauhan2@gmail.com</td>
                                <td>9873848620</td>
                                <td>Done</td>
                                <td><Link className='btn text-primary' style={{border:"none"}} to={`/admin-single-contact/`}><VisibilityIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(5)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>


                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}
