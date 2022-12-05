import React from "react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "atom/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <Button {...args} />;
}

export const Enabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Enabled.args = {
  disabled: false,
  label: "Button",
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  disabled: true,
  label: "Button",
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};

export const Fullwidth = Template.bind({});
Fullwidth.args = {
  label: "Button",
  btnwidth: true,
};

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
