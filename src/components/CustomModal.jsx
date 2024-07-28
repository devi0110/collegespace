import React from 'react';
import Modal from 'react-modal';
import { Avatar, Button, Input } from "@material-ui/core";
import { PeopleAltOutlined, ExpandMore, Link } from "@material-ui/icons";

const CustomModal = ({ isOpen, onRequestClose, user, handleQuestion, input, setInput, inputUrl, setInputUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={false}
      ariaHideApp={false}
    >
      <div className="modal__title">
        <h5>Add Question</h5>
        <h5>Share Link</h5>
      </div>
      <div className="modal__info">
        <Avatar
          className="avatar"
          src={
            user.photo
              ? user.photo
              : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
        />
        <p>{user.displayName ? user.displayName : user.email} asked</p>
        <div className="modal__scope">
          <PeopleAltOutlined />
          <p>Public</p>
          <ExpandMore />
        </div>
      </div>
      <div className="modal__Field">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Start your question with 'What', 'How', 'Why', etc."
        />
        <div className="modal__fieldLink">
          <Link />
          <input
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            type="text"
            placeholder="Optional: include a link that gives context"
          />
        </div>
      </div>
      <div className="modal__buttons">
        <button className="cancel" onClick={onRequestClose}>
          Cancel
        </button>
        <button type="submit" onClick={handleQuestion} className="add">
          Add Question
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;
