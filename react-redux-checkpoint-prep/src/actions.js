export const ADD_ITEM_TO_REGISTRY = "ADD_ITEM_TO_REGISTRY";

export const createNewItemAction = item => ({
  type: ADD_ITEM_TO_REGISTRY,
  item: item
});
