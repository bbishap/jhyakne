import { createContext } from "react";

import Header from "../../components/header";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
const stepperSteps = ["Step1", "Step2", "Step3"];

const genderSelectItems = [
  { label: "Male", value: "M" },
  { label: "Female", value: "F" },
];

export const ListPage = () => {
  const AppContext = createContext(null);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "gender",
      headerName: "Gender",
      sortable: false,
      width: 80,
    },
    {
      field: "address",
      headerName: "Address",
      sortable: false,
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      gender: "Male",
      address: "Address",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      gender: "Male",
      address: "Address",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      gender: "Male",
      address: "Address",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
      gender: "Male",
      address: "Address",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
      gender: "Male",
      address: "Address",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      age: 150,
      gender: "Male",
      address: "Address",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      gender: "Male",
      address: "Address",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      gender: "Male",
      address: "Address",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      gender: "Male",
      address: "Address",
    },
    {
      id: 10,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      gender: "Male",
      address: "Address",
    },
  ];

  return (
    <>
      <Header />
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: "30px" }}>
        <div style={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        </div>
      </Container>
    </>
  );
};
