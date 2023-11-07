import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductDescription from './ProductDescription.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App />

  },{
    path:"/product/:id",
    element:<ProductDescription />
  }
])

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
    staleTime:10000
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  ,
)
