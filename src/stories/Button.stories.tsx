import { Button } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["solid", "outline", "ghost", "bubble", "light"],
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Hello Button",
  colorScheme: "blue",
  px: 10,
};

export const Bubble = Template.bind({});
Bubble.args = {
  children: "Hello Button",
  variant: "bubble",
};

export const Large = Template.bind({});
Large.args = {
  children: "Button",
  size: "lg",
};

export const Small = Template.bind({});
Small.args = {
  children: "Button",
  size: "sm",
};
