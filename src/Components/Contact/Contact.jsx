import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Contact.css";
// import { useAlert } from "react-alert";
import { toast } from 'react-toastify';
import { contactUs } from "../../actions/user";

const Contact = () => {

  const toastOptions = {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  // const alert = useAlert();

  const {
    loading,
    message: alertMessage,
    error,
  } = useSelector((state) => state.update);

  const contactFormHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, toastOptions);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (alertMessage) {
      toast.success(alertMessage, toastOptions);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [toast, error, alertMessage, dispatch]);

  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form className="contactContainerForm" 
        onSubmit={contactFormHandler}
        >
          <Typography variant="h4">Contact Us</Typography>

          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit" 
          disabled={loading}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;