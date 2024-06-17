import React, { useState } from "react";
import NavBar from "./NavBar";
import Css from "./Header.module.css";
import Bgc from "../../img/Bgc2.png";
import Modal from 'react-modal';
import CssModal from '../Modal/Modal.module.css'

export default function Header() {
  const BgcConst = {
    backgroundImage: `url(${Bgc})`,
  };
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
    <div className={Css.Container} style={BgcConst}>
      <div>
        <NavBar />
      </div>
      <div className={Css.HeaderBlock}>
        <div className={Css.Content}>
          <div className={Css.HeaderTitlies}>
            <h2>АВТОСЕРВИС</h2>
            <h4>Надежный и ответственный</h4>
            <h1>INTERCAR</h1>
          </div>

          <div className={Css.OldYear}>
            <h3>17</h3>
            <div className={Css.DecarationText}></div>
            <div className={Css.OldYearBlock2}>лет <br /> на рынке</div>
          </div>
          <button className={Css.ContactButton} onClick={openModal} >Связаться с нами</button>
          <Modal className={CssModal.Main} isOpen={modalIsOpen} onRequestClose={closeModal}>
      {modalContent}
    </Modal>
        </div>
      </div>
    </div>
  );
}
