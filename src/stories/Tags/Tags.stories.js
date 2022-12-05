import React from "react";
import Tags from "./Tags";

export default {
  title: "Molecule/Tags",
  component: Tags,
};

function Template(args) {
  return <Tags {...args} />;
}

export const Tag = Template.bind({});

export const CheckedTag = Template.bind({});
CheckedTag.args = {
  checked: true,
};

export const unCheckedTag = Template.bind({});
unCheckedTag.args = {
  checked: false,
};
