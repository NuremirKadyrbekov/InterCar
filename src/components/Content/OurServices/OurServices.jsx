import React, { useState } from "react";
import Css from "./OurServices.module.css";
import { TO, Engine, Transmission, Suspension } from "../../../Data";
import CssModal from "../../Modal/Modal.module.css";
import Modal from "react-modal";

function OurServices() {
  const [Content, setContent] = useState("TO");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div className={CssModal.Container}>
      <button onClick={closeModal} className={CssModal.Close}>
        &times;
      </button>
      <div className={CssModal.Close}>&times;</div>
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
      <div className={CssModal.Send}>
        <button>ОТПРАВИТЬ</button>
      </div>
    </div>
  );

  let ServicesBlocks;
  switch (Content) {
    case "TO":
      ServicesBlocks = TO.map((item) => {
        return (
          <div className={Css.ItemContainer}>
            <img src={item.img} alt={item.title} className={Css.ItemIMG} />
            <div className={Css.ItemDescription}>{item.title}</div>
            <div className={Css.ItemPrice}>
              {item.price === "Бесплатно при ремонте" ? (
                <div className={Css.Price}>
                  {" "}
                  <span>{item.price} </span>
                </div>
              ) : (
                <div className={Css.Price}>
                  от <span>{item.price} </span> сом{" "}
                </div>
              )}
              <li href="" onClick={openModal} className={Css.BookNow}>
                Записаться
              </li>
              <Modal
                className={CssModal.Main}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
              >
                {modalContent}
              </Modal>
            </div>
          </div>
        );
      });

      break;
    case "Engine":
      ServicesBlocks = Engine.map((item) => {
        return (
          <div className={Css.ItemContainer} >
            <img src={item.img} alt={item.title} className={Css.ItemIMG} />
            <div className={Css.ItemDescription}>{item.title}</div>
            <div className={Css.ItemPrice}>
              {item.price === "Бесплатно при ремонте" ? (
                <div className={Css.Price}>
                  {" "}
                  <span>{item.price} </span>
                </div>
              ) : (
                <div className={Css.Price}>
                  от <span>{item.price} </span> сом{" "}
                </div>
              )}
              <li href="" onClick={openModal} className={Css.BookNow}>
                Записаться
              </li>
              <Modal
                className={CssModal.Main}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
              >
                {modalContent}
              </Modal>
            </div>
          </div>
        );
      });
      break;
    case "Transmission":
      ServicesBlocks = Transmission.map((item) => {
        return (
          <div className={Css.ItemContainer}>
            <img src={item.img} alt={item.title} className={Css.ItemIMG} />
            <div className={Css.ItemDescription}>{item.title}</div>
            <div className={Css.ItemPrice}>
              {item.price === "Бесплатно при ремонте" ? (
                <div className={Css.Price}>
                  {" "}
                  <span>{item.price} </span>
                </div>
              ) : (
                <div className={Css.Price}>
                  от <span>{item.price} </span> сом{" "}
                </div>
              )}
              <li href="" onClick={openModal} className={Css.BookNow}>
                Записаться
              </li>
              <Modal
                className={CssModal.Main}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
              >
                {modalContent}
              </Modal>
            </div>
          </div>
        );
      });
      break;
    case "Suspension":
      ServicesBlocks = Suspension.map((item) => {
        return (
          <div className={Css.ItemContainer}>
            <img src={item.img} alt={item.title} className={Css.ItemIMG} />
            <div className={Css.ItemDescription}>{item.title}</div>
            <div className={Css.ItemPrice}>
              {item.price === "Бесплатно при ремонте" ? (
                <div className={Css.Price}>
                  {" "}
                  <span>{item.price} </span>
                </div>
              ) : (
                <div className={Css.Price}>
                  от <span>{item.price} </span>сом
                </div>
              )}
              <li href="" onClick={openModal} className={Css.BookNow}>
                Записаться
              </li>
              <Modal
                className={CssModal.Main}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
              >
                {modalContent}
              </Modal>
            </div>
          </div>
        );
      });
      break;

    default:
      break;
  }

  return (
    <div className={Css.Container} id="services">
      <div className={Css.Title}>
        <h1>НАШИ УСЛУГИ</h1>
        <h3>За нашими плечами тысячи обслуженных автомобилей</h3>
      </div>
      <div className={Css.OurServices}>
        <div className={Css.Buttons}>
          {Content === "TO" ? (
            <button className={Css.ButtonActive}>TO</button>
          ) : (
            <button
              className={Css.ButtonNoActive}
              onClick={() => setContent("TO")}
            >
              TO
            </button>
          )}
          {Content === "Engine" ? (
            <button className={Css.ButtonActive}>Двигатель</button>
          ) : (
            <button
              className={Css.ButtonNoActive}
              onClick={() => setContent("Engine")}
            >
              Двигатель
            </button>
          )}
          {Content === "Transmission" ? (
            <button className={Css.ButtonActive}>Трансмиссия</button>
          ) : (
            <button
              className={Css.ButtonNoActive}
              onClick={() => setContent("Transmission")}
            >
              Трансмиссия
            </button>
          )}
          {Content === "Suspension" ? (
            <button className={Css.ButtonActive}>Подвеска</button>
          ) : (
            <button
              className={Css.ButtonNoActive}
              onClick={() => setContent("Suspension")}
            >
              Подвеска
            </button>
          )}
        </div>
        <div className={Css.ServicesBlock}>{ServicesBlocks}</div>
      </div>
    </div>
  );
}

export default OurServices;
