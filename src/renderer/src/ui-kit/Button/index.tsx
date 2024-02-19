import React from 'react'
import { Button, ButtonProps } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import { StyledArrowButton, StyledButton } from './styles'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons'

const IconButton: React.FC<{
  shape?: 'circle' | 'default' | 'round' | undefined
  size?: SizeType
  icon: React.ReactNode
  onClick?: () => void
}> = ({ ...props }) => <Button type="primary" shape="circle" size="small" {...props} />

const ArrowedButton: React.FC<{
  onClick?: () => void
  direction: 'forward' | 'back'
}> = ({ onClick, direction = 'forward', ...props }) => (
  <StyledArrowButton
    {...props}
    onClick={onClick}
    icon={direction === 'forward' ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
  />
)

const ButtonPrimary: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton type="primary" {...props}>{children}</StyledButton>
)

export { ButtonPrimary, IconButton, ArrowedButton, Button }