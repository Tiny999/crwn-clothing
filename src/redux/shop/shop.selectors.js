import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.shopItems
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopItems],
    collections => collections ? collections[collectionUrlParam] : null
)


export const selectCollectionsForPreview = createSelector(
    [selectShopItems],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectIsCollectionFetching = createSelector(
    [selectShop], 
    shop => shop.isFetching
)

export const selectIsCollectonsLoaded = createSelector(
    [selectShop], 
    shop => !!shop.shopItems
) 