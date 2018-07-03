import React, {PureComponent} from 'react';
import QRCode from 'qrcode-react';
import QRImage from '../Icons/qr';

export default class QRContainer extends PureComponent {
  state = {
    isOpen: false,
  }

  handleShowQR = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const string = `http://192.168.0.51:3000?agent-card=${"BBBBBBBBRRRRRRRPPPPD".split('').sort(() => 0.5-Math.random()).join('')}`;
    const {isOpen} = this.state;
    return (
      <div className='qr-container'>
        <button onClick={this.handleShowQR}><QRImage width="25"/></button>
        { isOpen &&
          <div className='overlay'>
            <div onClick={this.handleShowQR} className="close-overlay" />
            <QRCode value={string} size={300} />
          </div>
        }
      </div>
    )
  }
}