// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>

export const AvatarImage: Story = {
  args: {
    avatar: 'https://avatars.githubusercontent.com/u/263385',
  },
}

export const AvatarInitial: Story = {
  args: {
    initial: 'A',
  },
}

export const Primary: Story = {}
