// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';


import { configureStore,  ThunkAction, Action ,combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import cartSlice from '../features/cart/cart-slice';
import { productListSlice } from '../features/products/slice-list';

import { persistStore, persistReducer } from 'redux-persist';
import orderListSlice from '../features/orders/slice-list';
import productDetailsSlice from '../features/products/slice-details';
import loginSlice from '../features/users/login-slice';
import { authorizationProvider } from '../utils/auth-axios';
import userDetailsSlice from '../features/users/user-details';
import userListSlice from '../features/users/user-list';
import userOrderSlice from '../features/orders/user-orders';
import orderDetailSlice from '../features/orders/order-details';
import productFilterSlice from '../features/products/search-list';
import counterReducer from '../features/counter/counterSlice';


const reducers = combineReducers({
  productList: productListSlice.reducer,
  cart: cartSlice.reducer,
  productDetail: productDetailsSlice.reducer,
  productFilter: productFilterSlice.reducer,
  //auth
  login: loginSlice.reducer,
  userDetails: userDetailsSlice.reducer,
  userList: userListSlice.reducer,
  //orders
  orders: orderListSlice.reducer,
  userOrder: userOrderSlice.reducer,
  orderDetail: orderDetailSlice.reducer,
  // counter 
  counter: counterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

authorizationProvider(store);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
