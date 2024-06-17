import React from "react";
import styles from "./Footer.module.css";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.socialMedia}>
        <h2 className={styles.heading}>Контакты</h2>
        <div className={styles.icon}>
          <FaYoutube />
          <FaTwitter />
          <IoLogoWhatsapp />
          <FaTelegram />
        </div>
        <p className={styles.copyright}>
          Copyright © 2020 - 2024 Название компании
        </p>
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.phone}>
          <p>+996  000-00-00</p>
          <p>+996  000-00-00</p>
        </div>
        <div className={styles.address}>
          <p>
            г. Пакровка, Майский проспект,
            <br /> дом, строение, номер кабинета
          </p>
        </div>
      </div>
      <div className={styles.hours}>
        <div>
          <p>пн-пт: 9:00-20:00</p>
          <p>сб: 10:00-18:00</p>
          <p>вс: (по договоренности)</p>
        </div>
        <div className={styles.email}>
          <a href="mailto:test@example.com">test@example.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
