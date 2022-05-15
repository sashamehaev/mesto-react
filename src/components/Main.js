import React from 'react';
import Card from './Card';
import btnAvatar from '../images/pen.svg';
import btnUser from '../images/edit-button.svg';
import btnCard from '../images/add-button.svg';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main(props) {
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext);

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then(() => {
            setCards((state) => state.filter((item) => card._id !== item._id));
            
        });
    }


    React.useEffect(() => {
        api.getInitialsCard()
            .then((item) => {
                setCards(item);
            });

    }, []);


    return (
        <main>
            <section className="profile">
                <div className="profile__container">
                    <div onClick={props.onEditAvatar} className="profile__container-avatar">
                        <div className="profile__edit-photo-container">
                            <img src={btnAvatar} className="profile__edit-photo" />
                        </div>
                        <img alt="Фото профиля" src={currentUser.avatar} className="profile__avatar" />
                    </div>

                    <div className="profile__info">
                        <div className="profile__info-container">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}>
                                <img src={btnUser} alt="Кнопка редактировать профиль" className="profile__edit-button-img" />
                            </button>
                        </div>
                        <p className="profile__job">{currentUser.about}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace}>
                    <img src={btnCard} alt="Кнопка добавить карточку" className="profile__add-button-img" />
                </button>
            </section>

            <section className="elements">
                {cards.map((item) => (
                    <Card card={item} key={item._id} handleCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
                ))}
            </section>
        </main>
    );


}

export default Main;