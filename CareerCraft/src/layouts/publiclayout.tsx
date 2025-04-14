import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import AuthHanlder from "@/hanlders/auth-handler";
import { Footer } from "@/components/footer";

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
