"use client";

import accountService from "@/api/services/accountService";
import { AccountResponse } from "@/api/types/account.type";
import FormLayout from "@/components/Layouts/FormLayout";

import TableComponent from "@/components/UI/Table";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface AccounTable {
  name: string;
  phone: string;
  isActive: boolean;
  action: React.ReactNode;
}

const columns = [
  {
    name: "Name",
    key: "name",
  },
  { name: "Phone", key: "phone" },
  { name: "Status", key: "isActive" },
  { name: "Action", key: "action" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState<AccountResponse[]>();
  const [qr, setQr] = useState<any>();

  const getAllContact = async () => {
    try {
      const response = await accountService.getAccounts();
      const data: AccounTable[] = [];
      response?.map((item: AccountResponse) =>
        data.push({
          name: item.name,
          phone: item.phoneNumber,
          isActive: item.isActive,
          action: (
            <Button
              onClick={() => getQrCode(item.phoneNumber)}
              variant="contained"
              color="success"
            >
              Scan
            </Button>
          ),
        })
      );
      setRows(data as any[]);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const getQrCode = async (phone: string) => {
    setOpen(true);
    const response = await axios.post(
      "http://localhost:2000/blast/scan",
      {
        number: phone,
      },
      {
        headers: {
          Authorization:
            "Bearer mt0QNapt/mrarNkLoIyuu!9ULTby7NE8nD2Vl?1eX4PA4R", // Contoh header Authorization
          "Content-Type": "application/json",
        },
      }
    );
    setQr(response.data);
  };

  useEffect(() => {
    getAllContact();
  }, []);
  return (
    <>
      <FormLayout title={"Form Account"}>
        <TextField required id="name" label="Name" fullWidth />
        <TextField required id="phone" label="phone" fullWidth />
      </FormLayout>
      <TableComponent columns={columns} rows={rows} />;
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex flex-row justify-center items-center"
      >
        <Box
          className="w-96 bg-white h-96 p-8 flex"
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Scan Here!
          </Typography>
          <Box
            className="w-full bg-white h-full p-8 flex"
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            {qr?.qr ? (
              <Image width={600} height={600} src={qr?.qr} alt="" />
            ) : (
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {qr?.message}
              </Typography>
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
}
