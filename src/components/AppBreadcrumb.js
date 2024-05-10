import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'

import routes from '../routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

axios.defaults.xsrfCookieName="csrftoken";
axios.defaults.xsrfHeaderName="X-CSRFToken";
axios.defaults.withCredentials= true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  })

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname
  const [queryParameters] = useSearchParams();

  //Accedemos a los valores
  var numeroP = queryParameters.get('n');
  var idenfP = queryParameters.get('idenf');

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)
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
  },);

  return (
    <CBreadcrumb className="my-0">
      <CBreadcrumbItem href="/#/">Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: numeroP ? idenfP ? "/#"+breadcrumb.pathname+"?n="+numeroP+"&idenf="+idenfP  : "/#"+breadcrumb.pathname+"?n="+numeroP : "/#"+breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
