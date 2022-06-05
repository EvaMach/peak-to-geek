import React, { useState } from 'react';
import './ChecklistItem.css';
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from 'react-spring';

const ChecklistItem = ({ initialItem, branchId, leafId, onCheck }) => {
  const [isChecked, setIsChecked] = useState(initialItem.done);
  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: isChecked ? '#2e9398' : '#fff',
    borderColor: isChecked ? '#2e9398' : '#ddd',
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: isChecked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    isChecked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.2],
  );

  console.log(isChecked);
  return (
    <label className="checklist__item">
      <input
        checked={isChecked}
        onChange={(event) => {
          setIsChecked(event.target.checked);
          onCheck(initialItem.id, branchId, leafId, isChecked);
        }}
        type="checkbox"
      />
      <animated.svg
        style={checkboxAnimationStyle}
        className="checkbox"
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <animated.path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke="#fff"
          strokeDasharray={checkmarkLength}
          strokeDashoffset={checkmarkAnimationStyle.x}
          ref={(ref) => {
            if (ref) {
              setCheckmarkLength(ref.getTotalLength());
            }
          }}
        />
      </animated.svg>
      {initialItem.name}
    </label>
  );
};

export default ChecklistItem;
