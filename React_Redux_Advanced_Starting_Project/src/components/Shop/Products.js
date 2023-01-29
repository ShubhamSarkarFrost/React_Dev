import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 100,
        title: 'James Cameron - Avatar',
        description: 'Welcome to the Wonderfull World of Avatars'
    },
    {
        id: 'p2',
        price: 120,
        title: 'Assassins Creed ',
        description: 'Nothing is Impossible , Everything is Permitted'
    }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {DUMMY_PRODUCTS.map((product) =>(
              <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.id}
                  price={product.price}
                  description={product.description}
              />
          ))}
      </ul>
    </section>
  );
};

export default Products;
