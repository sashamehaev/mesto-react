import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: false
    }
  }


  handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: !this.state.isEditAvatarPopupOpen });
  }

  handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: !this.state.isEditProfilePopupOpen });
  }

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: !this.state.isAddPlacePopupOpen });
  }

  handleCardClick = (card) => {
    this.setState({ selectedCard: card });
  }

  closeAllPopups = () => {
    this.setState({
      isAddPlacePopupOpen: false,
      isEditProfilePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: false
    });
  }

  render() {


    return (
      <>
        <Header />
        <Main
          onEditProfile={this.handleEditProfileClick}
          onAddPlace={this.handleAddPlaceClick}
          onEditAvatar={this.handleEditAvatarClick}
          onCardClick={this.handleCardClick}
        />
        <Footer />

        <PopupWithForm name="edit" title="Редактировать профиль" 
          isOpen={this.state.isEditProfilePopupOpen} 
          onClose={this.closeAllPopups}
        >
          <label className="form__field">
            <input id="name-input" name="name" type="text" placeholder="Имя" className="form__input form__input_type_name" required minLength="2" maxLength="40" />
            <span className="name-input-error form__input-error"></span>
          </label>
          <label className="form__field">
            <input id="job-input" name="about" type="text" placeholder="О себе" className="form__input form__input_type_job" required minLength="2" maxLength="200" />
            <span className="job-input-error form__input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name="add" title="Новое место" 
          isOpen={this.state.isAddPlacePopupOpen} 
          onClose={this.closeAllPopups}
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

        <PopupWithForm name="avatar" title="Обновить аватар" 
          isOpen={this.state.isEditAvatarPopupOpen} 
          onClose={this.closeAllPopups}
        >
          <label className="form__field">
            <input id="avatar-link-input" type="url" name="link" placeholder="Ссылка на картинку" className="form__input form__input_type_link" required />
            <span className="avatar-link-input-error form__input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Вы уверены?" />

        <ImagePopup card={this.state.selectedCard} onClose={this.closeAllPopups} />


      </>
    );
  }


}

export default App;
