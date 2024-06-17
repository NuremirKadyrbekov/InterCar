import React, { useState } from "react";
import Css from "./Header.module.css";
// import LogoImg from "../../img/logo.png";
import { ReactComponent as MySVG } from '../../img/Logo.svg';
import CssModal from '../Modal/Modal.module.css'
import Modal from 'react-modal';


function NavBar() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  
  const closeModal = () => {
    setModalIsOpen(false);
  };
 
  const modalContent = (
    <div className={CssModal.Container}>
      <button onClick={closeModal} className={CssModal.Close}>&times;</button>
        <div className={CssModal.Close}>
        &times;
        </div>
      <div className={CssModal.Title}>
        <h1>Оставит заявку</h1>
      </div>
      <div className={CssModal.Contact}>
        <div className={CssModal.Name}>
            <p>Ваше имя:</p>
            <input type="text" name="" id="" />
        </div>
        <div className={CssModal.Phone}>
            <p>Телефон:</p>
            <input type="number" />
        </div>
        <div className={CssModal.Text}>
            <p>Ваше пожелания:</p>
            <textarea name="" id=""></textarea>
        </div>
      </div>
      <div className={CssModal.Send}><button>ОТПРАВИТЬ</button></div>
    </div>
  );
  return (
    <div className={Css.NavBar}>
      <div className={Css.Logo}>
        {/* <img src={LogoImg} alt="" /> */}
        <MySVG className={Css.MySVG} />
      </div>
      <ul>
        <a href="#about"><li>О КОМПАНИИ</li></a>
        <a href="#contact"> <li>КОНТАКТЫ</li></a>
       
       <a href="#services"><li>НАШИ УСЛУГИ</li></a> 
        <li onClick={openModal}>СВЯЗАТЬСЯ</li>
        <Modal className={CssModal.Main} isOpen={modalIsOpen} onRequestClose={closeModal}>
      {modalContent}
    </Modal>
      </ul>
    </div>
  );
}

export default NavBar;
