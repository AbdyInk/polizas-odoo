import React from 'react'

const Polizas = React.lazy(() => import('./views/polizas/Polizas'))
const Poliza = React.lazy(() => import('./views/polizas/Poliza'))
const Equipo = React.lazy(() => import('./views/polizas/equipos/Equipo'))
const Reporte = React.lazy(() => import('./views/polizas/equipos/reportes/Reporte'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/polizas', name: 'Polizas', element: Polizas },
  { path: '/polizas/poliza', name: 'Poliza', element: Poliza },
  { path: '/polizas/poliza/equipo', name: 'Equipo', element: Equipo },
  { path: '/polizas/poliza/equipo/reporte', name: 'Reporte', element: Reporte },
]

export default routes
