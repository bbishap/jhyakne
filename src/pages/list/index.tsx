import { createContext } from "react";
import Header from "../../components/header";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import CustomizedDialogs from "../../components/modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const ListPage = () => {
  const AppContext = createContext(null);

  function createData(
    id: string,
    name: string,
    gender: string,
    team: string,
    location: string
  ) {
    return { id, name, gender, team, location };
  }

  const rows = [
    createData("1", "Name", "M", "MCC", "Mechinagar-6, jhapa"),
    createData("2", "Name", "M", "MCC", "Mechinagar-6, jhapa"),
    createData("3", "Name", "M", "MCC", "Mechinagar-6, jhapa"),
    createData("4", "Name", "M", "MCC", "Mechinagar-6, jhapa"),
    createData("5", "Name", "M", "MCC", "Mechinagar-6, jhapa"),
    createData("6", "Name", "M", "MCC", "Mechinagar-6, jhapa"),
    createData("7", "Name", "M", "MCC", "Mechinagar-6, jhapa"),
  ];

  // {
  //   "_id": "63ad752ab277b3ff7cf0bb4b",
  //   "name": "bishap bhusal",
  //   "gender": "male",
  //   "sports": ["basketball"],
  //   "dob": "2023-01-01",
  //   "description": "this is description",
  //   "location": "Japan",
  //   "team": "japan tiger"
  // }

  return (
    <>
      <Header />
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginTop: "30px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align="right">Team</TableCell>
                <TableCell align="right">Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">{row.team}</TableCell>
                  <TableCell align="right">{row.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <CustomizedDialogs />
      </Container>
    </>
  );
};
