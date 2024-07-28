import React from "react";
import Feed from "./Feed.js";
import QHeader from "./QHeader";
import "./Quora.css";
import Sidebar from "./Sidebar";



function Quora() {
  return (
    <div className="quora">
      <QHeader />
      <div className="quora__content">
        <Sidebar />
      <Feed/>
        </div>
    </div>
  );
}

export default Quora;
