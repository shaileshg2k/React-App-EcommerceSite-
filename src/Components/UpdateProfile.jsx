import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';
export default function UpdateProfile() {
    let [user, setuser] = useState({
        name: "",
        phone: "",
        email: "",
        addressline1: "",
        addressline2: "",
        addressline3: "",
        pin: "",
        city: "",
        state: "",
        pic:""

    })

    function getData(name, value) {
        setuser((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }
    function getFile(name, file) {
        setuser((oldData) => {
            return {
                ...oldData,
                [name]: file
            }
        })
    }

    function postData() {
       alert(
                `
                Name : ${user.name}
                Email : ${user.email}
                Phone : ${user.phone}
                Address Line1 : ${user.addressline1}
                Address Line2 : ${user.addressline2}
                Address Line3 : ${user.addressline3}
                Pin : ${user.pin}
                City : ${user.city}
                State : ${user.state}
                Pic : ${user.pic.name}
            `
            )
        }
       

    return (
        <Grid container spacing={2}>
            <Grid item md={2} xs={12}>
            </Grid>
            <Grid item md={8} xs={12}>
                <h5 className='background text-light text-center p-2 mt-1'>UpdateProfile</h5>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '99%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}
                        id="outlined-name-input"
                        label="Name"
                        type="text"
                        autoComplete='current-name'
                        placeholder='Enter Your Name'
                        name='name'
                    />

                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}
                        id="outlined-email-input"
                        label="email"
                        type="email"
                        autoComplete='current-email'
                        placeholder='Enter Your email'
                        name='email'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}

                        id="outlined-Phone-input"
                        label="Phone"
                        type="text"
                        autoComplete='current-Phone'
                        placeholder='Enter Your Phone'
                        name='phone'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}

                        id="outlined-Phone-input"
                        label="House Number Building Number"
                        type="text"
                        autoComplete='current-addressline1'
                        placeholder='House Number Building Number'
                        name='addressline1'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}

                        id="outlined-Phone-input"
                        label="Street no. or near By"
                        type="text"
                        autoComplete='current-addressline1'
                        placeholder='Street no. or near By'
                        name='addressline2'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}

                        id="outlined-Phone-input"
                        label="Village or Locality"
                        type="text"
                        autoComplete='current-address1'
                        placeholder='Village or Locality'
                        name='addressline3'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}

                        id="outlined-Phone-input"
                        label="Pincode"
                        type="text"
                        autoComplete='current-address1'
                        placeholder='Enter your Pincode'
                        name='pin'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}

                        id="outlined-Phone-input"
                        label='Enter your City Name'
                        type="text"
                        autoComplete='current-address3'
                        placeholder='Enter your City Name'
                        name='city'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}

                        id="outlined-Phone-input"
                        label="Enter your State"
                        type="text"
                        autoComplete='current-address3'
                        placeholder='Enter your State'
                        name='state'
                    />
                    <TextField
                        onChange={(e) => {
                            getFile(e.target.name, e.target.files[0])
                        }}

                        id="outlined-Pic-input"
                        label='Profile Picture'
                        type="file"
                        name='pic'
                    />


                    <Button variant="contained" className='background' onClick={postData}>Update</Button>
                    <Link href="/login" color="inherit" underline="none">Already Have An Account? Login</Link>

                </Box>
            </Grid>
            <Grid item md={2} xs={12}>
            </Grid>
        </Grid>
    )
}
