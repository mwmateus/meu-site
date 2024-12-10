import styled from 'styled-components';

export const TableContainer = styled.div`
  margin: 1rem 0;
  
  .MuiPaper-root {
    overflow: hidden;
    border-radius: 8px;
  }
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: white;
  font-size: 1.1rem;
  
  strong {
    font-weight: 600;
  }
`;