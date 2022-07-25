import { btnStyles } from '@src/utils/constants'
import { ComponentMeta } from '@storybook/react'
import React from 'react'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>

const Template = ({ title, styles }: { title: string; styles: btnStyles }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'flex-end',
          gap: '1rem',
        }}
      >
        <Button size="xsmall" styles={styles}>
          xSmall
        </Button>
        <Button size="small" styles={styles}>
          Small
        </Button>
        <Button styles={styles}>Middle</Button>
        <Button size="large" styles={styles}>
          Large
        </Button>
      </div>
    </div>
  )
}

export const Chunk = () => {
  const styles = ['primary', 'secondary', 'tertiary', 'link', 'danger', 'success', 'warning']

  return (
    <div className="flex flex-col gap-2">
      {styles.map((style, idx) => {
        return <Template key={`btn-template-${idx}`} title={style} styles={style as btnStyles} />
      })}
    </div>
  )
}

export const FullWidth = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Button>Not Full Width</Button>
      </div>
      <div>
        <Button fullWidth>Fullwidth</Button>
      </div>
    </div>
  )
}
