import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AddInfoLinksBox = styled.div`
  padding: 8px;
  border-top: 1px solid rgb(78, 76, 76, 0.5);
  border-bottom: 1px solid rgb(78, 76, 76, 0.5);
`;

export const AddInfoLinksTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 8px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  color: #000000;

  :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    color: #b81a2f;
  }

  &.active {
    color: #b81a2f;
  }
`;
