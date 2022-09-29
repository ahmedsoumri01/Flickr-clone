import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [search, setSearch] = useState(false);
  function Search() {
    setSearch(() => {
      return true;
    });
  }
  function close() {
    setSearch(() => {
      return false;
    });
  }

  return (
    <div className="Header">
      <img
        src="https://www.freeiconspng.com/uploads/flickr-logo-png-20.png"
        width="75"
        alt="Transparent PNG Flickr Logo"
        style={search ? { display: "none" } : null}
      />
      <div className="inpt" style={search ? { display: "contents" } : null}>
        <input type="text" placeholder="photos, people, groups" />
      </div>
      <div className="btns">
        <div className="iconed">
          {search ? (
            <CloseIcon onClick={close} />
          ) : (
            <SearchIcon onClick={Search} className="iconet" />
          )}
        </div>
        <button style={search ? { display: "none" } : null} id="btn1">
          Log in
        </button>
        <button style={search ? { display: "none" } : null}>sign up</button>
      </div>
    </div>
  );
}

export default Header;
