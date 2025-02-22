import React, { createContext, useState } from "react";
import { URL } from "../App";
import axios from "axios";

// Create a Context object
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [course, setCourse] = useState([]);
  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState([])

  // Listing all Notes
  const getNotes = async () => {
    try {
      const response = await axios.get(`${URL}/api/main/notes`);

      if (response.data.sucess) {
        setNotes(response.data.notes);
      } else {
        console.log("Fail to fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Courses Function
  const getCourses = async () => {
    try {
      const response = await axios.get(`${URL}/api/main/courses`);

      if (response.data.sucess) {
        setCourse(response.data.course)
        // console.log(response.data.course)
        // return await response.data.course;
      } else {
        console.log("Fail to fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const adminDetails = async () => {
    try {
      const response = await axios.get(`${URL}/api/main/adminDetails`);

      if (response.data.sucess) {
        console.log(response.data);
      } else {
        console.log("Fail to fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //getMessages
  const getMessage = async ()=>{
    try {
      const response = await axios.get(`${URL}/api/admin//getmsg`)
      setMessage(response.data.message)
    } catch (error) {
      console.log(error)
    }
  }

  const store = { isLogin, setIsLogin, getNotes, getCourses, adminDetails,course, notes, getMessage, message };

  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
};
