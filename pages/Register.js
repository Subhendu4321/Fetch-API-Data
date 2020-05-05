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
    },
    Header :{
        backgroundColor:'#00FFFF'
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

    const [firstNameError,setFirstNameError] = useState("");
    const [lastNameError,setLastNameError] = useState("");
    const [phoneNumError,setPhoneNumError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [confirmPasswordError,setConfirmPasswordError] = useState("");
    const [cityError,setCityError] = useState("");


    // const router = useRouter();
    const classes = useStyles();

    const valid = () =>{
        
        if(phoneNum.length !== 10){
            setPhoneNumError("Invalid Phone Number")
            
        }
        if(password.length < 5){
            
            setPasswordError("Password length should greater than 5 digit")
        }
        if(!(email.includes("@")) && !(email.includes(".com"))){
            setEmailError("Invalid Email Address")
            
        }
        if(password !== confirmPassword){
            setConfirmPasswordError("Enter correct password")
        }
    }


    const doRegister = () => {
        
        setPasswordError(""),
        setConfirmPasswordError(""),
        setEmailError(""),
        setPhoneNumError("");
        if (valid()){
            alert("Registration Successful");
            localStorage.setItem("firstName",firstName);
            localStorage.setItem("lastName",lastName);
            localStorage.setItem("phoneNum",phoneNum);
            localStorage.setItem("email",email);
            localStorage.setItem("password",password);
            localStorage.setItem("city",city);
            Router.push("/Profile")

        }

    };
    // const doRegister = () => {
    //     if (password !== confirmPassword){
    //         alert("Pleaseenter correct Password");
    //     }
    //     else{
    //         alert("Registration successful");
            // localStorage.setItem("firstName",firstName);
            // localStorage.setItem("lastName",lastName);
            // localStorage.setItem("phoneNum",phoneNum);
            // localStorage.setItem("email",email);
            // localStorage.setItem("password",password);
            // localStorage.setItem("city",city);
            // Router.push("/Profile")

            
    //     }

    // };
    const doBack =() =>{
        Router.push("/Login");

    }
    return(
        <Card className={classes.Register}>
                <CardHeader className={classes.Header} title="Registration Page" titleTypographyProps="Registration Page">

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
                    <p style={{color:"red",fontSize:"15px"}}>{phoneNumError}</p>
                    <TextField id="city" label="City" variant="outlined" color="primary" className="city"style={{padding:9}}
                    onChange={event => setCity(event.target.value)}
                    />
                    <p style={{color:"red",fontSize:"15px"}}>{cityError}</p>
                    <TextField id="email_id" label="Email Id" variant="outlined" color="primary" className="userid" style={{padding:9}}
                    onChange={event => setEmail(event.target.value)}
                    />
                    <p style={{color:"red",fontSize:"15px"}}>{emailError}</p>
                    <TextField type="password" id="Password" label="Password" variant="outlined" color="primary" className="password"style={{padding:9}}
                    onChange={event => setPassword(event.target.value)}
                    />
                    <p style={{color:"red",fontSize:"15px"}}>{passwordError}</p>
                    <TextField type="password" id="confirmPassword" label="Confirm Password" variant="outlined" color="primary" className="password"style={{padding:9}}
                    onChange={event => setConfirmPassword(event.target.value)}
                    />
                    <p style={{color:"red",fontSize:"15px"}}>{confirmPasswordError}</p>

                    <div className={classes.ButtonClass}>
                        <Button variant="contained" color="primary" className={classes.button} type="submit" style={{padding:9}} onClick={doRegister}>Register</Button>
                        <Button variant="contained" color="primary" className={classes.button} type="submit" style={{padding:9}} onClick={doBack}>Back</Button>
                    </div>


                    
                </CardContent>
                
    
            </Card>
    )
}


export default Register;