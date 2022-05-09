import React from 'react';
import '../index.css';

class ImagePopup extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const isOpen = this.props.card ? 'popup_opened' : '';

        return (
            <div className={`popup popup_type_card ${isOpen}`}>
                <div className="popup__container-card">
                    <img className="popup__image" src={this.props.card.link} />
                    <p className="popup__place">{this.props.card.name}</p>
                    <button type="button" className="popup__close" onClick={this.props.onClose}></button>
                </div>
            </div>
        );
    }

}

export default ImagePopup;