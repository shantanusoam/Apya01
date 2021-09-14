import ShopActionsTypes from "./shop.type";

export const updateColections = (collectionsMap) => ({
    type: ShopActionsTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})