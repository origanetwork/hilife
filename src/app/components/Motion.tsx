'use client'

import { motion, type MotionProps } from 'framer-motion'
import { fadeInProps } from './Animate'

type CommonProps = {
  id?: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export function MotionSection({ id, className, style, children, ...rest }: CommonProps & MotionProps) {
  return (
    <motion.section id={id} className={className} style={style} {...fadeInProps} {...rest}>
      {children}
    </motion.section>
  )
}

export function MotionDiv({ className, style, children, ...rest }: Omit<CommonProps, 'id'> & MotionProps) {
  return (
    <motion.div className={className} style={style} {...fadeInProps} {...rest}>
      {children}
    </motion.div>
  )
}
