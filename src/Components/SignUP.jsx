import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, Link } from '@mui/material';
export default function SignUp() {
    let [register,setregister]=useState({
        name:"",
        username:"",
        phone:"",
        email:"",
        password:"",
        cpassword:""

    })

    function getData(name,value) {
        setregister((oldData) => {
            return {
                ...oldData,
                [name]:value
            }
        })
    }

    function postData(){
        if(register.password==register.cpassword){
        alert(
            `
                Name : ${register.name}
                User Name : ${register.username}
                Email : ${register.email}
                Phone : ${register.phone}
                Password : ${register.password}
            `
        )
        }
        else
            alert("Password and Confirm Password Doesn't Matched!!!!!!!")
    }
    
    
    // function postData(){
    //     if (register.password==register.cpassword){
    //     alert(
    //         `Name : ${register.name}
    //          User Name : ${register.username}
    //          Email : ${register.email}
    //          Phone : ${register.phone}
    //          Password : ${register.password}
    //         `
    //     )
    //     }
    //     else alert(
    //             "Password not Matched with confirm password" 
                
    //         )
        
    // }
    return (
        <Grid container spacing={2}>
            <Grid item md={2} xs={12}>
            </Grid>
            <Grid item md={8} xs={12}>
                <h5 className='background text-light text-center p-2 mt-1'>SignUP Section</h5>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '99%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                       onChange={(e)=>{
                                getData(e.target.name,e.target.value)
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
                        id="outlined-username-input"
                        label="UserName"
                        type="text"
                        autoComplete='current-UserName'
                        placeholder='Enter Your UserName'
                        name='username'
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
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete='current-password'
                        placeholder='Enter Your Password'
                        name='password'
                    />
                    <TextField
                        onChange={(e) => {
                            getData(e.target.name, e.target.value)
                        }}
                        id="outlined-Cpassword-input"
                        label="Confirm password"
                        type="password"
                        autoComplete='current-Cpassword'
                        placeholder='Confirm Password'
                        name='cpassword'
                    />

                    <Button variant="contained" className='background' onClick={postData}>SignUP</Button>
                    <Link href="/login" color="inherit" underline="none">Already Have An Account? Login</Link>

                </Box>
            </Grid>
            <Grid item md={2} xs={12}>
            </Grid>
        </Grid>
    )
}
