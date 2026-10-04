import { useState } from 'react'
import Homepage from './pages/Homepage'
import { createBrowserRouter, RouterProvider } from "react-router"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },

])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
