import {useState} from 'react';
import {useQuery} from 'react-query';
//components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import {Wrapper,StyledButton} from './App.styles';
import Item from './Item/Item';
import Cart from './Cart/Cart';
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
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems,setCartItems] = useState([] as VehicleType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
    );

    console.log(data);

    

    const getTotalItems = (items: VehicleType[]) => 
      items.reduce((ack: number, item)=> ack + item.amount,0);
    const handleAddToCart = (clickedItem: VehicleType) => {
      setCartItems(prev => {
        //Is the item already in the cart
        const isItemInCart = prev.find(item =>item._id === clickedItem._id) ;
        if(isItemInCart){
          return prev.map(item=>
            item._id === clickedItem._id ? {
              ...item, amount: item.amount + 1
            } : item
          );
        }
        //first time the item is added
        return [...prev, {...clickedItem, amount: 1}];
      });
    };
    const handleRemoveFromCart = (id: number) => {
      setCartItems(prev => (
        prev.reduce((ack,item) => {
          if(item._id === id){
            if(item.amount === 1) return ack;
            return [...ack, {...item, amount: item.amount - 1}];
          } else{
            return [...ack, item];
          }
        },[] as VehicleType[])
      ))
    };

    if(isLoading) return <LinearProgress />;
    if(error) return <div>Something went wrong..</div>
    
  return (
    
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
              />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon/>
        </Badge>
      </StyledButton>
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
