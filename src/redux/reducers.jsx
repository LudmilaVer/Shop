const initialState = {
    items: [
      {
        id: 5,
        quantity: 11,
        itemName: "popcorn",
        itemPrice: 50,
      },
    ],
  };
  
  // ADD_TO_CART REMOVE_FROM_CART UPDATE_CART_QUANTITY
  
  export function cartReducer(oldState = initialState, action) {
    switch (action.type) {
      case "ADD_TO_CART": {
        // Dobavlenie v korzinu
        const itemToAdd = action.payload;
        const { id, itemName, itemPrice } = itemToAdd;
        const alreadyExists = oldState.items.find((i) => i.id === id);
        if (!alreadyExists) {
          return {
            ...oldState,
            items: [
              ...oldState.items,
              {
                id: id,
                itemName: itemName,
                itemPrice: itemPrice,
                quantity: 1,
              },
            ],
          };
        } else {
          return {
            ...oldState,
            items: oldState.items.map((i) =>
              i.id !== id ? i : { ...i, quantity: i.quantity + 1 }
            ),
          };
        }
      }
      case "REMOVE_FROM_CART": {
        const itemToDelete = action.payload;
        const { id } = itemToDelete;
        return {
          ...oldState,
          items: oldState.items.filter((i) => i.id !== id),
        };
      }
      case "UPDATE_CART_QUANTITY": {
        const { id, newQuantity } = action.payload;
  
        return {
          ...oldState,
          items: oldState.items.map((i) =>
            i.id !== id ? i : { ...i, quantity: newQuantity }
          ),
        };
      }
      default:
        return oldState;
    }
  }
  