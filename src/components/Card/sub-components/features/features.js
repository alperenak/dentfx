import React from 'react';
import './features.scss';

export default function Features({ title, children }) {
  return (
    <div className={'featuresCard'}>
      {children}
      <div className={'CardTitle'}>{title}</div>
    </div>
  );
}
