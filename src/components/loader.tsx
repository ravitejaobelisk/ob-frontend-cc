import loader from '../theme/assets/img/loader.gif';
import React from 'react';

const Loader = () => {
  return (
    <div>
      <div className="text-center p-3">
        <img src={loader} alt="loader" className="" />
      </div>
    </div>
  );
};

export default Loader;
