import React from 'react';
import { HeaderContainer, SubHeader } from './Header.styles';
import { FaIndustry, FaCalendarAlt } from 'react-icons/fa';

interface HeaderProps {
  cliente: string;
  periodo: string;
}

export function Header({ cliente, periodo }: HeaderProps) {
  return (
    <HeaderContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Controle Mensal de Cargas - Madeireira Walter</h1>
      <SubHeader>
        <p>
          <FaIndustry style={{ marginRight: '8px' }} />
          <strong>Cliente:</strong> {cliente}
        </p>
        <p>
          <FaCalendarAlt style={{ marginRight: '8px' }} />
          <strong>Período de Referência:</strong> {periodo}
        </p>
      </SubHeader>
    </HeaderContainer>
  );
}