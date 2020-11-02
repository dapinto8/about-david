import anime from 'animejs/lib/anime.es.js'

const DELAY = 0

export const DIRECTION_DEFAULT = ''
export const DIRECTION_TOP = 'TOP'
export const DIRECTION_RIGHT = 'RIGHT'
export const DIRECTION_BOTTOM = 'BOTTOM'
export const DIRECTION_LEFT = 'LEFT'
export const DIRECTION_X = 'X'
export const DIRECTION_Y = 'Y'

export const BACKGROUND_PRIMARY = 'background-primary'
export const BACKGROUND_SECONDARY = 'background-secondary'
export const BACKGROUND_ACCENT = 'background-accent'

export const EASE_OUT = 'cubicBezier(0,0,.58,1)'
export const EASE_IN_OUT_QUART = 'easeInOutQuart'
export const EASE_CUBIC = 'cubicBezier(.5,.5,.25,1)'


export const squareReveal = (targets, {
  direction = DIRECTION_Y,
  duration = 1000,
  delay = DELAY,
  easing = EASE_IN_OUT_QUART
}) => {
  return new Promise((resolve) => {

    let animation = {
      targets,
      easing,
      duration,
      delay,
      complete: () => {
        resolve();
      }
    };

    if (direction === DIRECTION_X) {
      animation.translateX = 0;
    } else {
      animation.translateY = 0;
    }

    anime(animation);
  });
};


let dropdownState = false
export const dropdown = (target) => {

  dropdownState = !dropdownState

  const children = [...target.children]
  target.style.transform = 'scaleY(0)'
  target.style.transformOrigin = 'top'

  if (dropdownState) {
    target.style.display = 'block'
    children.forEach(child => {
      child.style.opacity = '0'
    })
  }
  
  anime({
    targets: target,
    duration: 200,
    delay: dropdownState ? 0 : 200,
    easing: EASE_CUBIC,
    scaleY: dropdownState ? [0,1] : [1,0],
    begin: (anim) => {
      if (!dropdownState) {
        fadeOut(children, { duration: 200 })
      }
    },
    complete: (anim) => {
      if (dropdownState) {
        fadeIn(children, { duration: 200 })
      }
    }
  })
}

export const fadeIn = (targets, { 
  direction = DIRECTION_DEFAULT, 
  duration = 1000, 
  delay = DELAY,
  easing = 'cubicBezier(.42,0,.58,1)'
}) => {


  targets.forEach(t => {
    t.style.opacity = 0
  })

  let animation = {
    targets,
    easing,
    duration,
    delay,
    opacity: [0,1]
  }
  
  switch (direction) {
    case DIRECTION_TOP:
      animation = {
        ...animation,
        translateY: [
          { value: '-40px', duration: 0 },
          { value: 0, duration }
        ]
      }
      break
    case DIRECTION_RIGHT:
      animation = {
        ...animation,
        translateX: [
          { value: '40px', duration: 0 },
          { value: 0, duration }
        ]
      }
      break
    case DIRECTION_BOTTOM:
      animation = {
        ...animation,
        translateY: [
          { value: '40px', duration: 0 },
          { value: 0, duration }
        ]
      }
      break
    case DIRECTION_LEFT:
      animation = {
        ...animation,
        translateX: [
          { value: '-40px', duration: 0 },
          { value: 0, duration }
        ]
      }
      break
    default:
      break
  }

  anime(animation)
}

export const fadeOut = (targets, { 
  direction = DIRECTION_DEFAULT, 
  duration = 1000, 
  delay = DELAY,
  easing = EASE_OUT
}) => {

  return new Promise((resolve) => {

    let animation = {
      targets,
      easing,
      duration,
      delay,
      opacity: [1,0],
      complete: () => {
        resolve()
      }
    }
  
    switch (direction) {
      case DIRECTION_TOP:
        animation = {
          ...animation,
          translateY: [
            { value: '-40px', duration }
          ]
        }
        break
      case DIRECTION_RIGHT:
        animation = {
          ...animation,
          translateX: [
            { value: '40px', duration }
          ]
        }
        break
      case DIRECTION_BOTTOM:
        animation = {
          ...animation,
          translateY: [
            { value: '40px', duration }
          ]
        }
        break
      case DIRECTION_LEFT:
        animation = {
          ...animation,
          translateX: [
            { value: '-40px', duration }
          ]
        }
        break
      default:
        break
    }
  
    anime(animation)
  })

}

export const slideIn = (targets, {
  direction = DIRECTION_BOTTOM, 
  duration = 800,
  easing = EASE_CUBIC,
  delay = DELAY 
}) => {

  const children = targets.map(target => { 
    target.style.overflow = 'hidden'
    target.style.opacity = 1
    return target.children[0]
  })

  let animation = {
    targets: children,
    easing,
    duration,
    delay,
    complete: (anim) => {
      targets.forEach(target => { 
        if (target)
          target.style.overflow = 'visible'
      })
    }
  }

  switch (direction) {
    case DIRECTION_TOP:
        animation = {
          ...animation,
          translateY: [
            { value: '-100%', duration: 0 },
            { value: 0, duration }
          ]
        }
        break
    case DIRECTION_RIGHT:
        animation = {
          ...animation,
          translateX: [
            { value: '100%', duration: 0 },
            { value: 0, duration }
          ]
        }
        break
    case DIRECTION_BOTTOM:
        animation = {
          ...animation,
          translateY: [
            { value: '100%', duration: 0 },
            { value: 0, duration }
          ]
        }
        break
    case DIRECTION_LEFT:
        animation = {
          ...animation,
          translateX: [
            { value: '-100%', duration: 0 },
            { value: 0, duration }
          ]
        }
        break
    default:
      break
  }

  anime(animation)

}

