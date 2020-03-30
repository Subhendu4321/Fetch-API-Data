import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import FormDialog from './Dialog';
import fetch from 'isomorphic-unfetch';




const useStyles = makeStyles(theme => ({
    Profile:{
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


function Profile(props){

    const [isopen,setIsopen] = useState(false);

    const classes = useStyles();

    const getName = () =>{
        const fullName= localStorage.getItem("firstName") +" " +localStorage.getItem("lastName");
        return fullName;

    };
    const doBack = () =>{
        Router.push("/Login");;

    };
    const doEdit =() =>{
        setIsopen(!isopen);
    }


    return(
        <Card className={classes.Profile}>
                <CardHeader className="header" title="Profile Page" titleTypographyProps="Profile Page">
                

                </CardHeader>
                    <CardContent className={classes.CardContent}>
                        <TextField id="Name" label="Name" variant="outlined" color="primary" className="userid" style={{padding:9}}
                        value={getName()}
                        />
                        
                        <TextField id="phoneNum" label="Phone Number" variant="outlined" color="primary" className="password"style={{padding:9}}
                        value={localStorage.getItem("phoneNum")}
                        />
                        <TextField id="email_id" label="Email Id" variant="outlined" color="primary" className="email_id" style={{padding:9}}
                        value = {localStorage.getItem("email")}
                        />
                        <TextField id="city" label="City" variant="outlined" color="primary" className="city"style={{padding:9}}
                        value={localStorage.getItem("city")}
                        />
                        <TextField id="temperature" label="Temperature" variant="outlined" color="primary" className="temperature" style={{padding:9}}
                        value = {props.data.main.temp}
                        />

                        <div className={classes.ButtonClass}>
                            <Button variant="contained" color="primary" className={classes.button} type="submit" style={{padding:9}} onClick={doBack}>Back</Button>
                        
                        </div>
                        <div className={classes.ButtonClass}>
                            <Button variant="contained" color="primary" className={classes.button} type="submit"  style={{padding:9}} onClick={doEdit}>Edit</Button>
                        
                        </div>
                        
                    </CardContent>
                    <FormDialog  isopen={isopen} onEdit={doEdit}/>


                
                {/* <FormDialog />  */}

            </Card>

    )
}

Profile.getInitialProps = async function() {
    
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem("city")}&units=metric&appid=aa15c148a913c793fb9cc2ab3244a069`);
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
    console.log("data",data);
  
    return {
      data
    };
  };

export default Profile;