/** @type { import('@storybook/react').Preview } */
import "tailwindcss/tailwind.css";
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
