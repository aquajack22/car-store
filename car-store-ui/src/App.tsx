import {useQuery} from 'react-query';
import {Wrapper} from './App.styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Item from './item/item';

//types 
export type VehicleType = {
  date_added: string;
  licensed: boolean;
  make: string;
  model: string;
  price: number;
  year_model: number;
  _id: number;
  amount:number;
};
export type CartItemType = {
  _id: string;
  name: string;
  location: {
    latitude: string;
    longitude: string;
  };
  cars: {
    location: string;
    vehicles: [{
      date_added: string;
      licensed: boolean;
      make: string;
      model: string;
      price: number;
      year_model: number;
      _id: number;
      amount:number;
    }];
  };
 
};


const getProducts = async() : Promise<CartItemType[]> => 
  await(await fetch('http://localhost:6039/SHC/api/v1/warehouse/info')).json();

  


const App = () => {
  
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
    );

    console.log(data);

    

    const getTotalItems = () => null;
    const handleAddToCart = () => null;
    const handleRemoveFromCart = () => null;

    if(isLoading) return <LinearProgress />;
    if(error) return <div>Something went wrong..</div>
    
  return (
    
    <Wrapper>
      <Grid container spacing={3}>
        {
          data?.map(item => (
            item.cars.vehicles.map(subitem => (
              <Grid item key={subitem._id} xs={12} sm={4}>
                <Item item={subitem} handleAddToCart={handleAddToCart} />
              </Grid>
            ))
            
            )
          )
        }
      </Grid>
    </Wrapper>
  );
}

export default App;
