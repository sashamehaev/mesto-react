import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(user) {
    api.setUserInfo(user).then((item) => setCurrentUser(item));
  }

  function handleUpdateAvatar(avatar) {
    api.setAvatar(avatar).then((item) => setCurrentUser(item));
  }

  React.useEffect(() => {
    api.getUserInfo()
      .then((item) => {
        setCurrentUser(item);
      });

  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        

        <PopupWithForm name="add" title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="form__field">
            <input id="place-input" type="text" name="name" placeholder="Название" className="form__input form__input_type_place" required minLength="2" maxLength="30" />
            <span className="place-input-error form__input-error"></span>
          </label>
          <label className="form__field">
            <input id="link-input" type="url" name="link" placeholder="Ссылка на картинку" className="form__input form__input_type_link" required />
            <span className="link-input-error form__input-error"></span>
          </label>
        </PopupWithForm>

        

        <PopupWithForm name="delete" title="Вы уверены?" />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>


    </>
  );
}

export default App;
