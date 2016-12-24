


// Copy animation properties from staggered
export const addProps = props => item => {
  if (!item.ownsProps) {
    item.animProps = Object.assign({}, props);
  }
  return item;
};

// Stagger for animations
export const getStagger = stagger => (item, i) => {
  item.animProps.delay = i * Number(stagger);
  return item;
};

// Reverse stagger
export const getStaggerReverse = (stagger, count) => (item, i) => {
  item.animProps.delay = (count * stagger) - (i * stagger);
  return item;
};


export const ensureIterations = element => {
  element.animProps.iterations = 1;
  element.animProps.fill = 'backwards';
  return element;
};

export const addReverse = reverse => item => {
  if (reverse) {
    item.animProps.direction = 'reverse';
    item.animProps.fill = 'forwards';

  }
  return item;
};

export const getKeyframes = keyframes => el => {
  if (!el.keyframes) {
    el.keyframes = keyframes;
  }
  return el;
};

export const log = item => {
  console.log(item);
  return item;
};
