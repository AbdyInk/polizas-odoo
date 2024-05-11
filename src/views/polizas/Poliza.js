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
    CCardTitle,
    CCardText,
    CButton,
    CPagination,
    CPaginationItem,
    CSpinner
  } from '@coreui/react'

  import { Pagination, SelectPicker } from 'rsuite';
  
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  
  import {useAsyncError, useNavigate, useSearchParams} from 'react-router-dom';

  
  
  const Tables = () => {
    const navigate = useNavigate();
    const [queryParameters] = useSearchParams();

    //Accedemos a los valores
    var numeroP = queryParameters.get('n');

    const [polizas, setPolizas] = useState({});
    const [equipos, setEquipos] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      axios.get('http://localhost:8000/odoo/gps/',{
        params: { numero: numeroP }
      })
      .then(response => {
        setPolizas(response.data);
        return axios.get('http://localhost:8000/odoo/ges/',{
          params: { numero: numeroP }
        });
      })
      .then(response => {
        setEquipos(response.data);
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
  
    const [xdata, setXdata] = useState();

    const [x, setX] = useState(0);
    const [y, setY] = useState(5);

    const limitOptions = [5, 10, 20, 50];

    const [activePage, setActivePage] = useState(1);
    const [limit, setLimit] = useState(5);

  
    return (
      <CRow>
        <CCol xs={12}>
            <CCard>
                <CCardHeader as="h5">Poliza #{numeroP}</CCardHeader>
                <CRow>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Información de la poliza</CCardTitle>
                      <CCardText>
                        <b>Numero:</b> {polizas.x_name} <br/>
                        <b>Cliente:</b> {polizas.x_studio_cliente ? polizas.x_studio_cliente[1] : ''}
                      </CCardText>
                      
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Fechas</CCardTitle>
                      <CCardText>
                      <b>Fecha Inicio:</b> {polizas.x_studio_fecha_inicio ? polizas.x_studio_fecha_inicio.split('-').reverse().join('/') : ''} <br/>
                      <b>Fecha de Expiración:</b> {polizas.x_studio_fecha_expiro ? polizas.x_studio_fecha_expiro.split('-').reverse().join('/') : ''}
                      </CCardText>
                      
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCard>
        </CCol>
        <CCol xs={12}>
          {equipos.length !==0 ? 
          <CCard className="mb-4">
          
          <CTable hover>
                  <CTableHead color='light'>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Equipo</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Modelo</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Serie</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                  {!numeroP ? null : Array.isArray(equipos) ? equipos.slice((activePage-1)*limit,limit*activePage).map(
                  ({ x_name, x_studio_marca, x_studio_modelo, x_studio_serie }, key) => {
                    return(
                      <CTableRow onClick={() => rediTo('/polizas/poliza/equipo?n='+numeroP+'&idenf='+x_name)} key={key}>
                        <CTableHeaderCell className='text-primary' style={{"textDecoration": "underline", "cursor": "pointer"}} scope="row">{x_name}</CTableHeaderCell>
                        <CTableDataCell>{x_studio_marca[1]+" "+x_studio_modelo[1]}</CTableDataCell>
                        <CTableDataCell>{x_studio_serie}</CTableDataCell>
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
                  total={equipos.length}
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
          <CCardHeader>Equipos</CCardHeader>
          <CCardBody>
            <CCardTitle>No hay equipos</CCardTitle>
            <CCardText>Esta poliza aún no posee equipos.</CCardText>
          </CCardBody>
          </CCard>
          }
        </CCol>
      </CRow>
    )
  }
  
  export default Tables
  