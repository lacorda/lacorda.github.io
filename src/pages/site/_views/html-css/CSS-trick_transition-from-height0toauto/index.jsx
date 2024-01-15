import React from 'react';
import './index.scss';

const CssTrickTransitionFromHeight0toauto = () => {
  return (
    <div className="accordion">
      <div className="accordion-title">Hover me!</div>
      <div className="accordion-body">
        <div className="accordion-body__overflow">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ullam ipsam dignissimos perspiciatis consequatur itaque maxime nihil cupiditate veniam. Perferendis!</p>
        </div>
      </div>
    </div>
  );
};

export default CssTrickTransitionFromHeight0toauto;