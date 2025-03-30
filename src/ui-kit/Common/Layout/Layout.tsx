import React from "react";
import "./Layout.css";
import Header from "../Header/Header";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header >
        <h1>HEADER</h1>
      </Header>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
