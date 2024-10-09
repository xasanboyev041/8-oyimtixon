import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchProducts } from '../features/productSlice';
import ProductCard  from '../components/ProductCard';
import styled from 'styled-components';

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchInput
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ProductList>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </div>
  );
};

export default Home;
