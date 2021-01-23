import React from "react";

import TableCell from "@material-ui/core/TableCell";

import Aux from "../../../hoc/Aux/Aux";

const book = (props) => {
  return (
    <Aux>
      <TableCell
        component="th"
        id={props.labelId}
        scope="row"
        padding="default"
      >
        <img src={props.thumbnail} alt="employee-thumbnail"></img>
      </TableCell>
      <TableCell align="left" padding="none">
        {props.title}
      </TableCell>
      <TableCell align="left" padding="none">
        {props.authors}
      </TableCell>
      <TableCell align="left" padding="none">
        {props.description}
      </TableCell>
      <TableCell align="left" padding="none">
        {props.link}
      </TableCell>
    </Aux>
  );
};

export default book;
