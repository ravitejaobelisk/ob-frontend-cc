import { ReactNode } from 'react';
import React from 'react';

interface IProps {
  children: ReactNode;
  title: String;
  // any other props that come into the component
}

const Card = ({ children, title }: IProps) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">{title}</h4>
        </div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
