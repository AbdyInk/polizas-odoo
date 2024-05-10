import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

import { useNavigate } from 'react-router-dom';

import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

axios.defaults.xsrfCookieName="csrftoken";
axios.defaults.xsrfHeaderName="X-CSRFToken";
axios.defaults.withCredentials= true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  })


const DefaultLayout = () => {
  const navigate = useNavigate()

  useEffect(() => {
  axios.get('http://127.0.0.1:8000/odoo/usercheck/',
  {
    withCredentials: true,
  }
  )
    .then(response => {

      if(response.data === "Nope"){
        navigate("/login")
      }

    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
