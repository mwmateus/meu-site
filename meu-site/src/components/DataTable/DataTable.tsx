import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { TableContainer, TotalRow } from './styles';

interface Column {
  header: string;
  key: string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  totalLabel: string;
  totalValue: string;
}

export function DataTable({ columns, data, totalLabel, totalValue }: DataTableProps) {
  const gridColumns = columns.map((col) => ({
    field: col.key,
    headerName: col.header,
    flex: 1,
    align: typeof data[0]?.[col.key] === 'number' ? 'right' : 'left',
    headerAlign: typeof data[0]?.[col.key] === 'number' ? 'right' : 'left',
  }));

  const rows = data.map((row, index) => ({
    id: index,
    ...row,
  }));

  return (
    <TableContainer>
      <Paper elevation={3}>
        <DataGrid
          rows={rows}
          columns={gridColumns}
          autoHeight
          disableRowSelectionOnClick
          hideFooter
          sx={{
            '& .MuiDataGrid-cell': {
              fontSize: '1rem',
            },
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: 'var(--primary-color)',
              color: 'white',
            },
          }}
        />
        <TotalRow>
          <span>{totalLabel}</span>
          <strong>{totalValue}</strong>
        </TotalRow>
      </Paper>
    </TableContainer>
  );
}