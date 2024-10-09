import { useAppDispatch, }  from '../store/hooks';
import { setCurrency } from '../features/currencySlice';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
`;

const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <NavbarContainer>
      <h1>Makeup Store</h1>
      <select
        onChange={(e) => dispatch(setCurrency(e.target.value as 'USD' | 'UZS' | 'EUR'))}
      >
        <option value="USD">USD</option>
        <option value="UZS">UZS</option>
        <option value="EUR">EUR</option>
      </select>
    </NavbarContainer>
  );
};

export default Navbar;
