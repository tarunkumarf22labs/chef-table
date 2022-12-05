import React from "react";
import Card from "./Card";

export default {
  title: "Molecule/Card",
  component: Card,
};

function Template(args) {
  return <Card {...args} />;
}

export const card = Template.bind({});

export const LargeCard = Template.bind({});
LargeCard.args = {
  largecard: true,
};

export const SmallCard = Template.bind({});
SmallCard.args = {
  largecard: false,
};
