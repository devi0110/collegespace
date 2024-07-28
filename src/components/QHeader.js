import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import SearchIcon from "@material-ui/icons/Search";
import Modal from "react-modal";
import "./QHeader.css";
import { Avatar, Button, Input } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import { ExpandMore, Link } from "@material-ui/icons";
import firebase from "firebase";

Modal.setAppElement("#root");

function QHeader() {
  const user = useSelector(selectUser);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;

  const handleShowProfile = (e) => {
    e.preventDefault();
    setShowProfile(true);
  }

  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (questionName) {
      db.collection("questions").add({
        user: user,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setInput("");
    setInputUrl("");
  };

  return (
    <div className="qHeader">
      <div className="qHeader__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
          alt="Quora Logo"
        />
      </div>
      <div className="qHeader__icons">
        <div className="active qHeader__icon">
          <HomeIcon />
        </div>
      </div>
      <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="Search Quora" />
      </div>

      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <Avatar
            onClick={() => auth.signOut()}
            className="Avatar"
            src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"
          />
        </div>

        <div className="qHeader__avatar">
          <Avatar
            className="Avatar"
            src={
              user.photo
                ? user.photo
                : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
            }
            onClick={handleShowProfile} // Added onClick handler
          />
        </div>

        <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
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
              <PeopleAltOutlinedIcon />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
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
            <button className="cancel" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="submit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>

        <Modal 
        style={{
          content: {
            top: '30%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          }
        }}
          isOpen={showProfile}
          onRequestClose={() => setShowProfile(false)}
          shouldCloseOnOverlayClick={false}>
          
          <div className="profile__modal">
            <h2>Your Profile</h2>
            <div className="qHeader__Rem">
              <div className="qHeader__avatar">
              
              </div>
              <p>{user.displayName ? user.displayName : user.email}</p>
            </div>
            <button onClick={() => setShowProfile(false)}>Close</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default QHeader;
