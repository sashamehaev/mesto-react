import React from 'react';


class Card extends React.Component {

    handleClick = () => {
        this.props.handleCardClick(this.props.card);
    }

    render() {
        const { card } = this.props;

        return (

            <div className="element">
                <button className="element__delete"></button>
                <img className="element__image" src={card.link} onClick={this.handleClick} />
                <div className="element__description">
                    <h2 className="element__title">{card.name}</h2>
                    <div className="element__like-container">
                        <button type="button" className="element__like"></button>
                        <p className="element__like-value">{card.likes.length}</p>
                    </div>
                </div>
            </div>

        );
    }

}

export default Card;