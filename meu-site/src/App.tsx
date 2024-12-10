import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { Header } from './components/Header/Header';
import { Section } from './components/Section/Section';
import { DataTable } from './components/DataTable/DataTable';
import { Summary } from './components/Summary/Summary';
import { Footer } from './components/Footer/Footer';
import { dormentesData, cavacosData, resumoData } from './data/tableData';
import { formatCurrency, formatNumber } from './utils/formatters';
import { GlobalStyles } from './styles/GlobalStyles';

const dormentesColumns = [
  { header: 'Data da Entrega', key: 'dataEntrega' },
  { header: 'Especificação', key: 'especificacao' },
  { header: 'Quantidade (PÇ)', key: 'quantidade' },
  { header: 'Valor Unitário (R$)', key: 'valorUnitario' },
  { header: 'Valor Total (R$)', key: 'valorTotal' }
];

const cavacosColumns = [
  { header: 'Data da Entrega', key: 'dataEntrega' },
  { header: 'Quantidade (M³)', key: 'quantidade' },
  { header: 'Valor Total (R$)', key: 'valorTotal' }
];

const resumoColumns = [
  { header: 'Descrição', key: 'descricao' },
  { header: 'Quantidade Total (PÇ)', key: 'quantidadeTotal' },
  { header: 'Valor Unitário (R$)', key: 'valorUnitario' },
  { header: 'Valor Total (R$)', key: 'valorTotal' }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="container">
        <Header cliente="Larssen" periodo="Dezembro/2024" />
        
        <Section title="1. Movimentação de Dormentes">
          <DataTable
            columns={dormentesColumns}
            data={dormentesData}
            totalLabel="Subtotal Dormentes"
            totalValue={formatCurrency(31500.00)}
          />
        </Section>

        <Section title="2. Movimentação de Cavacos">
          <DataTable
            columns={cavacosColumns}
            data={cavacosData}
            totalLabel="Subtotal Cavacos"
            totalValue={formatCurrency(4875.00)}
          />
        </Section>

        <Summary dormentesTotal={31500.00} cavacosTotal={4875.00} />

        <Section title="3. Resumo de Movimentação">
          <DataTable
            columns={resumoColumns}
            data={resumoData}
            totalLabel="Valor Total Geral"
            totalValue={formatCurrency(31500.00)}
          />
        </Section>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;