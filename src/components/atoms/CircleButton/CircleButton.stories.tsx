import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CircleButton } from "./CircleButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/CircleButton",
  component: CircleButton,
} as ComponentMeta<typeof CircleButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircleButton> = (args) => (
  <CircleButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  canClick: true,
  color: "Green",
  label: "終了",
  onClick: () => console.log("clicked"),
};
