import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";

import Book from "../../components/Books/Book/Book";
import * as actions from "../../store/actions/index";
import Spinner from "../../components/Spinner/Spinner";
import useDebounce from "../../shared/useDebounce";
import EnhancedTableHead from "../../components/Books/EnhancedTableHead";
import { getComparator } from "../../components/Books/comparators";
import { stableSort } from "../../components/Books/sort";
import EnhancedTableToolbar from "../../components/Books/EnhancedTableToolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    margin: `5px 0 5px ${theme.spacing(0)}px`,
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

const Books = (props) => {
  const { onFetchBooks } = props;
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("displayName");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    onFetchBooks("search", debouncedQuery);
    // eslint-disable-next-line
  }, [onFetchBooks, debouncedQuery]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = props.books.map((book) => book.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, book) => {
    const selectedIndex = selected.indexOf(book);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, book);
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

  const handleSaveBook = (books) => {
    console.log(books);
    setSelected([]);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, props.books.length - page * rowsPerPage);

  let books = null;
  let loading = null;

  if (props.loading) {
    loading = <Spinner />;
  }

  if (!props.loading) {
    books = (
      <TableBody>
        {stableSort(props.books, getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((book, index) => {
            const isItemSelected = isSelected(book.id);
            const labelId = `enhanced-table-checkbox-${index}`;

            const thumbnail = book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.smallThumbnail
              : "https://place-hold.it/150";

            return (
              <TableRow
                hover
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={book.id}
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isItemSelected}
                    inputProps={{ "aria-labelledby": labelId }}
                    onClick={(event) => handleClick(event, book.id)}
                  />
                </TableCell>
                <Book
                  id={book.id}
                  labelId={labelId}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  thumbnail={thumbnail}
                  link={book.volumeInfo.previewLink}
                  saveBook={() => handleSaveBook([book.id])}
                />
              </TableRow>
            );
          })}
        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
    );
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          changed={(event) => setQuery(event.target.value)}
          deleteClick={() => {}}
          value={query}
          saveBook={() => handleSaveBook(selected)}
        />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={props.books.length}
            />
            {books}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={props.books.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        {loading}
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.book.books,
    loading: state.book.loading,
    error: state.book.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBooks: (queryType, query) =>
      dispatch(actions.fetchBooks(queryType, query)),
    onClearBookState: () => dispatch(actions.clearBookState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
