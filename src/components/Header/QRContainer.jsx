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
    const {isOpen} = this.state;
    const {randomString} = this.props;
    return (
      <div className='qr-container'>
        <button onClick={this.handleShowQR}><QRImage width="25"/></button>
        { isOpen &&
          <div className='overlay'>
            <div onClick={this.handleShowQR} className="close-overlay" />
            <QRCode value={`http://192.168.0.51:3000?agent-card=${randomString}`} size={300} />
          </div>
        }
      </div>
    )
  }
}