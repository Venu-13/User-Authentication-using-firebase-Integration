import React from 'react';
import LoginUp from './LoginUp';
import LoggedIn from './LoggedIn';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <LoginUp />
  },
  {
    path: '/LoggedIn',
    element: <LoggedIn />
  }
]);



  return (
    <div className="bg-gradient-to-br from-cyan-400 to-green-500 h-full">
     <RouterProvider router = { appRouter }/>
    </div>
  )
}

export default App;