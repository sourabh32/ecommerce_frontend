import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './redux/store.js'
import {Provider} from "react-redux"
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
<<<<<<< HEAD

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Login from './pages/Login.jsx'
import ProductDescription from './pages/ProductDescription.jsx'
import Register from './pages/Register.jsx'
import Cart from './pages/Cart.jsx'

=======
import ProductDescription from './ProductDescription.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

>>>>>>> a8d0f2cf463e45516b6e8a2046503d2f71f9aec4


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />

  },{
    path:"/product/:id",
    element:<ProductDescription />
<<<<<<< HEAD
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
=======
  }
])

const queryClient = new QueryClient({
>>>>>>> a8d0f2cf463e45516b6e8a2046503d2f71f9aec4
  defaultOptions:{
    queries:{
    staleTime:10000
    }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
  
  <QueryClientProvider client={queryClient}>
<Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
=======
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
>>>>>>> a8d0f2cf463e45516b6e8a2046503d2f71f9aec4
    </QueryClientProvider>
  ,
)
