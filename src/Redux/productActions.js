export const addLastViewedItem = (item) => {
    return {
      type: 'ADD_LAST_VIEWED_ITEM',
      payload: item,
    };
  };