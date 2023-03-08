import { Link, useNavigate } from "react-router-dom";


function HomePage() {
  
  const navigate = useNavigate();

  function navigationHandler() {
      navigate('/products');
  }

  return(
    <div> 
    <h1>My Home Page</h1>
    <p>Go to<Link to="/products">the list of Products</Link></p>
    <p>
      <button onClick={navigationHandler}>Navigate</button>
    </p>
  </div>
  );
 }

export default HomePage;
