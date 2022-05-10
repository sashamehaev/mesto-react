import React from 'react';


class ImagePopup extends React.Component {

    render() {
        const isOpen = Object.keys(this.props.card).length ? 'popup_opened' : '';
        const { card, onClose } = this.props;

        return (
            <div className={`popup popup_type_card ${isOpen}`}>
                <div className="popup__container-card">
                    <img className="popup__image" src={card.link} />
                    <p className="popup__place">{card.name}</p>
                    <button type="button" className="popup__close" onClick={onClose}></button>
                </div>
            </div>
        );
    }

}

export default ImagePopup;