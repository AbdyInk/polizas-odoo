import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

//import { Image } from "@coreui/react";

import { IoMdPerson, IoMdLock, IoIosArrowForward } from "react-icons/io";
import {useNavigate} from 'react-router-dom';

import { CSpinner } from '@coreui/react';

import "./pre.scss";

import logo from "../../../assets/logoVito.png";
import {Image} from "@chakra-ui/react"

axios.defaults.xsrfCookieName="csrftoken";
axios.defaults.xsrfHeaderName="X-CSRFToken";
axios.defaults.withCredentials= true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  })

export default function Login() {
    const [xdata, setXdata] = useState('');
    const [formData, setFormData] = useState(null);
    const [currentUser, setCurrentUser] = useState();
    const [authStatus, setAuthStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
    axios.get('http://127.0.0.1:8000/odoo/usercheck/')
      .then(response => {
        
        if(response.data !== "Nope"){
          window.location.href="/"
        }

      },[])
      .catch(error => {
        console.log(error);
      });
    }, []);

    useEffect(() => {
        if (formData) {
            setIsLoading(true);
            axios.get('http://127.0.0.1:8000/odoo/login/', {
              params: {
                user: formData.user,
                pass: formData.pass
              }
            }, {
              withCredentials: true,
            })
              .then(response => {
                setXdata(response.data);

                if (response.data != "NoAuth")
                {
                  console.log("succes!");
                  setAuthStatus('success');

                  window.location.href="/"
                }
                else
                {
                  console.log("nah!")
                  setAuthStatus('failed');
                }
                setIsLoading(false);
              })
              .catch(error => {
                console.log(error);
                setIsLoading(false);
              });
        }
    }, [formData]);


    function useLogintry(e)
    {
        e.preventDefault()
        setAuthStatus(null);

        const form = e.target;
        const formDatax = new FormData(form);

        const formJson = Object.fromEntries(formDatax.entries());
        console.log(formJson);

        setFormData(formJson);
    }


    return (
      <div className="container">
          <div className="screen">
              <div className="screen__content">
                  <form className="login" method="post" onSubmit={useLogintry}>
                  {authStatus === 'failed' && <p className="button__text" style={{color: 'red', fontWeight: 'bold', position: 'absolute', top: '120px'}}>Accesos incorrectos</p>}
                  {authStatus === 'success' && <p className="button__text" style={{color: 'green', fontWeight: 'bold', position: 'absolute'}}>Acceso exitoso</p>}
                      <div className="login__field">
                          <i className="login__icon"><IoMdPerson /></i>
                          <input type="text" name="user" className="login__input" placeholder="Usuario / Email" />
                      </div>
                      <div className="login__field">
                          <i className="login__icon"><IoMdLock /></i>
                          <input type="password" name="pass" className="login__input" placeholder="Contraseña" />
                      </div>
                      <button className="button login__submit" disabled={isLoading}>
                          {isLoading === false && <span className="button__text">Iniciar Sesion</span>}
                          {isLoading === true && <CSpinner color="primary" />}
                          <i className="button__icon"><IoIosArrowForward /></i>
                      </button>				
                  </form>

                <div className="social-login">
                  <Image src={logo} className="logo__image" />
			          </div>
              </div>
              <div className="screen__background">
                  <span className="screen__background__shape screen__background__shape4"></span>
                  <span className="screen__background__shape screen__background__shape3"></span>		
                  <span className="screen__background__shape screen__background__shape2"></span>
                  <span className="screen__background__shape screen__background__shape1"></span>
              </div>
          </div>
      </div>
    );
  
}
