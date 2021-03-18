import Button from '@material-ui/core/Button';
//types
import { VehicleType } from '../App';
//styles
import { Wrapper } from './CartItem.styles';

type Props = {
    item: VehicleType;
    addToCart: (clickedItem: VehicleType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>
                {item.make}
            </h3>
            <div className="information">
                <p>
                    Price: ${item.price}
                </p>
                <p>
                    Total: ${(item.amount * item.price).toFixed(2)}
                </p>
            </div>
            <div className="buttons">
                <Button
                size="small"
                disableElevation
                variant='contained'
                onClick={()=> removeFromCart(item._id)}>
                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                size="small"
                disableElevation
                variant='contained'
                onClick={()=> addToCart(item)}>
                    +
                </Button>
            </div>
        </div>
    </Wrapper>
);

export default CartItem;