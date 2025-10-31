import { XStack } from '@/components/XStack'
import { ShoppingBag } from 'lucide-react'
import React from 'react'

export const Logo = () => {
  return (
    <XStack className="header gap-4 items-center">
    <XStack className="items-center">
      <ShoppingBag className="size-10" />
    </XStack>
    Lincent Shop
  </XStack>
  )
}
