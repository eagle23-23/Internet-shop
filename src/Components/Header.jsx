import React, {useState} from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import Orders from './Orders';

const showOrders = (props) => {
    let sum = 0;
    props.order.forEach(el => sum += Number.parseFloat(el.price))
    return(
        <>
        {props.order.map(el => (
            <Orders onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className='cost'>Overall cost is {new Intl.NumberFormat().format(sum)}$</p>
        </>
    )
}

const showNothing = () => {
    return(
        <div className='empty'>
            <h2> Cart is empty... </h2>
        </div>
    )
}

function Header(props){

    let [cartOpen, setCartOpen] = useState(false);

    return(
    <header>
        <div className='logo'>
            <span>Facilities for Houses</span>
            <ul className='nav'>
                <li>About Us</li>
                <li>Contacts</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shoppingCart ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className='shoppingCartDisplay'>
                        {props.order.length > 0 ? 
                        showOrders(props) : showNothing()}
                    </div>
                )}
        </div>
        <div className='presentation'>
        </div>
    </header>
    );
}

export default Header
