import type {
  GridRowSelectionModel,
} from '@mui/x-data-grid';
import type { IUserItem, IUserTableFilters } from 'src/types/user';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Button from '@mui/material/Button';
import { Tab, Card , Grid , Table , Tooltip, TableBody, IconButton } from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';
import { useSetState } from 'src/hooks/use-set-state';

import { varAlpha } from 'src/theme/styles';
import { DashboardContent } from 'src/layouts/dashboard';
import { _roles, _userList, PROJECT_STATUS_OPTIONS } from 'src/_mock';

import { Label } from 'src/components/label';
import { toast } from 'src/components/snackbar';
import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';
import { useTable, emptyRows, rowInPage, TableNoData, getComparator, TableEmptyRows, TableHeadCustom, TableSelectedAction, TablePaginationCustom } from 'src/components/table';

import { UserTableRow } from 'src/sections/user/user-table-row';
import { UserTableToolbar } from 'src/sections/user/user-table-toolbar';
import { AppWidgetSummary } from 'src/sections/overview/app/app-widget-summary';
import { UserTableFiltersResult } from 'src/sections/user/user-table-filters-result';



const STATUS_OPTIONS = [{ value: 'all', label: 'All' }, ...PROJECT_STATUS_OPTIONS];

const TABLE_HEAD = [
  { id: 'name', label: 'Name' },
  { id: 'type', label: 'Type', width: 180 },
  { id: 'manager', label: 'Manager', width: 220 },
  { id: 'startdate', label: 'Start Date', width: 180 },
  { id: 'status', label: 'Status', width: 100 },
  { id: '', width: 88 },
];

// ----------------------------------------------------------------------

// const PUBLISH_OPTIONS = [
//   { value: 'published', label: 'Published' },
//   { value: 'draft', label: 'Draft' },
// ];

// const HIDE_COLUMNS = { category: false };

// const HIDE_COLUMNS_TOGGLABLE = ['category', 'actions'];

// ----------------------------------------------------------------------

