import React from 'react'
import LeftNav from './LeftNav'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
export default function Adminnewslatter() {
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
                    <h5 className='background text-center text-light p-2 mt-1'>Newslatter List</h5>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Email Id</th>
                                
                                <th></th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>vishankchauhan@gmail.com</td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(123)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>vishankchauhan1@gmail.com</td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(123)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>vishankchauhan2@gmail.com</td>
                                <td><button className='btn text-primary' style={{border:"none"}} onClick={()=>deleteRecord(123)}><DeleteForeverOutlinedIcon/></button></td>
                            </tr>


                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}
