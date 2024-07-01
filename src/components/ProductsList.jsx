import { connect } from "react-redux";

function ProductsList({ items, addToCart }) {
  return (
    <ul>
      {items.map((i) => (
        <li key={i.id}>
          {i.id} - {i.title} - ${i.price}
          <button>Add</button>
        </li>
      ))}
    </ul>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: ({ id, itemName, itemPrice }) =>
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id,
          itemName,
          itemPrice,
        },
      }),
  };
}

export default connect(null, mapDispatchToProps)(ProductsList);
