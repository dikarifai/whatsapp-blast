"use client";

import FormLayout from "@/components/Layouts/FormLayout";
import TableComponent from "@/components/UI/Table";
import { TextField } from "@mui/material";

const columns = [
  { key: "name", name: "Name" },
  { key: "nik", name: "Nik" },
  { key: "status", name: "Status" },
];
const Contacts: React.FC = () => {
  const rows: any[] = [];
  return (
    <>
      <FormLayout title={"Form Contact"}>
        <TextField name="nik" id="nik" label="NIK" fullWidth />
        <TextField name="name" id="name" label="Name" fullWidth />
      </FormLayout>
      <TableComponent columns={columns} rows={rows} />
    </>
  );
};

export default Contacts;
