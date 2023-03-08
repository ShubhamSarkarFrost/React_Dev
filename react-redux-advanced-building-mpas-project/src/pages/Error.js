import { Link } from 'react-router-dom';
import pic from '../images/404_Error_Image.jpg';
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    
    return <>
    
      <MainNavigation/>
      <img src={pic} alt="404_Image"></img>
      <p>Could Not Find This Page <Link to="/">Click here to Home Page</Link> </p>
    </>    
}

export default ErrorPage;