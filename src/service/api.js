import axios from "axios";

var webserviceurl = "https://dev.transforme.co.id/seskab_api_cp";

export function apiPegawaiList(params) {
  try {
    const response = axios({
      method: "post",
      url: webserviceurl + "/pegawai_list.php",
      data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export function apiPegawaiListById(params) {
  try {
    const response = axios({
      method: "post",
      url: webserviceurl + "/pegawai_by_id.php",
      data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export function apiDeletePegawai(params) {
  try {
    const response = axios({
      method: "post",
      url: webserviceurl + "/pegawai_delete.php",
      data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export function apiPegawaiInsert(params) {
  try {
    const response = axios({
      method: "post",
      url: webserviceurl + "/pegawai_insert.php",
      data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export function apiPegawaiEdit(params) {
  try {
    const response = axios({
      method: "post",
      url: webserviceurl + "/pegawai_update.php",
      params: {pegawaiId: params.pegawaiId},
      data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export function apiAdminLogin(params) {
  try {
    const response = axios({
      method: "post",
      url: webserviceurl + "/login.php",
      data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
}
