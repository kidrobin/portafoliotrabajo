import React from 'react';

const OpenButton = () => (
  <div className="nav-show">
    <i className="fas fa-chevron-circle-down"></i>
  </div>
)

const CloseButton = () => (
  <div className="nav-show">
    <i className="fas fa-chevron-circle-up"></i>
  </div>
);

export {OpenButton, CloseButton}
