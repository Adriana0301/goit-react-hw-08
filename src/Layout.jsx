import { Outlet } from "react-router-dom";
import AppBar from "./components/Auth/AppBar/AppBar.jsx";
import { Suspense } from "react";
import { LoaderIcon } from "react-hot-toast";
const Layout = () => {
  return (
    <>
      <Suspense fallback={<LoaderIcon />}>
        <AppBar />
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
