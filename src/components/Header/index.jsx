import React from 'react';
import QRContainer from './QRContainer';

const Header = ({randomString}) => (
  <div className="header">
    <h1>CODENAMES</h1>
    <QRContainer randomString={randomString} />
  </div>
)

export default Header;