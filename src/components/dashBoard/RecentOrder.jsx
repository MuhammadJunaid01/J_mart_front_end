import React from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import "../../assets/styles/recentOrder.css";
const RecentOrder = () => {
  function createData(
    id,
    orderTimes,
    address,
    phone,
    paymentMethod,
    orderAmount,
    status
  ) {
    return {
      id,
      orderTimes,
      address,
      phone,
      paymentMethod,
      orderAmount,
      status,
    };
  }
  const rows = [
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "pending"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
    createData(
      uuid(),
      "2/03/2020",
      "bhaddarhat",
      "01634900664",
      "CARD",
      300,
      "proccessing"
    ),
  ];
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells = [
    {
      id: "ID",
      numeric: false,
      disablePadding: true,
      label: "ID",
    },
    {
      id: "ORDER TIME",
      numeric: true,
      disablePadding: false,
      label: "ORDER TIME",
    },
    {
      id: "DELIVERY ADDRESS",
      numeric: true,
      disablePadding: false,
      label: "DELIVERY ADDRESS",
    },
    {
      id: "PHONE",
      numeric: true,
      disablePadding: false,
      label: "PHONE",
    },
    {
      id: "PAYMENT METHOD",
      numeric: true,
      disablePadding: false,
      label: "PAYMENT METHOD",
    },
    {
      id: "ORDER AMOUNT",
      numeric: true,
      disablePadding: false,
      label: "ORDER AMOUNT",
    },
    {
      id: "STATUS",
      numeric: true,
      disablePadding: false,
      label: "STATUS",
    },
  ];

  function EnhancedTableHead(props) {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.label ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.label}
                direction={orderBy === headCell.label ? order : "asc"}
                onClick={createSortHandler(headCell.label)}
              >
                {headCell.label}
                {orderBy === headCell.label ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  const handledelete = (id) => {
    console.log("selected deleted", id);
  };

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Select
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton onClick={() => handledelete(numSelected)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

  function EnhancedTable() {
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
      console.log("property", property);
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.id);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };

    const handleClick = (event, id) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }

      setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 1200 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                   rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell align="right">{row.orderTimes}</TableCell>
                        <TableCell align="right">{row.address}</TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">{row.paymentMethod}</TableCell>
                        <TableCell align="right">{row.orderAmount}</TableCell>
                        <TableCell
                          className={
                            row.status === "proccessing"
                              ? "styleTbleCell"
                              : "tableCel"
                          }
                          align="right"
                        >
                          {row.status}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    );
  }
  return (
    <div style={{ marginTop: "20px", padding: "30px 0px" }}>
      <div>
        <p
          style={{
            marginLeft: "20px",
            fontWeight: "800",
            fontFamily: "monospace",
            fontSize: "22px",
            lineHeight: "27px",
            color: "#24262d",
            marginBottom: "20px",
          }}
        >
          Recent Order
        </p>
      </div>
      <div style={{ width: "90%" }}>
        <EnhancedTable />
      </div>
    </div>
  );
};

export default RecentOrder;
