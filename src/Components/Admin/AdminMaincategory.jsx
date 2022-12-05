import React from 'react'
import LeftNav from './LeftNav'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
export default function AdminMaincategory() {
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
                    <h5 className='background text-center text-light p-2 mt-1'>Main Category List<Link  className='text-light' to='/admin-add-maincategory'><AddIcon/></Link></h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th></th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Male</td>
                               <td><Link className='btn text-primary' style={{border:"none"}}  to={`/admin-update-maincategory/${1}`} ><EditIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(1)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Femail</td>
                                <td><Link className='btn text-primary' style={{border:"none"}}  to={`/admin-update-maincategory/${2}`} ><EditIcon/></Link></td>
                               <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(2)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>kids</td>
                                <td><Link className='btn text-primary' style={{border:"none"}}  to={`/admin-update-maincategory/${3}`} ><EditIcon/></Link></td>
                               <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(3)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                           
                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}
