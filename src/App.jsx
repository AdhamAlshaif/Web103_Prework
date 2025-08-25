import React from 'react'
import { useRoutes } from 'react-router-dom'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewCreator from './pages/ViewCreator'
import ShowCreaters from './pages/ShowCreator'
import Home from './pages/Home'
import Card from './components/Card'
import './App.css'


function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/streamers', element: <ShowCreaters /> },
    { path: '/add', element: <AddCreator /> },
    { path: '/viewcreator/:id', element: <ViewCreator /> },
    { path: '/EditCreator/:id', element: <EditCreator /> }
  ])

  return (
    <>
      {routes}
    </>
  )
}

export default App
