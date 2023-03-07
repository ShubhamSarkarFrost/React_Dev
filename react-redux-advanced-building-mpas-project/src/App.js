import {createBrowserRouter, 
  RouterProvider, 
 // createRoutesFromElements, 
 //Route
} from 'react-router-dom'
import HomePage from "./pages/Home";
import ProductsPage from './pages/Products';
import RootLyout from './pages/Root';

// ************************ A Different way to Define Routes ********************************//
// const routesDefinations = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>}/>
//     <Route path='/products' element={<ProductsPage/>}/>
//   </Route>
// );      


const router = createBrowserRouter([
  {path: '/', 
  element:<RootLyout/> , 
  children: [
    {path: '/', element: <HomePage />},
    {path: '/products', element: <ProductsPage/>}
  ]},
])


function App() {
  return <RouterProvider router={router}/>
}

export default App;
