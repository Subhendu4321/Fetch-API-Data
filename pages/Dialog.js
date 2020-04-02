import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import {MyContext} from './Profile';


export default function FormDialog() {
      const [open, setOpen] = useState(false);
      const [firstName,setFirstName] = useState(localStorage.getItem("firstName"));
      const [lastName,setLastName] = useState(localStorage.getItem("lastName"));
      const [phoneNumber,setPhoneNumber] = useState(localStorage.getItem("phoneNum"));
      const [email,setEmail] = useState(localStorage.getItem("email"));
      const [password,setPassword] = useState("");
      const [confirmPassword,setConfirmPassword] = useState("");
      const [city,setCity] = useState(localStorage.getItem("city"));
    
      const handleClickOpen = () => {
        setOpen(true);
      };
      // const handleClose = () => {
      //   props.onEdit()
      // };
     
      const handleFirstName = (e) => {
        setFirstName(e.target.value);
      };
  
      const handleLastNme = (e) => {
        setLastName(e.target.value);
      };
  
      const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
      };
  
      const handleEmail = (e) => {
        setEmail(e.target.value);
      };
      const handleCity = (e) => {
        setCity(e.target.value);
      };
  
      const handlePassword =(e) => {
        setPassword(e.target.value);
      };
  
      const handleConfirmPassword =  (e) => {
        setConfirmPassword(e.target.value);
      }
  
      const updateProfile = () =>{
          if (password === confirmPassword){
          alert("Profile Updated Successfully")
          localStorage.setItem("firstName",firstName);
          localStorage.setItem("lastName",lastName);
          localStorage.setItem("email",email);
          localStorage.setItem("password",password);
          localStorage.setItem("phoneNumber",phoneNumber);
          localStorage.setItem("city",city);
          // props.onEdit();
        }
        else{
          alert("Please Enter Correct Password");
        }
        
        // this.props.history.push("./userinfo")
      }
      
  
      // console.log(props)
  
  
    return (
      
      <MyContext.Consumer>
        {({isopen,onEdit}) =>(
          <div>
            <Dialog open={isopen} onClose={onEdit} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
            <DialogContent>
              
              <TextField
                autoFocus
                margin="dense"
                id="firstName"
                label="First Name"
                type="text"
                fullWidth
                value={firstName}
                onChange = {handleFirstName}
              />
              <TextField
                autoFocus
                margin="dense"
                id="lastName"
                label="Last Name"
                type="text"
                fullWidth
                value={lastName}
                onChange = {handleLastNme}
              />
              <TextField
                autoFocus
                margin="dense"
                id="phoneNumber"
                label="Phone Number"
                type="text"
                fullWidth
                value={phoneNumber}
                onChange = {handlePhoneNumber}
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="text"
                fullWidth
                value={email}
                onChange = {handleEmail}
              />
              <TextField
                autoFocus
                margin="dense"
                id="city"
                label="City"
                type="text"
                fullWidth
                value={city}
                onChange = {handleCity}
              />
              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                onChange = {handlePassword}
              />
              <TextField
                autoFocus
                margin="dense"
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
                onChange = {handleConfirmPassword}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={onEdit} color="primary">
                Cancel
              </Button>
              <Button onClick={updateProfile,onEdit} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          </div>
        )}
      </MyContext.Consumer>
      
    );
  }


  