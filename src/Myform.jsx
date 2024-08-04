import React, { useState, useEffect } from "react";
import "C:/html and css projecg/vite-project/build/css/demo.css";
import "C:/html and css projecg/vite-project/build/css/intlTelInput.css";
import "./App.css";
import { Form, useForm } from "react-hook-form"
import axios from 'axios';
export const Myform = () => {
    const [formData, setFormData] = useState({
        Company: "",
        Fullname: "",
        Workemail: "",
        description: "",
        phone: "",
      });
      const handleClick = () => {
    
        window.location.href = "tel:+91996678945";
      };
      useEffect(() => {
        const loadScript = (src, onLoad) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          script.onload = onLoad;
          document.body.appendChild(script);
        };
    
        loadScript("./build/js/intlTelInput.js", () => {
          const input = document.querySelector("#phone");
          if (input) {
            window.intlTelInput(input, {});
          }
        });
      }, []);
    
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const [message, setMessage] = useState(false);

      const onSubmit = async (data) => {
        try {
          // Send the data to the backend
          const response = await axios.post('https://backend-1s67.onrender.com/api/form/submit', data);
          console.log(data);
          console.log(response.data);
          
          // Set success message
          alert("Details submitted successfully")
        } catch (error) {
          console.error('Error submitting form data', error);
          
          // Set failure message
          alert("Details submitted successfully")
        }
      };
      return (
      <>
      <div className="container">
      <div className="left-column">
        <div className="highlight">
          <div className="text-with-svg">
            <svg
              data-name="Layer 1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21,4H18V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V4H3A1,1,0,0,0,2,5V8a4,4,0,0,0,4,4H7.54A6,6,0,0,0,11,13.91V16H10a3,3,0,0,0-3,3v2a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19a3,3,0,0,0-3-3H13V13.91A6,6,0,0,0,16.46,12H18a4,4,0,0,0,4-4V5A1,1,0,0,0,21,4ZM6,10A2,2,0,0,1,4,8V6H6V8a6,6,0,0,0,.35,2Zm8,8a1,1,0,0,1,1,1v1H9V19a1,1,0,0,1,1-1ZM16,8A4,4,0,0,1,8,8V4h8Zm4,0a2,2,0,0,1-2,2h-.35A6,6,0,0,0,18,8V6h2Z" />
            </svg>
            <div className="text-content">
              <h3>
                35 years in IT
              </h3>
              <p>
                Delivering project success no matter what
              </p>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="text-with-svg">
            <svg
              enableBackground="new 0 0 256 256"
              version="1.1"
              viewBox="0 0 256 256"
              x="0px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              y="0px"
            >
              <metadata>
                {' '}Svg Vector Icons : http://www.onlinewebfonts.com/icon{' '}
              </metadata>
              <g>
                <g>
                  <path
                    d="M201.7,83.8c0-40.7-33-73.8-73.7-73.8c-40.7,0-73.8,33-73.8,73.8c0,16.5,5.6,31.6,14.8,43.9c0,0.1,0,0.2,0,0.3v103.3c0,5.4,3,10.5,7.8,13c4.8,2.6,10.6,2.3,15.1-0.7l36-24.1l36.1,24c2.5,1.6,5.3,2.5,8.2,2.5c2.4,0,4.8-0.6,7-1.7c4.8-2.6,7.8-7.6,7.8-13V128c0-0.1,0-0.2,0-0.3C196.1,115.4,201.7,100.3,201.7,83.8z M128,39.5c24.4,0,44.2,19.8,44.2,44.3c0,24.4-19.8,44.2-44.2,44.2c-24.4,0-44.3-19.8-44.3-44.2C83.8,59.3,103.6,39.5,128,39.5z M136.2,189.5c-5-3.3-11.4-3.3-16.4,0l-21.3,14.2v-52.4c9.1,3.9,19,6.2,29.5,6.2c10.5,0,20.4-2.3,29.5-6.2v52.4L136.2,189.5z"
                    fill="#000000"
                  />
                </g>
              </g>
            </svg>
            <div className="text-content">
              <h3>
                Project Management Office
              </h3>
              <p>
                To ensure service quality and reduced project costs
              </p>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="text-with-svg">
            <svg
              fill="#000000"
              height="800px"
              viewBox="0 0 64 64"
              width="800px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <g
                data-name="Layer 13"
                id="Layer_13"
              >
                <path d="M57,11H42V8.06A5.07,5.07,0,0,0,36.94,3H27.06A5.07,5.07,0,0,0,22,8.06V11H7a4,4,0,0,0-4,4V30a5,5,0,0,0,2,4V55a6,6,0,0,0,6,6H53a6,6,0,0,0,6-6V34a5,5,0,0,0,2-4V15A4,4,0,0,0,57,11ZM24,8.06A3.06,3.06,0,0,1,27.06,5h9.88A3.06,3.06,0,0,1,40,8.06V11H24ZM57,35V55a4,4,0,0,1-4,4H11a4,4,0,0,1-4-4V35h4v5a3,3,0,0,0,6,0V35H29v2a3,3,0,0,0,6,0V35H47v5a3,3,0,0,0,6,0V35h4ZM13,40V30a1,1,0,0,1,2,0V40a1,1,0,0,1-2,0Zm18-3V33a1,1,0,0,1,2,0v4a1,1,0,0,1-2,0Zm18,3V30a1,1,0,0,1,2,0V40a1,1,0,0,1-2,0ZM59,30a3,3,0,0,1-3,3H53V30a3,3,0,0,0-6,0v3H35a3,3,0,0,0-6,0H17V30a3,3,0,0,0-6,0v3H8a3,3,0,0,1-3-3V15a2,2,0,0,1,2-2H57a2,2,0,0,1,2,2Z" />
              </g>
            </svg>
            <div className="text-content">
              <h3>
                Around 4,000 success stories
              </h3>
              <p>
                Including projects for major companies
              </p>
            </div>
          </div>
        </div>
        <div className="highlight">
          <div className="text-with-svg">
            <svg
              fill="#000000"
              height="800px"
              viewBox="0 0 56 56"
              width="800px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 38.7232 28.5490 C 43.1399 28.5490 46.9403 24.6047 46.9403 19.4690 C 46.9403 14.3949 43.1193 10.6356 38.7232 10.6356 C 34.3271 10.6356 30.5061 14.4771 30.5061 19.5101 C 30.5061 24.6047 34.3066 28.5490 38.7232 28.5490 Z M 15.0784 29.0215 C 18.8994 29.0215 22.2274 25.5703 22.2274 21.1125 C 22.2274 16.6958 18.8789 13.4294 15.0784 13.4294 C 11.2575 13.4294 7.8885 16.7779 7.9090 21.1536 C 7.9090 25.5703 11.2370 29.0215 15.0784 29.0215 Z M 3.6155 47.5717 L 19.2281 47.5717 C 17.0917 44.4697 19.7006 38.2247 24.1173 34.8146 C 21.8371 33.2944 18.8994 32.1645 15.0579 32.1645 C 5.7931 32.1645 0 39.0053 0 44.6957 C 0 46.5445 1.0271 47.5717 3.6155 47.5717 Z M 25.8018 47.5717 L 51.6241 47.5717 C 54.8493 47.5717 56 46.6472 56 44.8395 C 56 39.5394 49.3644 32.2261 38.7026 32.2261 C 28.0616 32.2261 21.4262 39.5394 21.4262 44.8395 C 21.4262 46.6472 22.5766 47.5717 25.8018 47.5717 Z" />
            </svg>
            <div className="text-content">
              <h3>
                Over 750 specialists
              </h3>
              <p>
                Who love what they do
              </p>
            </div>
          </div>
        </div>
      </div>
    
      <div className="center-column">
      <img
        alt="description"
        className="image"
        src="new.jpeg"
      />
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
        <textarea
          {...register("description", { required: "Description is required" })}
          placeholder="Kindly describe your request — we usually respond within 1 hour on business days."
        />
        {errors.description && <p className="error-message">{errors.description.message}</p>}
      </div>
      <div className="form-row">
        <div className="form-group">
          <input
            {...register("Fullname", { required: "Full name is required" })}
            placeholder="Full name"
            type="text"
          />
          {errors.Fullname && <p className="error-message">{errors.Fullname.message}</p>}
        </div>
        <div className="form-group">
          <input
            {...register("Company", { required: "Company name is required" })}
            placeholder="Company"
            type="text"
          />
          {errors.Company && <p className="error-message">{errors.Company.message}</p>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <input
            {...register("Workemail", {
              required: "Work email is required",
              pattern: {
                value: /^[^@s]+@[^@s.]+\.[^@.s]+$/,
                message: "Invalid email address"
              }
            })}
            placeholder="Work email"
            type="email"
          />
          {errors.Workemail && <p className="error-message">{errors.Workemail.message}</p>}
        </div>
        <div className="form-group">
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[+]*[0-9]{1,4}[ ]?[0-9]+$/,
                message: "Invalid phone number"
              }
            })}
            defaultValue="+1 "
            id="phone"
            placeholder="+91 812356789"
            type="tel"
          />
          {errors.phone && <p className="error-message">{errors.phone.message}</p>}
        </div>
      </div>
      <button className="submit-btn" type="submit">Submit</button>
        </form>
       
      </div>
      <div className="right-column">
        <h3>
          Our contacts
        </h3>
        <div className="contact-info">
          <div className="text-with-svg">
            <svg
              height="256"
              version="1.1"
              viewBox="0 0 256 256"
              width="256"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
              </defs>
              <g
                style={{
                  fill: 'none',
                  fillRule: 'nonzero',
                  opacity: '1',
                  stroke: 'none',
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: '10',
                  strokeWidth: '0'
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <circle
                  cx="45"
                  cy="45"
                  r="45"
                  style={{
                    fill: 'rgb(33,150,243)',
                    fillRule: 'nonzero',
                    opacity: '1',
                    stroke: 'none',
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '10',
                    strokeWidth: '1'
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
                <path
                  d="M 57.332 70.088 c -1.955 0.001 -4.074 -0.313 -6.32 -0.946 c -6.303 -1.777 -12.904 -5.885 -18.586 -11.568 c -5.682 -5.682 -9.79 -12.283 -11.568 -18.586 c -1.84 -6.528 -0.978 -11.999 2.429 -15.406 c 0.124 -0.124 0.25 -0.244 0.38 -0.36 c 0.033 -0.046 0.07 -0.09 0.112 -0.131 l 1.819 -1.819 c 0.877 -0.877 2.042 -1.36 3.282 -1.36 c 1.24 0 2.405 0.483 3.282 1.36 l 6.976 6.977 c 1.809 1.809 1.809 4.754 0 6.563 L 36.149 37.8 c -0.753 0.753 -0.753 1.979 0 2.732 L 49.468 53.85 c 0.729 0.729 2.002 0.729 2.732 0 l 2.988 -2.988 c 1.809 -1.808 4.755 -1.81 6.564 -0.001 l 6.977 6.977 c 0.876 0.876 1.359 2.042 1.359 3.281 s -0.483 2.405 -1.359 3.281 l -1.819 1.819 c -0.042 0.042 -0.087 0.08 -0.133 0.114 c -0.117 0.13 -0.236 0.256 -0.36 0.379 C 64.182 68.948 61.058 70.088 57.332 70.088 z"
                  strokeLinecap="round"
                  style={{
                    fill: 'rgb(255,255,255)',
                    fillRule: 'nonzero',
                    opacity: '1',
                    stroke: 'none',
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '10',
                    strokeWidth: '1'
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
              </g>
            </svg>
            <div className="text-content">
          <p>
            <a href="tel:+91996678945" onClick={handleClick}>
              +91 996678945
            </a>
          </p>
        </div>
          </div>
          <br />
          <div className="new-class-name">
            <svg
              height="256"
              version="1.1"
              viewBox="0 0 256 256"
              width="256"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
              </defs>
              <g
                style={{
                  fill: 'none',
                  fillRule: 'nonzero',
                  opacity: '1',
                  stroke: 'none',
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: '10',
                  strokeWidth: '0'
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <circle
                  cx="45"
                  cy="45"
                  r="45"
                  style={{
                    fill: 'rgb(24,64,178)',
                    fillRule: 'nonzero',
                    opacity: '1',
                    stroke: 'none',
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '10',
                    strokeWidth: '1'
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
                <path
                  d="M 45 42.66 l 22.511 -7.647 v -3.028 c 0 -1.8 -1.46 -3.26 -3.26 -3.26 H 25.749 c -1.8 0 -3.26 1.46 -3.26 3.26 v 3.028 L 45 42.66 z"
                  strokeLinecap="round"
                  style={{
                    fill: 'rgb(255,255,255)',
                    fillRule: 'nonzero',
                    opacity: '1',
                    stroke: 'none',
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '10',
                    strokeWidth: '1'
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
                <path
                  d="M 45 47.34 l -22.511 -7.647 v 18.323 c 0 1.8 1.46 3.26 3.26 3.26 h 38.501 c 1.8 0 3.26 -1.46 3.26 -3.26 V 39.692 L 45 47.34 z"
                  strokeLinecap="round"
                  style={{
                    fill: 'rgb(255,255,255)',
                    fillRule: 'nonzero',
                    opacity: '1',
                    stroke: 'none',
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '10',
                    strokeWidth: '1'
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
              </g>
            </svg>
            <div className="text-content2">
      <p>
        <a href="mailto:contact@gmail.com">contact@scnsoft.com</a>
      </p>
    </div>
    
          </div>
          <br />
          <div className="new-class-name">
            <svg
              height="256"
              version="1.1"
              viewBox="0 0 256 256"
              width="256"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
              </defs>
              <g
                style={{
                  fill: 'none',
                  fillRule: 'nonzero',
                  opacity: '1',
                  stroke: 'none',
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: '10',
                  strokeWidth: '0'
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <circle
                  cx="45"
                  cy="45"
                  r="45"
                  style={{
                    fill: 'rgb(42,181,64)',
                    fillRule: 'nonzero',
                    opacity: '1',
                    stroke: 'none',
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '10',
                    strokeWidth: '1'
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
                <path
                  d="M 16.138 44.738 c -0.002 5.106 1.332 10.091 3.869 14.485 l -4.112 15.013 l 15.365 -4.029 c 4.233 2.309 8.999 3.525 13.85 3.527 h 0.012 c 15.973 0 28.976 -12.999 28.983 -28.974 c 0.003 -7.742 -3.01 -15.022 -8.481 -20.498 c -5.472 -5.476 -12.749 -8.494 -20.502 -8.497 C 29.146 15.765 16.145 28.762 16.138 44.738 M 25.288 58.466 l -0.574 -0.911 c -2.412 -3.834 -3.685 -8.266 -3.683 -12.816 c 0.005 -13.278 10.811 -24.081 24.099 -24.081 c 6.435 0.003 12.482 2.511 17.031 7.062 c 4.548 4.552 7.051 10.603 7.05 17.037 C 69.205 58.036 58.399 68.84 45.121 68.84 h -0.009 c -4.323 -0.003 -8.563 -1.163 -12.261 -3.357 l -0.88 -0.522 l -9.118 2.391 L 25.288 58.466 z M 45.122 73.734 L 45.122 73.734 L 45.122 73.734 C 45.122 73.734 45.121 73.734 45.122 73.734"
                  strokeLinecap="round"
                  style={{
                    fill: 'rgb(255,255,255)',
                    fillRule: 'nonzero',
                    opacity: '1',
                    stroke: 'none',
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '10',
                    strokeWidth: '1'
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
                <path
                  d="M 37.878 32.624 c -0.543 -1.206 -1.113 -1.23 -1.63 -1.251 c -0.422 -0.018 -0.905 -0.017 -1.388 -0.017 c -0.483 0 -1.268 0.181 -1.931 0.906 c -0.664 0.725 -2.535 2.477 -2.535 6.039 c 0 3.563 2.595 7.006 2.957 7.49 c 0.362 0.483 5.01 8.028 12.37 10.931 c 6.118 2.412 7.362 1.933 8.69 1.812 c 1.328 -0.121 4.285 -1.751 4.888 -3.442 c 0.604 -1.691 0.604 -3.14 0.423 -3.443 c -0.181 -0.302 -0.664 -0.483 -1.388 -0.845 c -0.724 -0.362 -4.285 -2.114 -4.948 -2.356 c -0.664 -0.241 -1.147 -0.362 -1.63 0.363 c -0.483 0.724 -1.87 2.355 -2.292 2.838 c -0.422 0.484 -0.845 0.544 -1.569 0.182 c -0.724 -0.363 -3.057 -1.127 -5.824 -3.594 c -2.153 -1.92 -3.606 -4.29 -4.029 -5.015 c -0.422 -0.724 -0.045 -1.116 0.318 -1.477 c 0.325 -0.324 0.724 -0.846 1.087 -1.268 c 0.361 -0.423 0.482 -0.725 0.723 -1.208 c 0.242 -0.483 0.121 -0.906 -0.06 -1.269 C 39.929 37.637 38.522 34.056 37.878 32.624"
                  strokeLinecap="round"
                  style={{
                    fill: 'rgb(255,255,255)',
                    fillRule: 'nonzero',
                    opacity: '1',
                    stroke: 'none',
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '10',
                    strokeWidth: '1'
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
              </g>
            </svg>
            <br/>
            <div className="text-content2">
              <a href="https://wa.me/7995634903 "target="_blank">  WhatsApp</a>
          
            </div>
          </div>
          <br />
          <div className="new-class-name">
            <svg
              height="256"
              version="1.1"
              viewBox="0 0 256 256"
              width="256"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
              </defs>
              <g
                style={{
                  fill: 'none',
                  fillRule: 'nonzero',
                  opacity: '1',
                  stroke: 'none',
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: '10',
                  strokeWidth: '0'
                }}
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 0 90 l 5.433 -23.57 C 1.871 59.866 0 52.516 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 c 0 24.813 -20.187 45 -45 45 c -7.516 0 -14.866 -1.871 -21.43 -5.434 L 0 90 z"
                  strokeLinecap="round"
                  style={{
                    fill: 'rgb(58,108,232)',
                    fillRule: 'nonzero',
                    opacity: '1',
                    stroke: 'none',
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '10',
                    strokeWidth: '1'
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
                <path
                  d="M 66.609 51.5 c -0.42 0 -0.85 -0.04 -1.27 -0.13 c -0.41 -0.08 -0.82 -0.21 -1.22 -0.37 c -0.391 -0.16 -0.771 -0.36 -1.12 -0.601 c -0.351 -0.229 -0.69 -0.5 -0.98 -0.8 c -0.31 -0.3 -0.58 -0.64 -0.81 -0.99 c -0.24 -0.35 -0.44 -0.729 -0.601 -1.119 c -0.17 -0.4 -0.29 -0.801 -0.369 -1.221 c -0.091 -0.42 -0.131 -0.85 -0.131 -1.27 c 0 -0.42 0.04 -0.85 0.131 -1.27 c 0.079 -0.41 0.199 -0.82 0.369 -1.22 c 0.16 -0.39 0.36 -0.77 0.591 -1.12 c 0.239 -0.35 0.51 -0.69 0.81 -0.99 c 0.3 -0.3 0.64 -0.57 0.99 -0.8 c 0.35 -0.24 0.729 -0.44 1.12 -0.6 c 0.399 -0.16 0.81 -0.29 1.22 -0.37 c 0.84 -0.17 1.7 -0.17 2.54 0 c 0.41 0.08 0.82 0.21 1.22 0.37 c 0.391 0.16 0.76 0.36 1.12 0.6 c 0.35 0.23 0.69 0.5 0.99 0.8 c 0.3 0.3 0.57 0.64 0.8 0.99 c 0.24 0.35 0.44 0.73 0.6 1.12 c 0.16 0.4 0.29 0.81 0.37 1.22 c 0.09 0.42 0.13 0.85 0.13 1.27 c 0 0.42 -0.04 0.85 -0.13 1.27 c -0.08 0.41 -0.21 0.82 -0.37 1.221 c -0.159 0.39 -0.359 0.77 -0.6 1.119 c -0.229 0.351 -0.5 0.69 -0.8 0.99 s -0.641 0.57 -0.99 0.8 c -0.36 0.24 -0.729 0.44 -1.12 0.601 c -0.399 0.16 -0.81 0.29 -1.22 0.37 C 67.46 51.46 67.03 51.5 66.609 51.5 z"
                  strokeLinecap="round"
                  style={{
                    fill: 'rgb(255,255,255)',
                    fillRule: 'nonzero',
                    opacity: '1',
                    stroke: 'none',
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '10',
                    strokeWidth: '1'
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
                <path
                  d="M 45 51.5 c -0.42 0 -0.85 -0.04 -1.27 -0.13 c -0.41 -0.08 -0.82 -0.21 -1.22 -0.37 c -0.39 -0.16 -0.77 -0.36 -1.12 -0.601 c -0.35 -0.229 -0.69 -0.5 -0.99 -0.8 c -1.21 -1.21 -1.9 -2.89 -1.9 -4.6 c 0 -0.42 0.04 -0.85 0.13 -1.27 c 0.08 -0.41 0.2 -0.82 0.37 -1.22 c 0.16 -0.39 0.36 -0.77 0.6 -1.12 c 0.23 -0.35 0.5 -0.69 0.8 -0.99 c 0.3 -0.3 0.64 -0.57 0.99 -0.8 c 0.35 -0.24 0.73 -0.44 1.12 -0.6 c 0.4 -0.17 0.81 -0.29 1.22 -0.37 c 2.11 -0.43 4.36 0.26 5.87 1.77 c 0.3 0.3 0.57 0.64 0.8 0.99 c 0.24 0.35 0.44 0.73 0.601 1.12 c 0.16 0.4 0.29 0.81 0.37 1.22 c 0.09 0.42 0.13 0.85 0.13 1.27 c 0 1.71 -0.69 3.39 -1.91 4.6 C 48.39 50.81 46.71 51.5 45 51.5 z"
                  strokeLinecap="round"
                  style={{
                    fill: 'rgb(255,255,255)',
                    fillRule: 'nonzero',
                    opacity: '1',
                    stroke: 'none',
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '10',
                    strokeWidth: '1'
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
                <path
                  d="M 23.39 51.5 c -0.42 0 -0.85 -0.04 -1.27 -0.13 c -0.41 -0.08 -0.82 -0.21 -1.22 -0.37 c -0.39 -0.16 -0.77 -0.36 -1.12 -0.601 c -0.35 -0.229 -0.69 -0.5 -0.99 -0.8 c -1.21 -1.21 -1.9 -2.89 -1.9 -4.6 c 0 -0.42 0.04 -0.85 0.13 -1.27 c 0.08 -0.41 0.2 -0.82 0.37 -1.22 c 0.16 -0.39 0.36 -0.77 0.6 -1.12 c 0.23 -0.35 0.5 -0.69 0.8 -0.99 c 0.3 -0.3 0.64 -0.57 0.99 -0.8 c 0.35 -0.24 0.73 -0.44 1.12 -0.6 c 0.4 -0.17 0.81 -0.29 1.22 -0.37 c 2.11 -0.43 4.36 0.26 5.87 1.77 c 0.3 0.3 0.57 0.64 0.8 0.99 c 0.24 0.35 0.44 0.73 0.601 1.12 c 0.16 0.4 0.29 0.81 0.37 1.22 c 0.09 0.42 0.13 0.85 0.13 1.27 c 0 1.71 -0.69 3.39 -1.91 4.6 C 26.79 50.81 25.11 51.5 23.39 51.5 z"
                  strokeLinecap="round"
                  style={{
                    fill: 'rgb(255,255,255)',
                    fillRule: 'nonzero',
                    opacity: '1',
                    stroke: 'none',
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: '10',
                    strokeWidth: '1'
                  }}
                  transform="matrix(1 0 0 1 0 0)"
                />
              </g>
            </svg>
            <div className="text-content2">
              <a href="#" >Live Chat</a>
             
           
            </div>
          </div>
        </div>
        <h3>
          For journalists
        </h3>
        <div className="new-class-name2">
          <svg
            clipRule="evenodd"
            fillRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 507 511.92"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M223.36 0c61.68 0 117.53 25 157.95 65.43 40.42 40.42 65.42 96.26 65.42 157.94 0 45.12-13.39 87.12-36.4 122.25L507 450.99l-66.66 60.93-93.23-102.59c-35.42 23.63-77.98 37.4-123.75 37.4-61.67 0-117.52-25-157.94-65.42C25 340.88 0 285.04 0 223.36c0-61.67 25-117.52 65.42-157.94S161.69 0 223.36 0zm-16.05 178.1c12.05 0 21.82 9.77 21.82 21.82s-9.77 21.82-21.82 21.82-21.82-9.77-21.82-21.82 9.77-21.82 21.82-21.82zM55.05 216.47c24.31-31.16 51.43-55.99 80.23-72.7 28.22-16.38 58.07-25.02 88.52-24.33 28.53.66 57.29 9.64 85.4 26.05 28.02 16.35 55.55 40.18 81.71 70.56l5.43 6.3-4.62 6.9c-21.19 31.7-47.11 56.41-75.52 73.12-29.04 17.09-60.69 25.81-92.56 25.14-30.85-.65-61.75-10.12-90.55-26.92-28.79-16.79-55.57-40.91-78.17-70.82l-5.03-6.67 5.16-6.63zm168.11-49.26c15.51 0 29.6 6.32 39.78 16.5 10.17 10.17 16.48 24.26 16.48 39.77 0 15.51-6.31 29.59-16.48 39.77-10.18 10.18-24.27 16.49-39.78 16.49-15.51 0-29.57-6.31-39.75-16.49-10.21-10.18-16.52-24.26-16.52-39.77 0-15.5 6.3-29.55 16.5-39.75 10.23-10.23 24.28-16.52 39.77-16.52zm-76.93-4.55c-24.34 14.12-47.51 34.76-68.68 60.59 19.69 24.55 42.37 44.4 66.49 58.45 25.7 14.99 53.02 23.44 80.03 24.01 27.8.58 55.53-7.1 81.11-22.15 23.52-13.84 45.27-33.93 63.66-59.58-22.83-25.47-46.61-45.56-70.67-59.6-25-14.59-50.2-22.57-74.8-23.14-26.29-.6-52.32 7.01-77.14 21.42zm217.46-79.61c-35.91-35.91-85.53-58.13-140.33-58.13-54.8 0-104.41 22.22-140.32 58.13-35.91 35.91-58.12 85.51-58.12 140.31s22.21 104.42 58.12 140.32c35.91 35.92 85.52 58.12 140.32 58.12s104.42-22.2 140.33-58.12c35.91-35.9 58.11-85.51 58.11-140.32 0-54.8-22.2-104.4-58.11-140.31z" />
          </svg>
          <div className="text-content3">
            <a href="#"> 
              Get unique insights
            </a>
          </div>
        </div>
        <h3>
          Join our team
        </h3>
        <div className="new-class-name2">
          <svg
            height="256"
            version="1.1"
            viewBox="0 0 256 256"
            width="256"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
            </defs>
            <g
              style={{
                fill: 'none',
                fillRule: 'nonzero',
                opacity: '1',
                stroke: 'none',
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: '10',
                strokeWidth: '0'
              }}
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 71.4 1 H 18.6 c -1.144 0 -2.071 0.927 -2.071 2.071 v 70.736 v 13.122 c 0 1.144 0.927 2.071 2.071 2.071 h 14.488 h 23.824 h 9.584 c 3.852 0 6.975 -3.123 6.975 -6.975 v -8.218 V 3.071 C 73.471 1.927 72.543 1 71.4 1 z"
                strokeLinecap="round"
                style={{
                  fill: 'rgb(249,249,249)',
                  fillRule: 'nonzero',
                  opacity: '1',
                  stroke: 'none',
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: '10',
                  strokeWidth: '1'
                }}
                transform=" matrix(1 0 0 1 0 0) "
              />
              <path
                d="M 57.049 66.54 l -6.673 -2.039 c -0.862 -0.263 -1.668 0.543 -1.404 1.404 l 2.039 6.673 c 0.294 0.961 0.819 1.836 1.53 2.547 l 10.08 10.08 l 2.645 2.645 c 1.225 1.225 3.21 1.225 4.435 0 l 2.62 -2.62 c 1.225 -1.225 1.225 -3.21 0 -4.435 l -2.645 -2.645 l -10.08 -10.08 C 58.885 67.359 58.01 66.834 57.049 66.54 z"
                strokeLinecap="round"
                style={{
                  fill: 'rgb(255,220,141)',
                  fillRule: 'nonzero',
                  opacity: '1',
                  stroke: 'none',
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: '10',
                  strokeWidth: '1'
                }}
                transform=" matrix(1 0 0 1 0 0) "
              />
              <path
                d="M 62.621 85.205 l 2.645 2.645 c 1.225 1.225 3.21 1.225 4.435 0 l 2.62 -2.62 c 1.225 -1.225 1.225 -3.21 0 -4.435 l -2.645 -2.645 l 0 0 C 69.676 78.15 62.621 85.205 62.621 85.205 z"
                strokeLinecap="round"
                style={{
                  fill: 'rgb(255,255,255)',
                  fillRule: 'nonzero',
                  opacity: '1',
                  stroke: 'none',
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: '10',
                  strokeWidth: '1'
                }}
                transform=" matrix(1 0 0 1 0 0) "
              />
              <path
                d="M 56.912 90 H 18.601 c -1.693 0 -3.071 -1.378 -3.071 -3.071 V 3.071 C 15.529 1.377 16.907 0 18.601 0 h 52.799 c 1.693 0 3.071 1.377 3.071 3.071 v 70.737 c 0 0.553 -0.447 1 -1 1 s -1 -0.447 -1 -1 V 3.071 C 72.471 2.48 71.99 2 71.399 2 H 18.601 c -0.591 0 -1.071 0.48 -1.071 1.071 v 83.858 c 0 0.591 0.48 1.071 1.071 1.071 h 38.312 c 0.553 0 1 0.447 1 1 S 57.465 90 56.912 90 z"
                strokeLinecap="round"
                style={{
                  fill: 'rgb(0,0,0)',
                  fillRule: 'nonzero',
                  opacity: '1',
                  stroke: 'none',
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: '10',
                  strokeWidth: '1'
                }}
                transform=" matrix(1 0 0 1 0 0) "
              />
              <path
                d="M 67.482 89.767 c -1.059 0 -2.117 -0.402 -2.924 -1.209 L 51.834 75.832 c -0.824 -0.824 -1.439 -1.848 -1.779 -2.962 l -2.039 -6.673 c -0.23 -0.752 -0.027 -1.566 0.529 -2.123 c 0.557 -0.558 1.368 -0.763 2.124 -0.529 l 6.672 2.039 l 0 0 c 1.114 0.34 2.138 0.955 2.962 1.779 l 12.725 12.725 c 1.612 1.612 1.612 4.236 0 5.849 l -2.62 2.621 C 69.602 89.364 68.542 89.767 67.482 89.767 z M 50.043 65.45 c -0.023 0 -0.054 0.008 -0.084 0.038 c -0.053 0.053 -0.037 0.104 -0.031 0.124 l 2.039 6.674 c 0.245 0.802 0.688 1.539 1.281 2.132 l 12.725 12.726 c 0.833 0.833 2.189 0.83 3.021 0 l 2.62 -2.621 c 0.833 -0.833 0.833 -2.188 0 -3.021 L 58.889 68.777 c -0.593 -0.593 -1.33 -1.036 -2.132 -1.281 l -6.673 -2.039 C 50.075 65.455 50.061 65.45 50.043 65.45 z"
                strokeLinecap="round"
                style={{
                  fill: 'rgb(0,0,0)',
                  fillRule: 'nonzero',
                  opacity: '1',
                  stroke: 'none',
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: '10',
                  strokeWidth: '1'
                }}
                transform=" matrix(1 0 0 1 0 0) "
              />
              <path
                d="M 62.621 86.205 c -0.256 0 -0.512 -0.098 -0.707 -0.293 c -0.391 -0.391 -0.391 -1.023 0 -1.414 l 7.055 -7.055 c 0.391 -0.391 1.023 -0.391 1.414 0 s 0.391 1.023 0 1.414 l -7.055 7.055 C 63.133 86.107 62.877 86.205 62.621 86.205 z"
                strokeLinecap="round"
                style={{
                  fill: 'rgb(0,0,0)',
                  fillRule: 'nonzero',
                  opacity: '1',
                  stroke: 'none',
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: '10',
                  strokeWidth: '1'
                }}
                transform=" matrix(1 0 0 1 0 0) "
              />
              <path
                d="M 62.936 46 H 27.064 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 35.872 c 0.552 0 1 0.448 1 1 S 63.488 46 62.936 46 z"
                strokeLinecap="round"
                style={{
                  fill: 'rgb(0,0,0)',
                  fillRule: 'nonzero',
                  opacity: '1',
                  stroke: 'none',
                  strokeDasharray: 'none',
                  strokeLinecap: 'butt',
                  strokeLinejoin: 'miter',
                  strokeMiterlimit: '10',
                  strokeWidth: '1'
                }}
                transform=" matrix(1 0 0 1 0 0) "
              />
            </g>
          </svg>
          <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
          <a href='#'> Upload your CV</a> 
          </span>
        </div>
      </div>
    </div>
      </>
      );
}
export default Myform