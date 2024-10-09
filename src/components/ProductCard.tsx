import { Product } from "../features/productSlice";
import styled from 'styled-components';
import { useAppDispatch } from '../store/hooks';
import { toggleLike, addToCart } from '../features/productSlice';

const Card = styled.div`
  width: 250px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
  }
`;

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  return (
    <Card>
      <img src={product.image_link} alt={product.name} />
      <h2>{product.name}</h2>
      <button onClick={() => dispatch(toggleLike(product.id))}>
        {product.liked ? 'Unlike' : 'Like'}
      </button>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </Card>
  );
};

export default ProductCard;
