import type { CustomProjectConfig } from "lost-pixel"

export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: "examples/storybook-build/storybook-static",
  },
  generateOnly: true,
  failOnDifference: true,
}
