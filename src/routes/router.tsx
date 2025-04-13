import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Recommendation from '../pages/Recommendation'
// import CaseStudy from '../pages/CaseStudy'
// import Contact from '../pages/Contact'
import ErrorPage from '../pages/ErrorPage' 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return { welcomeMessage: 'Welcome to the Home page!' }
        },
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: async () => {
          // simulate or fetch dashboard data
          return { stats: [1, 2, 3] }
        },
      },
      {
        path: 'recommendations',
        element: <Recommendation />,
      },
    //   {
    //     path: 'case-study',
    //     element: <CaseStudy />,
    //   },
    //   {
    //     path: 'contact',
    //     element: <Contact />,
    //     action: async ({ request }) => {
    //       const formData = await request.formData()
    //       console.log(formData.get('name')) // or send to API
    //       return null
    //     },
    //   },
    ],
  },
])

export default router
