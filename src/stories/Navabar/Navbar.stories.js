import React from "react";
import Navbar from "./Navbar";

export default {
  title: "Molecule/Navbar",
  component: Navbar,
};

export function primary(args) {
  return <Navbar {...args} />;
}
