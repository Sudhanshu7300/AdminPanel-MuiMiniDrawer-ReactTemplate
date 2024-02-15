import React from "react";
import { Grid, TableBody, TableCell, TableRow } from "@mui/material";
import PropTypes from "prop-types";
// skeleten loading
import Skeleton from "@mui/material/Skeleton";
// skeleten loading
const EnhancedTableToolbar = (props) => {};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const TableSkeleton = ({ rowNumber, tableCell, showOption }) => {
  return (
    <>
      <TableBody className="tablerow ">
        {" "}
        {rowNumber &&
          rowNumber?.length > 0 &&
          rowNumber?.map((row, index) => {
            return (
              <TableRow
              key={index}
                hover
                tabIndex={-1}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                {tableCell &&
                  tableCell?.length > 0 &&
                  tableCell?.map((a, index) => (
                    <TableCell
                      component="th"
                      scope="row"
                      padding="none"
                      className="greycolortypo"
                      key={index + 1}
                      sx={{ width: a }}
                    >
                      <Grid container>
                        {" "}
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: "1rem", width: "60%" }}
                        />
                      </Grid>
                    </TableCell>
                  ))}

                {showOption && (
                  <TableCell
                    component="th"
                    scope="row"
                    padding="none"
                    className="greycolortypo"
                    width={showOption?.[0]}
                  >
                    <Grid container gap="10px">
                      {showOption.map((a, b) => (
                        <Grid item xs={1} key={b}>
                          {" "}
                          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                        </Grid>
                      ))}
                    </Grid>
                  </TableCell>
                )}
              </TableRow>
            );
          })}
      </TableBody>
    </>
  );
};

export default TableSkeleton;
