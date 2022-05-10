import React from 'react';
import Card from './Card';
import btnAvatar from '../images/pen.svg';
import btnUser from '../images/edit-button.svg';
import btnCard from '../images/add-button.svg';
import { api } from '../utils/Api';


class Main extends React.Component {
    constructor(props) {
        super(props);
        

        this.state = {
            userName: '',
            userDescription: '',
            userAvatar: '',
            cards: []
        }
    }

    componentDidMount() {

        api.getUserInfo()
            .then((item) => {
                this.setState({
                    userName: item.name,
                    userDescription: item.about,
                    userAvatar: item.avatar
                });
            });

        api.getInitialsCard()
            .then((item) => {
                this.setState({
                    cards: item
                });
            });
    }

    render() {

        return (
            <main>
                <section className="profile">
                    <div className="profile__container">
                        <div onClick={this.props.onEditAvatar} className="profile__container-avatar">
                            <div className="profile__edit-photo-container">
                                <img src={btnAvatar} className="profile__edit-photo" />
                            </div>
                            <img alt="Фото профиля" src={this.state.userAvatar} className="profile__avatar" />
                        </div>

                        <div className="profile__info">
                            <div className="profile__info-container">
                                <h1 className="profile__name">{this.state.userName}</h1>
                                <button type="button" className="profile__edit-button" onClick={this.props.onEditProfile}>
                                    <img src={btnUser} alt="Кнопка редактировать профиль" className="profile__edit-button-img" />
                                </button>
                            </div>
                            <p className="profile__job">{this.state.userDescription}</p>
                        </div>
                    </div>
                    <button type="button" className="profile__add-button" onClick={this.props.onAddPlace}>
                        <img src={btnCard} alt="Кнопка добавить карточку" className="profile__add-button-img" />
                    </button>
                </section>

                <section className="elements">
                    {this.state.cards.map((item) => (
                        <Card card={item} key={item._id} handleCardClick={this.props.onCardClick} />
                    ))}
                </section>
            </main>
        );
    }

}

export default Main;