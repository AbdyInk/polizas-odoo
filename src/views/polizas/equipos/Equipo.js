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
    CSpinner,
    CBadge,
  } from '@coreui/react'

  import { DocsExample } from 'src/components'

  import { Pagination, SelectPicker } from 'rsuite';
  
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  
  import {useAsyncError, useNavigate, useSearchParams} from 'react-router-dom';
import { color } from 'framer-motion';

  
  
  const Tables = () => {
    const navigate = useNavigate();
    const [queryParameters] = useSearchParams();

    //Accedemos a los valores
    var numeroP = queryParameters.get('n');
    var idenfP = queryParameters.get('idenf');

    const [equipos, setEquipos] = useState({});
    const [reportes, setReportes] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      axios.get('http://localhost:8000/odoo/ge/',{
        params: { idenf: idenfP }
      })
      .then(response => {
        setEquipos(response.data);
        return axios.get('http://localhost:8000/odoo/grs/',{
          params: { idenf: idenfP }
        });
      })
      .then(response => {
        setReportes(response.data);
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
                <CCardHeader as="h5">Equipo #{idenfP}</CCardHeader>
                <CRow>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Información de el equipo</CCardTitle>
                      <CCardText>
                        <b>Identificador:</b> {equipos.x_name} <br/>
                        <b>Equipo:</b> {equipos.x_studio_tipo ? equipos.x_studio_tipo[1] : ''}
                      </CCardText>
                      
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle></CCardTitle>
                      <CCardText>
                      <b>Marca:</b> {equipos.x_studio_marca ? equipos.x_studio_marca[1] : ''} <br/>
                      <b>Modelo:</b> {equipos.x_studio_modelo ? equipos.x_studio_modelo[1] : ''}  <br/>
                      <b>Serie:</b> {equipos.x_studio_serie}
                      </CCardText>
                      
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCard>
        </CCol>
        <CCol xs={12}>
          {reportes.length!==0 ?
          <CCard className="mb-4">
          
          <CTable hover>
                  <CTableHead color='light'>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Reporte</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Encargado</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Tecnico Asignado</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Estado</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                  {!idenfP ? null : Array.isArray(reportes) ? reportes.sort((a, b) => b.id - a.id).slice((activePage-1)*limit,limit*activePage).map(
                  ({ x_name, x_studio_encargado, x_studio_tecnico, x_estado }, key) => {
                    return(
                      <CTableRow onClick={() => rediTo('/polizas/poliza/equipo/reporte?n='+numeroP+'&idenf='+idenfP+'&rid='+x_name)} key={key}>
                        <CTableHeaderCell className='text-primary' style={{"textDecoration": "underline", "cursor": "pointer"}} scope="row">{x_name}</CTableHeaderCell>
                        <CTableDataCell>{x_studio_encargado}</CTableDataCell>
                        <CTableDataCell>{x_studio_tecnico}</CTableDataCell>
                        <CTableDataCell><CBadge color={x_estado==='Pendiente' ? 'warning' : x_estado==='Inconcluso' ? 'danger' : x_estado==='Finalizado' ? 'success' : 'info'}>{x_estado}</CBadge></CTableDataCell>
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
                  total={reportes.length}
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
          <CCardHeader>Reportes</CCardHeader>
          <CCardBody>
            <CCardTitle>No hay reportes</CCardTitle>
            <CCardText>Este equipo aún no posee reportes.</CCardText>
          </CCardBody>
          </CCard>
          }
        </CCol>
      </CRow>
    )
  }
  
  export default Tables
  