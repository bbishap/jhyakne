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
    { field: "name", headerName: "Last name", width: 130 },
    {
      field: "dob",
      headerName: "Dob",
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
      field: "location",
      headerName: "Location",
      sortable: false,
      width: 160,
    },
  ];

  const rows = [
    {
      id: "1",
      name: "Snow",
      dob: 35,
      gender: "Male",
      location: "Address",
    },
    {
      id: "2",
      name: "Lannister",
      dob: 42,
      gender: "Male",
      location: "Address",
    },
    {
      id: "3",
      name: "Lannister",
      dob: 45,
      gender: "Male",
      location: "Address",
    },
    {
      id: "4",
      name: "Stark",
      dob: 16,
      gender: "Male",
      location: "Address",
    },
    {
      id: "5",
      name: "Targaryen",
      dob: null,
      gender: "Male",
      location: "Address",
    },
    {
      id: "6",
      name: "Melisandre",
      dob: 150,
      gender: "Male",
      location: "Address",
    },
    {
      id: "7",
      name: "Clifford",
      dob: 44,
      gender: "Male",
      location: "Address",
    },
    {
      id: "8",
      name: "Frances",
      dob: 36,
      gender: "Male",
      location: "Address",
    },
    {
      id: "9",
      name: "Roxie",
      dob: 65,
      gender: "Male",
      location: "Address",
    },
    {
      id: "10",
      name: "Roxie",
      dob: 65,
      gender: "Male",
      location: "Address",
    },
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
