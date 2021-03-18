import Button from '@material-ui/core/Button';
//types
import { VehicleType } from '../App';
//styles
import { Wrapper } from './Item.styles';



type Props = {
    item: VehicleType;
    handleAddToCart: (clickedItem: VehicleType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart})  => (
    <Wrapper>        
        <div>
            <p>{item.make}</p>
            <h3>{item.model}</h3>
            <p>{item.price}</p> 
                         
        </div>
        <Button onClick={()=> handleAddToCart(item)}>Add to cart</Button> 
    </Wrapper>
);
export default Item;