const initialState = {
    lastViewedItems: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_LAST_VIEWED_ITEM':
        const updatedItems = [...state.lastViewedItems, action.payload];
        if (updatedItems.length > 5) {
          updatedItems.shift(); // Remove the oldest item if the list exceeds 5 items
        }
        return {
          ...state,
          lastViewedItems: updatedItems,
        };
      default:
        return state;
    }
  };

  export default productReducer;