import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrencyState {
  currency: 'USD' | 'UZS' | 'EUR';
  exchangeRates: { [key: string]: number }; 
}

const initialState: CurrencyState = {
  currency: 'USD',
  exchangeRates: {
    USD: 1,
    EUR: 0.85,
    UZS: 10850
  }
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<'USD' | 'UZS' | 'EUR'>) => {
      state.currency = action.payload;
    }
  }
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