export function ProductListView() {
  const confirmRows = useBoolean();

  const table = useTable();
  
  const confirm = useBoolean();
  
  const router = useRouter();

  // const { products, productsLoading } = useGetProducts();

  // const filters = useSetState<IProductTableFilters>({ publish: [], stock: [] });

  const [tableData, setTableData] = useState<IUserItem[]>(_userList);

  const [selectedRowIds, setSelectedRowIds] = useState<GridRowSelectionModel>([]);
  

  const filters = useSetState<IUserTableFilters>({ name: '', role: [], status: 'all' });

  
    const dataFiltered = applyFilter({
      inputData: tableData,
      comparator: getComparator(table.order, table.orderBy),
      filters: filters.state,
    });

    const canReset =
    !!filters.state.name || filters.state.role.length > 0 || filters.state.status !== 'all';
    
    const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

    const dataInPage = rowInPage(dataFiltered, table.page, table.rowsPerPage);

    const handleDeleteRow = useCallback(
      (id: string) => {
        const deleteRow = tableData.filter((row) => row.id !== id);
  
        toast.success('Delete success!');
  
        setTableData(deleteRow);
  
        table.onUpdatePageDeleteRow(dataInPage.length);
      },
      [dataInPage.length, table, tableData]
    );
  
    const handleDeleteRows = useCallback(() => {
      const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));
  
      toast.success('Delete success!');
  
      setTableData(deleteRows);
  
      table.onUpdatePageDeleteRows({
        totalRowsInPage: dataInPage.length,
        totalRowsFiltered: dataFiltered.length,
      });
    }, [dataFiltered.length, dataInPage.length, table, tableData]);
  
    const handleEditRow = useCallback(
      (id: string) => {
        router.push(paths.dashboard.user.edit(id));
      },
      [router]
    );

  // const [filterButtonEl, setFilterButtonEl] = useState<HTMLButtonElement | null>(null);

  // const [columnVisibilityModel, setColumnVisibilityModel] =
  //   useState<GridColumnVisibilityModel>(HIDE_COLUMNS);

  // useEffect(() => {
  //   if (products.length) {
  //     setTableData(products);
  //   }
  // }, [products]);

  // const canReset = filters.state.publish.length > 0 || filters.state.stock.length > 0;

  // const dataFiltered = applyFilter({ inputData: tableData, filters: filters.state });

  // const handleDeleteRow = useCallback(
  //   (id: string) => {
  //     const deleteRow = tableData.filter((row) => row.id !== id);

  //     toast.success('Delete success!');

  //     setTableData(deleteRow);
  //   },
  //   [tableData]
  // );

  // const handleDeleteRows = useCallback(() => {
  //   const deleteRows = tableData.filter((row) => !selectedRowIds.includes(row.id));

  //   toast.success('Delete success!');

  //   setTableData(deleteRows);
  // }, [selectedRowIds, tableData]);

  // const handleEditRow = useCallback(
  //   (id: string) => {
  //     router.push(paths.dashboard.product.edit(id));
  //   },
  //   [router]
  // );

  // const handleViewRow = useCallback(
  //   (id: string) => {
  //     router.push(paths.dashboard.product.details(id));
  //   },
  //   [router]
  // );

  // const CustomToolbarCallback = useCallback(
  //   () => (
  //     <CustomToolbar
  //       filters={filters}
  //       canReset={canReset}
  //       selectedRowIds={selectedRowIds}
  //       setFilterButtonEl={setFilterButtonEl}
  //       filteredResults={dataFiltered.length}
  //       onOpenConfirmDeleteRows={confirmRows.onTrue}
  //     />
  //   ),
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [filters.state, selectedRowIds]
  // );

  // const columns: GridColDef[] = [
  //   { field: 'category', headerName: 'Category', filterable: false },
  //   {
  //     field: 'name',
  //     headerName: 'Product',
  //     flex: 1,
  //     minWidth: 360,
  //     hideable: false,
  //     renderCell: (params) => (
  //       <RenderCellProduct params={params} onViewRow={() => handleViewRow(params.row.id)} />
  //     ),
  //   },
  //   {
  //     field: 'createdAt',
  //     headerName: 'Create at',
  //     width: 160,
  //     renderCell: (params) => <RenderCellCreatedAt params={params} />,
  //   },
  //   {
  //     field: 'inventoryType',
  //     headerName: 'Stock',
  //     width: 160,
  //     type: 'singleSelect',
  //     valueOptions: PRODUCT_STOCK_OPTIONS,
  //     renderCell: (params) => <RenderCellStock params={params} />,
  //   },
  //   {
  //     field: 'price',
  //     headerName: 'Price',
  //     width: 140,
  //     editable: true,
  //     renderCell: (params) => <RenderCellPrice params={params} />,
  //   },
  //   {
  //     field: 'publish',
  //     headerName: 'Publish',
  //     width: 110,
  //     type: 'singleSelect',
  //     editable: true,
  //     valueOptions: PUBLISH_OPTIONS,
  //     renderCell: (params) => <RenderCellPublish params={params} />,
  //   },
  //   {
  //     type: 'actions',
  //     field: 'actions',
  //     headerName: ' ',
  //     align: 'right',
  //     headerAlign: 'right',
  //     width: 80,
  //     sortable: false,
  //     filterable: false,
  //     disableColumnMenu: true,
  //     getActions: (params) => [
  //       <GridActionsCellItem
  //         showInMenu
  //         icon={<Iconify icon="solar:eye-bold" />}
  //         label="View"
  //         onClick={() => handleViewRow(params.row.id)}
  //       />,
  //       <GridActionsCellItem
  //         showInMenu
  //         icon={<Iconify icon="solar:pen-bold" />}
  //         label="Edit"
  //         onClick={() => handleEditRow(params.row.id)}
  //       />,
  //       <GridActionsCellItem
  //         showInMenu
  //         icon={<Iconify icon="solar:trash-bin-trash-bold" />}
  //         label="Delete"
  //         onClick={() => {
  //           handleDeleteRow(params.row.id);
  //         }}
  //         sx={{ color: 'error.main' }}
  //       />,
  //     ],
  //   },
  // ];

  // const getTogglableColumns = () =>
  //   columns
  //     .filter((column) => !HIDE_COLUMNS_TOGGLABLE.includes(column.field))
  //     .map((column) => column.field);

   const handleFilterStatus = useCallback(
      (event: React.SyntheticEvent, newValue: string) => {
        table.onResetPage();
        filters.setState({ status: newValue });
      },
      [filters, table]
    );

  return (
    <>
      <DashboardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <CustomBreadcrumbs
          heading="List"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'Projects', href: paths.dashboard.product.root },
            { name: 'List' },
          ]}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.product.new}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              New product
            </Button>
          }
          sx={{ mb: { xs: 3, md: 5 } }}
        />
        <Grid container spacing={3}>
        <Grid xs={12} md={4}>
                  <AppWidgetSummary
                    title="Total Projects"
                    total={8200}
                    chart={{
                      categories: [],
                      series: [],
                    }}
                    // chart={{
                    //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    //   series: [15, 18, 12, 51, 68, 11, 39, 37],
                    // }}
                  />
                </Grid>
        
                <Grid xs={12} md={4}>
                  <AppWidgetSummary
                    title="Total Employees"
                    total={86600}
                    chart={{
                      categories: [],
                      series: [],
                    }}
                    // chart={{
                    //   colors: [theme.vars.palette.info.main],
                    //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    //   series: [20, 41, 63, 33, 28, 35, 50, 46],
                    // }}
                  />
                </Grid>
        
                <Grid xs={12} md={4}>
                  <AppWidgetSummary
                    title="Total Logged Hours"
                    valueLabel="1425hr"
                    chart={{
                      categories: [],
                      series: [],
                    }}
                    // chart={{
                    //   colors: [theme.vars.palette.error.main],
                    //   categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                    //   series: [18, 19, 31, 8, 16, 37, 12, 33],
                    // }}
                  />
                </Grid>

        </Grid>

        <Card>
                  <Tabs
                    value={filters.state.status}
                    onChange={handleFilterStatus}
                    sx={{
                      px: 2.5,
                      boxShadow: (theme) =>
                        `inset 0 -2px 0 0 ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
                    }}
                  >
                    {STATUS_OPTIONS.map((tab) => (
                      <Tab
                        key={tab.value}
                        iconPosition="end"
                        value={tab.value}
                        label={tab.label}
                        icon={
                          <Label
                            variant={
                              ((tab.value === 'all' || tab.value === filters.state.status) && 'filled') ||
                              'soft'
                            }
                            color={
                              (tab.value === 'active' && 'success') ||
                              (tab.value === 'pending' && 'warning') ||
                              (tab.value === 'banned' && 'error') ||
                              'default'
                            }
                          >
                            {['active', 'inactive', 'banned', 'rejected'].includes(tab.value)
                              ? tableData.filter((user) => user.status === tab.value).length
                              : tableData.length}
                          </Label>
                        }
                      />
                    ))}
                  </Tabs>
        
                  <UserTableToolbar
                    filters={filters}
                    onResetPage={table.onResetPage}
                    options={{ roles: _roles }}
                  />
        
                  {canReset && (
                    <UserTableFiltersResult
                      filters={filters}
                      totalResults={dataFiltered.length}
                      onResetPage={table.onResetPage}
                      sx={{ p: 2.5, pt: 0 }}
                    />
                  )}
        
                  <Box sx={{ position: 'relative' }}>
                    <TableSelectedAction
                      dense={table.dense}
                      numSelected={table.selected.length}
                      rowCount={dataFiltered.length}
                      onSelectAllRows={(checked) =>
                        table.onSelectAllRows(
                          checked,
                          dataFiltered.map((row) => row.id)
                        )
                      }
                      action={
                        <Tooltip title="Delete">
                          <IconButton color="primary" onClick={confirm.onTrue}>
                            <Iconify icon="solar:trash-bin-trash-bold" />
                          </IconButton>
                        </Tooltip>
                      }
                    />
        
                    <Scrollbar>
                      <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                        <TableHeadCustom
                          order={table.order}
                          orderBy={table.orderBy}
                          headLabel={TABLE_HEAD}
                          rowCount={dataFiltered.length}
                          numSelected={table.selected.length}
                          onSort={table.onSort}
                          onSelectAllRows={(checked) =>
                            table.onSelectAllRows(
                              checked,
                              dataFiltered.map((row) => row.id)
                            )
                          }
                        />
        
                        <TableBody>
                          {dataFiltered
                            .slice(
                              table.page * table.rowsPerPage,
                              table.page * table.rowsPerPage + table.rowsPerPage
                            )
                            .map((row) => (
                              <UserTableRow
                                key={row.id}
                                row={row}
                                selected={table.selected.includes(row.id)}
                                onSelectRow={() => table.onSelectRow(row.id)}
                                onDeleteRow={() => handleDeleteRow(row.id)}
                                onEditRow={() => handleEditRow(row.id)}
                              />
                            ))}
        
                          <TableEmptyRows
                            height={table.dense ? 56 : 56 + 20}
                            emptyRows={emptyRows(table.page, table.rowsPerPage, dataFiltered.length)}
                          />
        
                          <TableNoData notFound={notFound} />
                        </TableBody>
                      </Table>
                    </Scrollbar>
                  </Box>
        
                  <TablePaginationCustom
                    page={table.page}
                    dense={table.dense}
                    count={dataFiltered.length}
                    rowsPerPage={table.rowsPerPage}
                    onPageChange={table.onChangePage}
                    onChangeDense={table.onChangeDense}
                    onRowsPerPageChange={table.onChangeRowsPerPage}
                  />
                </Card>
      
        {/* <Card
          sx={{
            flexGrow: { md: 1 },
            display: { md: 'flex' },
            height: { xs: 800, md: 2 },
            flexDirection: { md: 'column' },
          }}
        >
          <DataGrid
            checkboxSelection
            disableRowSelectionOnClick
            rows={dataFiltered}
            columns={columns}
            loading={productsLoading}
            getRowHeight={() => 'auto'}
            pageSizeOptions={[5, 10, 25]}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            onRowSelectionModelChange={(newSelectionModel) => setSelectedRowIds(newSelectionModel)}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
            slots={{
              toolbar: CustomToolbarCallback as GridSlots['toolbar'],
              noRowsOverlay: () => <EmptyContent />,
              noResultsOverlay: () => <EmptyContent title="No results found" />,
            }}
            slotProps={{
              panel: { anchorEl: filterButtonEl },
              toolbar: { setFilterButtonEl },
              columnsManagement: { getTogglableColumns },
            }}
            sx={{ [`& .${gridClasses.cell}`]: { alignItems: 'center', display: 'inline-flex' } }}
          />
        </Card> */}
      </DashboardContent>

      <ConfirmDialog
        open={confirmRows.value}
        onClose={confirmRows.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {selectedRowIds.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirmRows.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

type ApplyFilterProps = {
  inputData: IUserItem[];
  filters: IUserTableFilters;
  comparator: (a: any, b: any) => number;
};

function applyFilter({ inputData, comparator, filters }: ApplyFilterProps) {
  const { name, status, role } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (user) => user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (status !== 'all') {
    inputData = inputData.filter((user) => user.status === status);
  }

  if (role.length) {
    inputData = inputData.filter((user) => role.includes(user.role));
  }

  return inputData;
}

// ----------------------------------------------------------------------

// interface CustomToolbarProps {
//   canReset: boolean;
//   filteredResults: number;
//   selectedRowIds: GridRowSelectionModel;
//   onOpenConfirmDeleteRows: () => void;
//   filters: UseSetStateReturn<IProductTableFilters>;
//   setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
// }

// function CustomToolbar({
//   filters,
//   canReset,
//   selectedRowIds,
//   filteredResults,
//   setFilterButtonEl,
//   onOpenConfirmDeleteRows,
// }: CustomToolbarProps) {
//   return (
//     <>
//       <GridToolbarContainer>
//         <ProductTableToolbar
//           filters={filters}
//           options={{ stocks: PRODUCT_STOCK_OPTIONS, publishs: PUBLISH_OPTIONS }}
//         />

//         <GridToolbarQuickFilter />

//         <Stack
//           spacing={1}
//           flexGrow={1}
//           direction="row"
//           alignItems="center"
//           justifyContent="flex-end"
//         >
//           {!!selectedRowIds.length && (
//             <Button
//               size="small"
//               color="error"
//               startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
//               onClick={onOpenConfirmDeleteRows}
//             >
//               Delete ({selectedRowIds.length})
//             </Button>
//           )}

//           <GridToolbarColumnsButton />
//           <GridToolbarFilterButton ref={setFilterButtonEl} />
//           <GridToolbarExport />
//         </Stack>
//       </GridToolbarContainer>

//       {canReset && (
//         <ProductTableFiltersResult
//           filters={filters}
//           totalResults={filteredResults}
//           sx={{ p: 2.5, pt: 0 }}
//         />
//       )}
//     </>
//   );
// }

// ----------------------------------------------------------------------

// type ApplyFilterProps = {
//   inputData: IProductItem[];
//   filters: IProductTableFilters;
// };

// function applyFilter({ inputData, filters }: ApplyFilterProps) {
//   const { stock, publish } = filters;

//   if (stock.length) {
//     inputData = inputData.filter((product) => stock.includes(product.inventoryType));
//   }

//   if (publish.length) {
//     inputData = inputData.filter((product) => publish.includes(product.publish));
//   }

//   return inputData;
// }
