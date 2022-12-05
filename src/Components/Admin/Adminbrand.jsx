import React from 'react'
import LeftNav from './LeftNav'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
export default function Adminbrand() {
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
                    <h5 className='background text-center text-light p-2 mt-1'>Brand List<Link  className='text-light' to='/admin-add-brand'><AddIcon/></Link></h5>
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
                                <td>Adidas</td>
                               <td><Link className='btn text-primary' style={{border:"none"}}  to={`/admin-update-brand/${1}`} ><EditIcon/></Link></td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(1)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mufti</td>
                                <td><Link className='btn text-primary' style={{border:"none"}}  to={`/admin-update-brand/${2}`} ><EditIcon/></Link></td>
                               <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(2)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Nike</td>
                                <td><Link className='btn text-primary' style={{border:"none"}}  to={`/admin-update-brand/${3}`} ><EditIcon/></Link></td>
                               <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(3)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Tommy Hilfigure</td>
                                <td><Link className='btn text-primary' style={{border:"none"}}  to={`/admin-update-brand/${4}`} ><EditIcon/></Link></td>
                               <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(4)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Gucci</td>
                                <td><Link className='btn text-primary' style={{border:"none"}}  to={`/admin-update-brand/${5}`} ><EditIcon/></Link></td>
                               <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(5)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Zara</td>
                                <td><Link className='btn text-primary' style={{border:"none"}}  to={`/admin-update-brand/${6}`} ><EditIcon/></Link></td>
                               <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(6)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            
                           
                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}
