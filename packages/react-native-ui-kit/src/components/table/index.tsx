import TableBase from "./table-base";
import TableBody from "./table-body";
import TableCell from "./table-cell";
import TableHeader from "./table-header";
import TableRow from "./table-row";
import TableTitle from "./table-title";

export const Table = Object.assign(TableBase, {
  Row: TableRow,
  Body: TableBody,
  Cell: TableCell,
  Title: TableTitle,
  Header: TableHeader,
});
