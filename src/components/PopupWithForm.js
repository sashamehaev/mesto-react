import React from 'react';


class PopupWithForm extends React.Component {

    render() {
        const isOpen = this.props.isOpen ? 'popup_opened' : '';
        
        return (
            <div className={`popup popup_type_${this.props.name} ${isOpen}`}>
                <div className="popup__container">
                    <form className={`form form_type_${this.props.name}`} name={this.props.name}>
                        <h2 className="form__title">{this.props.title}</h2>
                        {this.props.children}
                        <button type="submit" className="form__button" onClick={this.props.onClose}>Сохранить</button>
                    </form>
                    <button type="button" className="popup__close" onClick={this.props.onClose}></button>
                </div>
            </div>
        )
    }

}

export default PopupWithForm;