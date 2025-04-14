import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/footer";
import AuthHanlder from "@/hanlders/auth-handler";

export const PublicLayout = () => {
  return (
    <div className="w-full">
      <AuthHanlder/>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};