export const slideOut = (targets, {
  direction = DIRECTION_BOTTOM, 
  duration = 1600,
  easing = EASE_CUBIC,
  delay = DELAY,
  complete = () => {}
}) => {

  const children = targets.map(target => { 
    target.style.overflow = 'hidden'
    target.style.opacity = 1
    return target.children[0]
  })

  let animation = {
    targets: children,
    easing,
    duration,
    delay,
    complete
  }

  switch (direction) {
    case DIRECTION_TOP:
        animation = {
          ...animation,
          translateY: [
            { value: '-100%', duration }
          ]
        }
        break
    case DIRECTION_RIGHT:
        animation = {
          ...animation,
          translateX: [
            { value: '100%', duration }
          ]
        }
        break
    case DIRECTION_BOTTOM:
        animation = {
          ...animation,
          translateY: [
            { value: '100%', duration }
          ]
        }
        break
    case DIRECTION_LEFT:
        animation = {
          ...animation,
          translateX: [
            { value: '-100%', duration }
          ]
        }
        break
    default:
      break
  }

  anime(animation)

}

export const blockReveal = (node, { 
  direction = DIRECTION_LEFT,
  duration = 1200,
  delay = DELAY,
  easing = EASE_IN_OUT_QUART,
  background = BACKGROUND_PRIMARY
}) => {

  node.style.position = 'relative'
  const [child] = node.children
  child.style.opacity = 0

  const block = document.createElement('div')
  block.classList.add('block-reveal', background)

  const firstAnimation = {
    targets: block,
    duration,
    delay,
    easing
  }
  const lastAnimation = {
    ...firstAnimation,
    delay: 0
  }

  let firstTransformOrigin
  let lastTransformOrigin

  switch (direction) {
    case DIRECTION_TOP:
      firstTransformOrigin = 'bottom'
      lastTransformOrigin = 'top'
      firstAnimation.scaleY = [0,1]
      lastAnimation.scaleY = [1,0]
      block.style.transform = 'scaleY(0)'
      break
    case DIRECTION_RIGHT:
      firstTransformOrigin = 'left'
      lastTransformOrigin = 'right'
      firstAnimation.scaleX = [0,1]
      lastAnimation.scaleX = [1,0]
      block.style.transition = 'scaleX(0)'
      break
    case DIRECTION_BOTTOM:
      firstTransformOrigin = 'top'
      lastTransformOrigin = 'bottom'
      firstAnimation.scaleY = [0,1]
      lastAnimation.scaleY = [1,0]
      block.style.transform = 'scaleY(0)'
      break
    case DIRECTION_LEFT:
      firstTransformOrigin = 'right'
      lastTransformOrigin = 'left'
      firstAnimation.scaleX = [0,1]
      lastAnimation.scaleX = [1,0]
      block.style.transition = 'scaleX(0)'
      break
    default:
      break
  }

  block.style.transformOrigin = firstTransformOrigin

  anime({
    ...firstAnimation,
    begin: (anim) => {
      node.appendChild(block)
    },
    complete: (anim) => {
      child.style.opacity = 1
      block.style.transformOrigin = lastTransformOrigin
      anime(lastAnimation)
    }
  })

}

export const scaleIn = (target, { 
  direction = DIRECTION_RIGHT, 
  duration = 800, 
  delay = DELAY,
  easing = EASE_CUBIC
}) => {

  return new Promise((resolve, reject) => {
    let animation = {
      targets: target,
      easing,
      duration,
      delay,
      complete: () => {
        resolve()
      }
    }
  
    switch (direction) {
      case DIRECTION_TOP:
        target.style.transformOrigin = 'top'
        animation = {
          ...animation,
          scaleY: [
            { value: 0, duration: 0 },
            { value: 1, duration }
          ]
        }
        break
      case DIRECTION_RIGHT:
        target.style.transformOrigin = 'right'
        animation = {
          ...animation,
          width: [
            { value: 0, duration: 0 },
            { value: '100%', duration }
          ]
        }
        break
      case DIRECTION_BOTTOM:
        target.style.transformOrigin = 'bottom'
        animation = {
          ...animation,
          scaleY: [
            { value: 0, duration: 0 },
            { value: 1, duration }
          ]
        }
        break
      case DIRECTION_LEFT:
        target.style.transformOrigin = 'left'
        animation = {
          ...animation,
          width: [
            { value: 0, duration: 0 },
            { value: '100%', duration }
          ]
        }
        break
      default:
        break
    }

    anime(animation)
  })
}

export const scaleOut = (target, { 
  direction = DIRECTION_RIGHT, 
  duration = 800, 
  delay = DELAY,
  easing = EASE_CUBIC
}) => {

  return new Promise((resolve, reject) => {
    let animation = {
      targets: target,
      easing,
      duration,
      delay,
      complete: () => {
        resolve()
      }
    }
  
    switch (direction) {
      case DIRECTION_TOP:
        target.style.transformOrigin = 'top'
        animation = {
          ...animation,
          scaleY: { value: 0, duration }
        }
        break
      case DIRECTION_RIGHT:
        target.style.transformOrigin = 'right'
        animation = {
          ...animation,
          width: { value: 0, duration }
        }
        break
      case DIRECTION_BOTTOM:
        target.style.transformOrigin = 'bottom'
        animation = {
          ...animation,
          scaleY: { value: 0, duration }
        }
        break
      case DIRECTION_LEFT:
        target.style.transformOrigin = 'left'
        animation = {
          ...animation,
          width: { value: 0, duration }
        }
        break
      default:
        break
    }

    anime(animation)
  })
}

