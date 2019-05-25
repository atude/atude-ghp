import React from 'react';
import '../components/Components.css';
import { TextField, Button, InputAdornment, FormControl, Typography } from '@material-ui/core';
import { AccountBadgeHorizontal, Email } from 'mdi-material-ui';

class ContactForm extends React.Component {
  render() {    
    return(
    <form method="POST" action="https://formspree.io/mozamel.anwary1@gmail.com">
      <br/>
      <FormControl className="ContactForm" fullWidth>
        <TextField
          id="outlined-name-input"
          label="Name"
          name="name"
          ref="name"
          placeholder="Name/Company"
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBadgeHorizontal/>
              </InputAdornment>
            ),
          }}
        /> 
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          ref="email"
          placeholder="youremail@xyz.com"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email/>
              </InputAdornment>
            ),
          }}
        /> 
        <TextField
          id="outlined-subj-input"
          label="Subject"
          name="subject"
          ref="subject"
          margin="normal"
          variant="outlined"
        /> 
        <TextField
          id="outlined-message-input"
          multiline
          rows="6"
          label="Message"
          name="message"
          ref="message"
          margin="normal"
          variant="outlined"
        /> 
        <br/>
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
        <br/>
        <Typography variant="body1" 
        style={{textAlign: "center", fontSize: "10px", color: "#757575", position: "absolute", bottom: "0", right: "0"}}>
          Please verify after submitting
        </Typography>
      </FormControl>
    </form>
    );
  }
}

export default ContactForm;