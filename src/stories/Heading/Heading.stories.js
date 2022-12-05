import React from "react";
import Heading from "./Heading";

export default {
  title: "atom/Heading",
  component: Heading,
};

function Template(args) {
  return <Heading {...args} />;
}

export const Required = Template.bind({});
Required.args = {
  required: true,
};

export const notRequired = Template.bind({});
notRequired.args = {
  required: false,
};
