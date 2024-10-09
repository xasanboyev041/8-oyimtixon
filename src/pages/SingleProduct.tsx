import { useParams } from 'react-router-dom';
import { useAppSelector }  from '../store/hooks';
import styled from 'styled-components';

const SingleProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    max-width: 300px;
  }
`;

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const product = useAppSelector((state) =>
    state.products.items.find((item) => item.id === id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <SingleProductContainer>
      <img src={product.image_link} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>Variants:</h3>
      <ul>
        {product.variants.map((variant, index) => (
          <li key={index}>{variant}</li>
        ))}
      </ul>
    </SingleProductContainer>
  );
};

export default SingleProduct;
