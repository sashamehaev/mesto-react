import React from 'react';
import '../index.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleClick = () => {
        this.props.handleCardClick(this.props.card);

    }

    render() {

        return (

            <div className="element">
                <button className="element__delete"></button>
                <img className="element__image" src={this.props.card.link} onClick={this.handleClick} />
                <div className="element__description">
                    <h2 className="element__title">{this.props.card.name}</h2>
                    <div className="element__like-container">
                        <button type="button" className="element__like"></button>
                        <p className="element__like-value">{this.props.card.likes.length}</p>
                    </div>
                </div>
            </div>

        );
    }

}

export default Card;