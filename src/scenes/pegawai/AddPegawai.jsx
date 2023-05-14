import React, { useState } from "react";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import PictureUploader from "../../components/PictureUploader/PictureUploader";
import { apiPegawaiInsert } from "../../service/api";

const AddPegawai = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [profilepic, setProfilepic] = useState([]);

  const handleFormSubmit = async (values) => {
    let params = { ...values, profilePic: profilepic };
    const { data } = await apiPegawaiInsert(params);
    console.log(data);
  };

  const onUploadImageHandler = (result) => {
    setProfilepic(result);
  };

  console.log(profilepic);

  return (
    <Box mt="5em">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={pegawaiSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="NIP"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nip}
                name="nip"
                error={!!touched.nip && !!errors.nip}
                helperText={touched.nip && errors.nip}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nama Pegawai"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                select
                label="Status Pegawai"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.statusPegawai}
                name="statusPegawai"
                error={!!touched.statusPegawai && !!errors.statusPegawai}
                helperText={touched.statusPegawai && errors.statusPegawai}
                sx={{ gridColumn: "span 2" }}
              >
                {optStatus.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="No. Handphone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                name="phoneNumber"
                error={!!touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                multiline
                maxRows={4}
                placeholder="Masukan Alamat"
                label="Alamat"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.alamat}
                name="alamat"
                error={!!touched.alamat && !!errors.alamat}
                helperText={touched.alamat && errors.alamat}
                sx={{ gridColumn: "span 2" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gridColumn: "span 4",
                  maxWidth: "100%",
                }}
              >
                <PictureUploader
                  onUpload={onUploadImageHandler}
                  picList={profilepic}
                  picLimit={1}
                ></PictureUploader>
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  fontWeight: 700,
                  backgroundColor: "#F44336",
                  ":hover": { backgroundColor: "#d43b30" },
                }}
              >
                Simpan
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const initialValues = {
  nip: "",
  name: "",
  email: "",
  statusPegawai: "",
  alamat: "",
  phoneNumber: "",
};

const optStatus = [
  { value: "Pegawai Tetap", label: "Pegawai Tetap" },
  { value: "Kontrak", label: "Kontrak" },
];

const pegawaiSchema = yup.object().shape({
  nip: yup.string().required("NIP tidak boleh kosong"),
  name: yup.string().required("Nama tidak boleh kosong"),
  email: yup.string().email("Email tidak valid.").required("Email tidak boleh kosong"),
  statusPegawai: yup.string().required("Status pegawai tidak boleh kosong"),
  alamat: yup.string().required("Alamat tidak boleh kosong"),
  phoneNumber: yup.string().required("No. Handphone tidak boleh kosong"),
});

export default AddPegawai;
