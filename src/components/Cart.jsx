import { connect } from "react-redux";

import CartItem from "./CartItem";

function Cart({ items }) {
  return (
    <div>
      <p>My cart</p>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <CartItem
              itemName={i.itemName}
              itemPrice={i.itemPrice}
              quantity={i.quantity}
              updateQuantity={() => {}}
              removeFromCart={() => {}}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(Cart);
