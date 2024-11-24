import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./StyleTableStyle";

interface TableProps {
  rows?: any[];
  columns?: any[];
}

const TableComponent: React.FC<TableProps> = ({ rows, columns }) => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" width={10}>
                No
              </StyledTableCell>
              {columns?.map((column) => (
                <StyledTableCell align="center" key={column.key}>
                  {column.name}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                {columns?.map((column) => (
                  <StyledTableCell
                    align="center"
                    key={column.key}
                    component="th"
                    scope="row"
                  >
                    {row[column.key]}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
