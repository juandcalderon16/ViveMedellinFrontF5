import React from 'react'
import { Icon } from "@iconify/react";

const Index = ({icon}:{icon: string}) => {
  return (
    <Icon icon={`${icon}`} width="24" height="24" />
  )
}

export default Index