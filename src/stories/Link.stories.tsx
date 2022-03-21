import { Link } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example/Link",
  component: Link,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    variant: { control: { type: "select", options: ["solid", "outline"] } },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  children: "Link",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Link",
};

export const Large = Template.bind({});
Large.args = {
  children: "Link",
};

export const Small = Template.bind({});
Small.args = {
  children: "Link",
};
