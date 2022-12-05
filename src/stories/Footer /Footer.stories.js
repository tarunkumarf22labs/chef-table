import React from "react";
import Footer from "./Footer";

export default {
  title: "Molecule/Footer",
  component: Footer,
};

export function primary(args) {
  return <Footer {...args} />;
}
