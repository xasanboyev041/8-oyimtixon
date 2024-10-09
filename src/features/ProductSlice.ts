import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json');
  return response.data;
});

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image_link: string;
  liked: boolean;
  variants: string[];
}

interface ProductState {
  items: Product[];
  cart: Product[];
  status: 'idle' | 'loading' | 'failed';
  likedProducts: string[]; 
}

const initialState: ProductState = {
  items: [],
  cart: [],
  status: 'idle',
  likedProducts: []
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<string>) => {
      const index = state.likedProducts.indexOf(action.payload);
      if (index >= 0) {
        state.likedProducts.splice(index, 1);
      } else {
        state.likedProducts.push(action.payload);
      }
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(product => product.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { toggleLike, addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;
