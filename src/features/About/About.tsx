import React from 'react';
import GitHubIcon from '../../assets/icons/svg/github.svg';
import MailIcon from '../../assets/icons/svg/mail.svg';
import TelegramIcon from '../../assets/icons/svg/telegram.svg';
import './About.css';

const About: React.FC = () => {
  return (
    <section >
      <h2>Обо мне</h2>
      <div>
        <strong>Имя:</strong> Филимонов Дмитрий
      </div>
      <div>
        <strong>О себе:</strong> .Net разработчик.
      </div>
      <div>
        <strong>Цель:</strong> Изучить frontend-разработку на фреймворке React.
      </div>
      <div>
        <strong>Опыт:</strong> 6 лет разработки.
      </div>
      <div className='about-links' >
        <a href="https://github.com/Rico631" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={GitHubIcon} alt="GitHub" width="50" height="50" />
        </a>
        <a href="mailto:rico@mail.ru" aria-label="Email">
          <img src={MailIcon} alt="Email" width="50" height="50" />
        </a>
        <a href="https://t.me/rico631" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <img src={TelegramIcon} alt="Telegram" width="50" height="50" />
        </a>
      </div>
    </section>
  );
};

export default About;