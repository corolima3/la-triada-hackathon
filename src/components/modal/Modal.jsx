// CustomModal.js
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '90%',
    overflow: 'hidden',
  },
};

const CustomModal = ({ isOpen, closeModal, imageURL }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Imagen Modal"
      style={customStyles}
    >
      <button onClick={closeModal} style={{ position: 'absolute', top: '0.1rem', right: '2rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '2rem', color: 'black' }}>x</button>
      <img src={imageURL} alt="Imagen en modal" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </Modal>
  );
};

export default CustomModal;
