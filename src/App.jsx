import React, { useState, useEffect } from "react";
import "../build/css/demo.css";
import "../build/css/intlTelInput.css";
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
