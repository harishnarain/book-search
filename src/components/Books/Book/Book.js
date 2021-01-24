import React from "react";

import TableCell from "@material-ui/core/TableCell";
import Link from "@material-ui/core/Link";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import Aux from "../../../hoc/Aux/Aux";

const book = (props) => {
  let trimmedDescription = "";

  trimmedDescription = props.description
    ? props.description.slice(0, 250) + "..."
    : "No Description found!";

  const authors = props.authors ? props.authors.join(", ") : null;

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
      <TableCell align="left" padding="default">
        {props.title}
      </TableCell>
      <TableCell align="left" padding="default">
        {authors}
      </TableCell>
      <TableCell align="left" padding="default">
        {trimmedDescription}
      </TableCell>
      <TableCell align="left" padding="default">
        <Link href={props.link}>Access Link</Link>
      </TableCell>
      <TableCell align="center" padding="default">
        <Tooltip title="Save book">
          <IconButton aria-label="save" onClick={props.saveBook}>
            <SaveAltIcon color="primary" />
          </IconButton>
        </Tooltip>
      </TableCell>
    </Aux>
  );
};

export default book;
