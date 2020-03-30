import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
// import React,{useState} from 'react';


const useStyles = makeStyles(theme => ({
    Register:{
      backgroundColor: '#fff',
      minHeight: '381px',
      width: '400px',
      margin: '40px auto'
    },
    CardContent:{
        display: 'flex',
        justifyContent : 'center',
        flexDirection : 'column'
    },
    ButtonClass:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        
    },
    button: {
        margin:'10px'
       }
  }));


function Register(){
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phoneNum,setPhoneNum] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [city,setCity] = useState("");

    // const router = useRouter();
    const classes = useStyles();


    const doRegister = () => {
        if (password !== confirmPassword){
            alert("Pleaseenter correct Password");
        }
        else{
            alert("Registration successful");
            localStorage.setItem("firstName",firstName);
            localStorage.setItem("lastName",lastName);
            localStorage.setItem("phoneNum",phoneNum);
            localStorage.setItem("email",email);
            localStorage.setItem("password",password);
            localStorage.setItem("city",city);
            Router.push("/Profile")

            
        }

    };
    const doBack =() =>{
        Router.push("/Login");

    }
    return(
        <Card className={classes.Register}>
                <CardHeader className="header" title="Registration Page" titleTypographyProps="Registration Page">

                </CardHeader>

                <CardContent className={classes.CardContent}>
                    <TextField id="firstName" label="First Name" variant="outlined" color="primary" className="userid" style={{padding:9}}
                    onChange={event => setFirstName(event.target.value)}
                    
                    />
                    <TextField id="lastName" label="Last Name" variant="outlined" color="primary" className="password"style={{padding:9}}
                    onChange={event => setLastName(event.target.value)}
                    />
                    <TextField id="phoneNum" label="Phone Number" variant="outlined" color="primary" className="password"style={{padding:9}}
                    onChange={event => setPhoneNum(event.target.value)}
                    />
                    <TextField id="city" label="City" variant="outlined" color="primary" className="city"style={{padding:9}}
                    onChange={event => setCity(event.target.value)}
                    />
                    <TextField id="email_id" label="Email Id" variant="outlined" color="primary" className="userid" style={{padding:9}}
                    onChange={event => setEmail(event.target.value)}
                    />
                    <TextField type="password" id="Password" label="Password" variant="outlined" color="primary" className="password"style={{padding:9}}
                    onChange={event => setPassword(event.target.value)}
                    />
                    <TextField type="password" id="confirmPassword" label="Confirm Password" variant="outlined" color="primary" className="password"style={{padding:9}}
                    onChange={event => setConfirmPassword(event.target.value)}
                    />

                    <div className={classes.ButtonClass}>
                        <Button variant="contained" color="primary" className={classes.button} type="submit" style={{padding:9}} onClick={doRegister}>Register</Button>
                        <Button variant="contained" color="primary" className={classes.button} type="submit" style={{padding:9}} onClick={doBack}>Back</Button>
                    </div>


                    
                </CardContent>
                
    
            </Card>
    )
}


export default Register;