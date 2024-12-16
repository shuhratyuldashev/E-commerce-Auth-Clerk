import { Metadata } from "next";
import React, { FC } from "react";
import '../register/register.css'

export const metadata: Metadata = {
  title: "Sign In",
};

interface RegisterLayoutProps {
  children: React.ReactNode;
}
const layout: FC<RegisterLayoutProps> = ({ children }) => {
  return <main className="layout_login">{children}</main>;
};

export default layout;
