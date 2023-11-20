import React, { useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/material/styles';

const CopyButton = styled(IconButton)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const TopicContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const ShowData = ({ results }) => {
  const [copiedRowIndex, setCopiedRowIndex] = useState(null);

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'name',
      headerName: 'Topics',
      width: 800,
      renderCell: (params) => {
        const { value, row } = params;

        const handleCopy = () => {
          // Logic for copying the topic
          navigator.clipboard.writeText(value);
          setCopiedRowIndex(row.id);
        };

        const isCopied = row.id === copiedRowIndex;

        return (
          <TopicContainer>
            <span>{value}</span>
            <CopyButton color="primary" aria-label="copy" onClick={handleCopy}>
              {isCopied ? <CheckCircleOutlineIcon fontSize="small" /> : <FileCopyIcon fontSize="small" />}
            </CopyButton>
          </TopicContainer>
        );
      },
    },
  ];

  const handleRowClick = (params, event) => {
    const isCheckboxCell = event.target.tagName === 'INPUT';
    if (isCheckboxCell) {
      event.stopPropagation(); // Prevent row selection
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ height: 720, width: '80%' }}>
        <DataGrid
          rows={results}
          columns={columns}
          checkboxSelection
          autoHeight
          initialState={{
            pagination: {
              paginationModel: { pageSize: 3, page: 0 },
            },
          }}
          pageSizeOptions={[3]}
          rowsPerPageOptions={[3]}
          components={{
            Toolbar: GridToolbarContainer,
          }}
          componentsProps={{
            toolbar: {
              fullWidth: true,
              filterButton: <GridToolbarFilterButton />,
              columnsButton: <GridToolbarColumnsButton />,
              exportButton: <GridToolbarExport />,
            },
          }}
          onRowClick={handleRowClick}
          sx={{
            '& .MuiDataGrid-cell': {
              color: 'black',
            },
            backgroundColor: '#808080',
            borderRadius: 5,
          }}
        />
      </div>
    </div>
  );
};

export default ShowData;
