import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rate(props) {
  const score = props.score;

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        icon={faStar}
        className={score >= i ? 'star_red' : 'star'}
        key={i.toString()}
      />
    );
  }

  return (
    <div className="rate-contenair">
      {stars}
    </div>
  );
}

export default Rate;