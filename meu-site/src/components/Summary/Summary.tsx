import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { SummaryContainer } from './styles';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SummaryProps {
  dormentesTotal: number;
  cavacosTotal: number;
}

export function Summary({ dormentesTotal, cavacosTotal }: SummaryProps) {
  const data = {
    labels: ['Dormentes', 'Cavacos'],
    datasets: [
      {
        label: 'Valor Total (R$)',
        data: [dormentesTotal, cavacosTotal],
        backgroundColor: [
          'rgba(26, 77, 46, 0.8)',
          'rgba(45, 134, 89, 0.8)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Resumo de Valores por Categoria',
      },
    },
  };

  return (
    <SummaryContainer>
      <Bar data={data} options={options} />
    </SummaryContainer>
  );
}