import React,{useState} from 'react'
import LeftNav from './LeftNav'
import { useParams } from 'react-router-dom'
export default function Adminsinglecontact() {
    var [status, setstatus] = useState("Active")
    var { _id } = useParams()
    function deleteRecord(_id) {
        alert("Deleted" + _id)
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
                                <td>1</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>Nitin Chauhan</td>
                            </tr>
                            <tr>
                                <th>Email Id</th>
                                <td>vishankchauhan@gmail.com</td>
                            </tr>

                            <tr>
                                <th>Phone</th>
                                <td>8975678522</td>
                            </tr>
                            <tr>
                                <th>Subject</th>
                                <td>This is Sample Subject</td>
                            </tr>
                            <tr>
                                <th>Message</th>
                                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nesciunt suscipit quia saepe maxime earum impedit eligendi ipsa dolorem mollitia, odit quos exercitationem iure dolor modi! Molestiae, modi mollitia exercitationem distinctio dicta quos delectus, illo, rem deleniti sunt at nobis sit! Magni dolores quisquam accusamus perferendis asperiores odio. Eos nihil harum quis voluptatibus numquam quo quia, ratione illum temporibus eligendi tenetur necessitatibus, vitae reiciendis sequi? Eveniet velit perferendis harum veritatis nesciunt cum aliquid quidem ut necessitatibus aperiam distinctio totam, consequuntur alias praesentium natus, dolorum libero provident asperiores. Iste porro natus quae minus animi explicabo similique, assumenda delectus enim unde deleniti?</td>
                            </tr>
                            <tr>
                                <th>Date</th>
                                <td>{new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}</td>
                            </tr>
                            <tr>
                                <th>Status</th>
                                <td>{status}</td>
                            </tr>
                            <tr>
                                {
                                    status === "Active" ?
                                        <th colSpan={2}><button className='btn background text-light btn-sm w-100' onClick={() => setstatus('Done')}>Change Status To Done</button></th>
                                        :
                                        <th colSpan={2}><button className='btn background text-light btn-sm w-100' onClick={() => setstatus('Done')}>Delete</button></th>
                                }

                            </tr>
                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}
