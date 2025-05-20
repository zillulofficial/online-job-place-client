import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Components/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import AboutUsDetails from './Pages/AboutUsDetails/AboutUsDetails';
import JobDetails from './Pages/JobDetails/JobDetails';
import AddJobDemi from './Pages/AddJobDemi/AddJobDemi';
import MyPostDemi from './Pages/MyPostDemi/MyPostDemi';
import UpdateJobDemi from './Pages/UpdateJobDemi/UpdateJobDemi';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import MyBidsDemi from './Pages/MyBidsDemi/MyBidsDemi';
import BidRequests from './Pages/BidRequests/BidRequests';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AllJobs from './Pages/AllJobs/AllJobs';
import Blogs from './Pages/Blogs/Blogs';
import ContactUs from './Pages/ContactUs/ContactUs';


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/aboutUs',
        element: <AboutUsDetails></AboutUsDetails>
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/job/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateJobDemi></UpdateJobDemi></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path: '/addJob',
        element: <PrivateRoute><AddJobDemi></AddJobDemi></PrivateRoute>
      },
      {
        path: '/myPostedJobs',
        element: <PrivateRoute><MyPostDemi></MyPostDemi></PrivateRoute>
      },
      {
        path: '/myBids',
        element: <PrivateRoute><MyBidsDemi></MyBidsDemi></PrivateRoute>
      },
      {
        path: '/bidReq',
        element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>
      },
      {
        path: '/allJobs',
        element: <AllJobs></AllJobs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
