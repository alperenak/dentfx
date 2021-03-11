import React from 'react';
import './card.scss';
import PropTypes from 'prop-types';
import WhiteBoard from './sub-components/WhiteBoard';

export default function Card(props) {
  return (
    <div className="cardContainer">
      <RenderByTypes {...props} />
    </div>
  );
}

function RenderByTypes(props) {
  let { type } = props;
  // if (type === 'features') {
  //   return <Features {...props} />;
  // } else if (type === 'dentistSay') {
  //   return <DentistSay {...props} />;
  // } else if (type === 'packages') {
  //   return <Packages {...props} />;
  // } else if (type === 'bigPackages') {
  //   return <BigPackages {...props} />;
  // }
  if (type === 'whiteBoard') {
    return <WhiteBoard {...props} />;
  } else {
    return <div>hata</div>;
  }
}

Card.propTypes = {
  type: PropTypes.string,
};
