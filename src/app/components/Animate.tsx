'use client'

import type { MotionProps, Variants } from 'framer-motion'

// Premium-feel default: soft spring, subtle lift and scale
export const fadeInProps: MotionProps = {
  initial: { opacity: 0, y: 24, scale: 0.98 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 140, damping: 18, mass: 0.8 },
  },
  viewport: { once: true, amount: 0.25 },
}

// Stagger presets (use on parent and children)
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 160, damping: 20, mass: 0.7 },
  },
}

// Directional reveals for bespoke use
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150, damping: 18 } },
}

export const revealLeft: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 150, damping: 18 } },
}

export const revealRight: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 150, damping: 18 } },
}
