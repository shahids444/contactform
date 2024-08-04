import React, { useState, useEffect } from "react";
import "C:/html and css projecg/vite-project/build/css/demo.css";
import "C:/html and css projecg/vite-project/build/css/intlTelInput.css";
import "./App.css";
import { Form, useForm } from "react-hook-form"
import axios from 'axios';
import { Myform } from "./Myform";
const App = () => {
  return(
    <>
    {<Myform/>}

    </>
  )
};

export default App;
