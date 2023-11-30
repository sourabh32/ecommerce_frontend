import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './redux/store.js'
import {Provider} from "react-redux"
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from './pages/Login.jsx'
import ProductDescription from './pages/ProductDescription.jsx'
import Register from './pages/Register.jsx'
import Cart from './pages/Cart.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App />

  },{
    path:"/product/:id",
    element:<ProductDescription />
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/register",
    element:<Register />
  },
  {
    path:"/cart",
    element:<Cart />
  }
])

export const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
    staleTime:10000
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <QueryClientProvider client={queryClient}>
<Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </QueryClientProvider>
  ,
)
