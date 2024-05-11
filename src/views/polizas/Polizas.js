import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CSpinner,
  CCardTitle,
  CCardText,
} from '@coreui/react'

import { Pagination, SelectPicker } from 'rsuite';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {useNavigate} from 'react-router-dom';

const Tables = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const [polizas, setPolizas] = useState([]);

        useEffect(() => {
            axios.get('http://127.0.0.1:8000/odoo/gpolizas/')
              .then(response => {
                setPolizas(response.data);
                setIsLoading(false);
              })
              .catch(error => {
                console.log(error);
                setIsLoading(false);
              });
          }, []);

    function rediTo(x){
      navigate(x)
    }

    const limitOptions = [5, 10, 20, 50];

    const [activePage, setActivePage] = useState(1);
    const [limit, setLimit] = useState(5);


  return (
    <CRow>
      <CCol xs={12}>
        {polizas.length!==0 ? 
        <CCard className="mb-4">
        <CTable className='fs-auto' hover>
                <CTableHead color='light'>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Cliente</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tipo de Poliza</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Fecha de inicio</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Fecha expiración</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                {Array.isArray(polizas) ? polizas.slice((activePage-1)*limit,limit*activePage).map(
                ({ x_name, x_studio_num, x_studio_cliente, x_studio_tipo, x_studio_fecha_inicio, x_studio_fecha_expiro }, key) => {

                  return(
                    <CTableRow onClick={() => rediTo('/polizas/poliza?n='+x_studio_num)} key={x_name}>
                      
                      <CTableHeaderCell className='text-primary' style={{"textDecoration": "underline", "cursor": "pointer"}} scope="row">{x_name}</CTableHeaderCell>
                      <CTableDataCell>{x_studio_cliente[1]}</CTableDataCell>
                      <CTableDataCell>{x_studio_tipo[1]}</CTableDataCell>
                      <CTableDataCell>{x_studio_fecha_inicio ? x_studio_fecha_inicio.split('-').reverse().join('/') : ''}</CTableDataCell>
                      <CTableDataCell style={{color: "red"}}>{x_studio_fecha_expiro ? x_studio_fecha_expiro.split('-').reverse().join('/') : ''}</CTableDataCell>
                    </CTableRow>
                  );

                }
                ): null}
                </CTableBody>
              </CTable>
              
                <Pagination className='align-self-center'
                  prev
                  last
                  next
                  first
                  size={"sm-auto"}
                  total={polizas.length}
                  limit={limit}
                  maxButtons={3}
                  activePage={activePage}
                  onChangePage={setActivePage}
                  onChangeLimit={setLimit}
                  limitOptions={limitOptions}
                />
                <span className='align-self-center' style={{ marginLeft: 20 }}>
                  Elementos por pagina：
                  <SelectPicker
                    value={limit}
                    onChange={setLimit}
                    cleanable={false}
                    searchable={false}
                    data={limitOptions.map(key => ({ value: key, label: key }))}
                    placement="autoHorizontalEnd"
                  />
                </span>

        </CCard>
        : isLoading===true ? <CSpinner color="primary" /> :
        <CCard className="text-center">
        <CCardHeader>Polizas</CCardHeader>
        <CCardBody>
          <CCardTitle>¡Sin polizas!</CCardTitle>
          <CCardText>Su cuenta no posee algun registro de polizas por el momento.</CCardText>
        </CCardBody>
        </CCard>
        }
      </CCol>
    </CRow>
  )
}

export default Tables
