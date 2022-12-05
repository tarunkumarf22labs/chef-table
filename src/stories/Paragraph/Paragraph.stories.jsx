import React from "react";
import Paragraph from "./Paragraph";

export default {
  title: "atom/Paragraph",
  component: Paragraph,
};

export function primary(args) {
  return <Paragraph {...args} />;
}
