import { useEffect, useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { apiPegawaiList } from "../../service/api";
import LayoutGridBox from "../../components/LayoutGridBox";
import Author from "./Author";
import AddPegawai from "./AddPegawai";
import { useDispatch, useSelector } from "react-redux";

const Pegawai = () => {
  const { handlerAdd } = useSelector((state) => ({ ...state }));
  const { showAddForm } = handlerAdd;
  const dispatch = useDispatch();
  const [pegawai, setPegawai] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataListPegawai();
  }, []);

  const getDataListPegawai = async () => {
    setLoading(true);
    let params = {
      filter: " ",
    };
    const { data } = await apiPegawaiList(params);
    const tmp = await data.records?.map((record, idx) => {
      return {
        // Harus ada ID
        id: idx + 1,
        nip: record.nip,
        name: record.name,
        statusPegawai: record.statusPegawai,
        email: record.email,
        profilePic: record.profilePic,
        alamat: record.alamat,
        phoneNumber: record.phoneNumber,
      };
    });
    setPegawai(tmp);
    setLoading(false);
  };

  const columns = [
    {
      field: "nip",
      headerName: "NIP",
      flex: 1,
      headerAlign: "center",
      align: "center",
      cellClassName: "nip-pegawai",
    },
    {
      field: "name",
      headerName: "Nama Pegawai",
      flex: 1,
      cellClassName: "nama-pegawai",
      renderCell: (params) => {
        return <Author name={params.row.name} image={params.row.profilePic} />;
      },
    },
    { field: "statusPegawai", flex: 1, headerName: "Status Pegawai" },
    { field: "email", flex: 1, headerName: "Email" },
    { field: "alamat", flex: 1, headerName: "Location" },
    { field: "phoneNumber", flex: 1, headerName: "No. Handphone" },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      flex: 1,
      align: "center",
      renderCell: (params) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            <Tooltip title="Edit" placement="left">
              <IconButton onClick={() => handleEditPegawai(params.row)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" placement="top">
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
    },
  ];

  const handleEditPegawai = (row) => {
    console.log(row);
  };

  const handleAddPegawai = () => {
    dispatch({
      type: "isCollapsedAndShowAdd",
      payload: { ...handlerAdd, showAddForm: false },
    });
  };

  return (
    <Box
      m="20px"
      sx={{
        position: "relative",
      }}
    >
      <LayoutGridBox
        title="Data Pegawai"
        subtitle="Pengolahan Data Pegawai Sekretariat Kabinet"
        action={handleAddPegawai}
      >
        {showAddForm ? (
          <AddPegawai />
        ) : (
          <DataGrid
            checkboxSelection
            rows={pegawai}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            loading={loading}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 7, page: 0 },
              },
            }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            pageSizeOptions={[7, 25, 50]}
          />
        )}
      </LayoutGridBox>
    </Box>
  );
};

export default Pegawai;
