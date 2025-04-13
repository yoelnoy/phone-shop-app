import { ReactNode } from "react";
import Header from "../components/Header";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col h-screen w-full min-w-sm mas-w-[1920px] py-0 overflow-hidden">
      <Header />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};

export default MainLayout;
