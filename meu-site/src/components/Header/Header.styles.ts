import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: 8px;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;

  p {
    font-size: 1.1rem;
    
    strong {
      margin-right: 0.5rem;
    }
  }
`;