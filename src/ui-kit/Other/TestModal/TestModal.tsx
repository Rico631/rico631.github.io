import React, { FC, useState } from 'react';
import Modal from '../../Common/Modal/Modal';

const TestModal: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст"
      />
      <button onClick={openModal}>Открыть модальное окно</button>

      <Modal isOpen={modalIsOpen} onClose={closeModal}>
        <h2>Текст из инпута:</h2>
        <p style={{ color: 'red' }}>{inputValue}</p>
        <button onClick={closeModal}>Закрыть</button>
      </Modal>
    </div>
  );
};

export default TestModal;
