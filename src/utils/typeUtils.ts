import { ComponentPropsWithoutRef, ElementType } from 'react'

export type Combine<T, K> = T & Omit<K, keyof T>

export type CombineElementProps<T extends ElementType, K = unknown> = Combine<
  K,
  ComponentPropsWithoutRef<T>
>

export type OverridableProps<T extends ElementType, K = unknown> = {
  as?: T
} & CombineElementProps<T, K>
