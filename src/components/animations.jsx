import React, { useState, useEffect } from 'react'
import { scrollMonitor } from 'utils/js/scrollMonitor'

const Animations = () => {

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!animated) {
      setAnimated(true)
      const targets = document.querySelectorAll(`[data-anim]`)
      for (const target of targets) {
        const anim = target.getAttribute('data-anim')
        const direction = target.getAttribute('data-direction') || undefined
        const duration = target.getAttribute('data-duration') || undefined
        const delay = target.getAttribute('data-delay') || undefined
        const easing = target.getAttribute('data-easing') || undefined
        scrollMonitor(target, {
          anim,
          direction,
          duration,
          delay,
          easing
        })
      }
    }
  }, [animated])

  return (
    <div className="animations"></div>
  )
}

export default Animations
