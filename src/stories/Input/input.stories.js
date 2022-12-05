import React from "react";
import Input from "./Input";

export default {
  title: "Molecule/Input",
  component: Input,
};

export function primary(args) {
  return <Input {...args} />;
}
