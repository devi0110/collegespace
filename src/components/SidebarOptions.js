import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";

function SidebarOptions() {
  function handleClick()
  {
    console.log("ghj")
  }
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn-icons-png.flaticon.com/256/1830/1830839.png"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4472/4472584.png"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5205/5205074.png"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.lovepik.com/element/45004/5381.png_860.png"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2503/2503508.png"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2314/2314583.png"
          alt=""
        />
        <button onClick={handleClick}>Technology</button>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
