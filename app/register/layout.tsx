import { Metadata } from "next";
import React, { FC } from "react";

export const metadata: Metadata = {
  title: "Sign Up",
};

interface RegisterLayoutProps {
  children: React.ReactNode;
}
const layout: FC<RegisterLayoutProps> = ({ children }) => {
  return <main className="layout_register">{children}</main>;
};

export default layout;
