import React from 'react'
import { useRoutes } from 'react-router-dom'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewCreator from './pages/ViewCreator'
import Card from './components/Card'
import './App.css'


function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Card />
    },
    {
      path: '/EditCreator/:id',
      element: <EditCreator />
    }
  ])

  return (
    <>
      {routes}
    </>
  )
}

export default App
