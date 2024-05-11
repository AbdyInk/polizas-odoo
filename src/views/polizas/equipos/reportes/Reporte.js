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
    CFormCheck,
    CSpinner,
    CBadge,
    CButton,
    
  } from '@coreui/react'
  
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  
  import {useAsyncError, useNavigate, useSearchParams} from 'react-router-dom';

  
  
  const Tables = () => {
    const navigate = useNavigate();
    const [queryParameters] = useSearchParams();

    //Accedemos a los valores
    var ridP = queryParameters.get('rid');

    const [reportes, setReportes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      axios.get('http://localhost:8000/odoo/gr/',{
        params: { idenf: ridP }
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

    const [currentPage, setCurrentPage] = useState(1)
      
    return (
      <CRow>
            {isLoading===true ? <CSpinner color="primary" /> :
        <CCol xs={12}>
          {reportes.x_studio_reporte ? <div className='ms-auto text-end'>
            <CButton as="a" download={`${ridP}.pdf`} variant="outline" href={`data:application/pdf;base64,${reportes.x_studio_reporte}`} color='danger'>Descargar reporte</CButton>
          </div>: ''}
            <CCard>
                <CCardHeader as="h5" className="px-4">
                  Reporte #{ridP}
                  
                    <span className="ms-2"><CBadge color={reportes.x_estado==='Pendiente' ? 'warning' : reportes.x_estado==='Inconcluso' ? 'danger' : reportes.x_estado==='Finalizado' ? 'success' : 'info'}>{reportes.x_estado}</CBadge></span> 
                  
                  </CCardHeader>
              <CRow>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Datos del Equipo</CCardTitle>
                      <CCardText>
                        <b>Identificador:</b> {reportes.x_name} <br/>
                        <b>Equipo:</b> {reportes.x_studio_tipo ? reportes.x_studio_tipo[1] : ''} <br/>
                        <b>Identificador del equipo:</b> {reportes.x_studio_equipo ? reportes.x_studio_equipo[1] : ''} <br/>
                        <b>Parte:</b> {reportes.x_studio_parte} <br/>
                        <b>Modelo:</b> {reportes.x_studio_modelo ? reportes.x_studio_modelo[1] : ''} <br/>
                        <b>Serie:</b> {reportes.x_studio_serie}
                      </CCardText>
                      
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Datos del Servicio</CCardTitle>
                      <CCardText>
                        <b>Tecnico Asignado:</b> {reportes.x_studio_tecnico} <br/>
                        <b>Folio:</b> {reportes.x_studio_folio} <br/>
                        <b>Fecha de mantenimiento:</b> {reportes.x_studio_fecha_mantenimiento} <br/>
                        <b>Fecha de siguiente mantenimiento:</b> {reportes.x_studio_siguiente_mantenimiento} <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_mantenimiento_asignado}/> <b>Mantenimiento asignado</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_revision}/> <b>Revisión y/o Reparación</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_reemplazo}/> <b>Reemplazo de equipo</b>
                      </CCardText>
                      
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
              <CRow>
                <CCol sm={12}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Datos del cliente</CCardTitle>
                      <CCardText>
                      <b>Encargado:</b> {reportes.x_studio_encargado} <br/>
                      <b>Area:</b> {reportes.x_studio_area} <br/>
                      <b>Dirección:</b> {reportes.x_studio_direccion ? reportes.x_studio_direccion[1] : ''}
                      </CCardText>
                      
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCard>
            <CCard>
                <CCardHeader as="h5">Checklist mantenimiento</CCardHeader>
                <CRow>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>

                      {reportes.x_studio_tipo[0]===2 &&
                      <CCardText>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_limpieza_interna}/> <b>Limpieza interna</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_sensores}/> <b>Sensores</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_cabezal}/> <b>Cabezal</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_rodillo}/> <b>Rodillo</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_bandas}/> <b>Bandas</b> <br/>
                      </CCardText>}
                      {reportes.x_studio_tipo[0]===1 &&
                      <CCardText>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_limpieza_interna}/> <b>Limpieza interna</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_bateria}/> <b>Bateria</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_lectoras}/> <b>Lectoras</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_chapa}/> <b>Chapa</b> <br/>
                      </CCardText>}
                      {reportes.x_studio_tipo[0]===3 &&
                      <CCardText>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_limpieza_interna}/> <b>Limpieza interna</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_filtros}/> <b>Filtros de aire</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_firmware}/> <b>Firmware</b> <br/>
                      </CCardText>}
                      
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                    {reportes.x_studio_tipo[0]===2 &&
                      <CCardText>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_limpieza_externa}/> <b>Limpieza externa</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_configuracion}/> <b>Configuración</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_presion}/> <b>Presión</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_calidad}/> <b>Prueba de calidad</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_otros}/> <b>Otros</b> <br/>
                      </CCardText>}
                      {reportes.x_studio_tipo[0]===1 &&
                      <CCardText>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_limpieza_interna}/> <b>Limpieza interna</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_montaje}/> <b>Montaje</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_cableado}/> <b>Cableado</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_pluma}/> <b>Pluma</b> <br/>
                      </CCardText>}
                      {reportes.x_studio_tipo[0]===3 &&
                      <CCardText>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_limpieza_interna}/> <b>Limpieza interna</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_desague}/> <b>Bandeja de desagüe</b> <br/>
                        <CFormCheck disabled defaultChecked={reportes.x_studio_c_red}/> <b>Red</b> <br/>
                      </CCardText>}
                      
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCard>
            <CCard>
                <CCardHeader as="h5">Reporte</CCardHeader>
              <CRow>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Falla y Solución</CCardTitle>
                      <CCardText>
                        {reportes.x_studio_falla}
                      </CCardText>
                      
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol sm={6}>
                  <CCard>
                  {reportes.x_studio_c_otros===true ?
                  <CCardBody>
                    <CCardTitle>Otros</CCardTitle>
                    <CCardText>
                      {reportes.x_studio_otros}
                    </CCardText>
                    </CCardBody>
                    :
                    <CCardBody>
                      <CCardTitle>Observaciones tecnicas</CCardTitle>
                      <CCardText>
                        {reportes.x_studio_observaciones}
                      </CCardText>
                    </CCardBody>
                    }
                  </CCard>
                </CCol>
              
            {reportes.x_studio_c_otros===true &&
            
                <CCol sm={6}>
                  <CCard>
                  <CCardBody>
                      <CCardTitle>Observaciones tecnicas</CCardTitle>
                      <CCardText>
                        {reportes.x_studio_observaciones}
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>}
              </CRow>
            </CCard>
            <CCard>
                <CCardHeader as="h5">Nombre y Firma</CCardHeader>
              <CRow>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Nombre</CCardTitle>
                      <CCardText>
                        {reportes.x_studio_nombre}
                      </CCardText>
                      
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Firma</CCardTitle>
                      <CCardText>
                      {reportes.x_studio_firma ? <img src={`data:image/png;base64,${reportes.x_studio_firma}`} /> : ''}
                      </CCardText>
                    </CCardBody>
                    
                  </CCard>
                </CCol>
              </CRow>
              
            </CCard>
            <CCard>
                <CCardHeader as="h5">Evidencia fotografica</CCardHeader>
              <CRow>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Antes</CCardTitle>
                      <CCardText>
                      {reportes.x_studio_foto1_a ? <img src={`data:image/png;base64,${reportes.x_studio_foto1_a}`} /> : ''}<br/>
                      {reportes.x_studio_foto2_a ? <img src={`data:image/png;base64,${reportes.x_studio_foto2_a}`} /> : ''}<br/>
                      {reportes.x_studio_foto3_a ? <img src={`data:image/png;base64,${reportes.x_studio_foto3_a}`} /> : ''}<br/>
                      {reportes.x_studio_foto4_a ? <img src={`data:image/png;base64,${reportes.x_studio_foto4_a}`} /> : ''}<br/>
                      {reportes.x_studio_foto5_a ? <img src={`data:image/png;base64,${reportes.x_studio_foto5_a}`} /> : ''}<br/>
                      </CCardText>
                      
                    </CCardBody>
                  </CCard>
                </CCol>
                <CCol sm={6}>
                  <CCard>
                    <CCardBody>
                      <CCardTitle>Despues</CCardTitle>
                      <CCardText>
                      {reportes.x_studio_foto1_d ? <img src={`data:image/png;base64,${reportes.x_studio_foto1_d}`} /> : ''}<br/>
                      {reportes.x_studio_foto2_d ? <img src={`data:image/png;base64,${reportes.x_studio_foto2_d}`} /> : ''}<br/>
                      {reportes.x_studio_foto3_d ? <img src={`data:image/png;base64,${reportes.x_studio_foto3_d}`} /> : ''}<br/>
                      {reportes.x_studio_foto4_d ? <img src={`data:image/png;base64,${reportes.x_studio_foto4_d}`} /> : ''}<br/>
                      {reportes.x_studio_foto5_d ? <img src={`data:image/png;base64,${reportes.x_studio_foto5_d}`} /> : ''}<br/>
                      </CCardText>
                    </CCardBody>
                    
                  </CCard>
                </CCol>
              </CRow>
              
            </CCard>
        </CCol>}
      </CRow>
    )
  }
  
  export default Tables
  