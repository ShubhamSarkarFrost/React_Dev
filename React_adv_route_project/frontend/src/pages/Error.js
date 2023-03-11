// import { Link } from 'react-router-dom';
// import pic from '../images/404_Error_Image.jpg';
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";

function ErrorPage() {
    
    const error = useRouteError();

    let title = 'An Error Occured'
    let message = 'Something Went Wrong!'
    // return <>
    
    //   <MainNavigation/>
    //   {/* <img src={pic} alt="404_Image"></img> */}
    //   <p>Could Not Find This Page <Link to="/">Click here to Home Page</Link> </p>
    // </>    


    if(error.status === 500){
      // message = JSON.parse(error.data).message  
      message = error.data.message
    }

    if(error.status === 404){
      title = 'Not Found!'
      message = "Could Not Find the webPage"
    }

    return<>
       <MainNavigation/>
       <PageContent  title={title}>
      <p>{message}</p>
    </PageContent>
    </>
}
export default ErrorPage;