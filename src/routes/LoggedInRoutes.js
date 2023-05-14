import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SignIn from "../scenes/auth/signin";

export default function LoggedInRoutes() {
  const { user } = useSelector((state) => ({ ...state }));
  return user ? <Outlet /> : <SignIn />;
}
