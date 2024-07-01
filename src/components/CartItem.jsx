function CartItem({
    itemName,
    itemPrice,
    quantity,
    removeFromCart,
    updateQuantity,
  }) {
    return (
      <div>
        <p>{itemName}</p>
        <p>{itemPrice}$</p>
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            const newQuantity = e.target.value;
            updateQuantity(newQuantity);
          }}
        />
        <button onClick={removeFromCart}>Remove</button>
      </div>
    );
  }
  
  export default CartItem;
  