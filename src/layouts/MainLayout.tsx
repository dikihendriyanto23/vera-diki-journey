import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-screen w-full">{children}</div>;
};

export default MainLayout;
