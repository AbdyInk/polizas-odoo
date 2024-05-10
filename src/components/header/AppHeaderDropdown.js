import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

import { useNavigate } from 'react-router-dom';

import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CSpinner,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilAccountLogout,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { func } from 'prop-types';

const AppHeaderDropdown = () => {
  const [currentUser, setCurrentUser] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

    useEffect(() => {
    axios.get('http://127.0.0.1:8000/odoo/usercheck/',
    {
      withCredentials: true,
    }
    )
      .then(response => {
        
        if(response.data !== "Nope"){
          setCurrentUser(response.data);
        }

      })
      .catch(error => {
        console.log(error);
      });
    }, []);

    useEffect(() => {
      if(isLoading){
        axios.get('http://127.0.0.1:8000/odoo/logout/',
            {
                withCredentials: true,
            })
          .then(response => {
            console.log(response.data);
            navigate("/login")
          })
          .catch(error => {
            console.log(error);
          });
      }
    }, [isLoading]);

  return (
    <CDropdown variant="nav-item" placement="bottom-end">
      
      <CDropdownToggle caret={false}>
        <CIcon icon={cilUser} size="lg" />{!currentUser ? null : currentUser}
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        
        <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Cuenta</CDropdownHeader>
        {/*<CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Perfil
        </CDropdownItem>*/}
        {/*
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>*/}
        <CDropdownDivider />
        <CDropdownItem className='text-danger' onClick={() => setIsLoading(true)}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          {isLoading===false && <>Log out</>}
          {isLoading===true && <CSpinner color='primary'/>}
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
