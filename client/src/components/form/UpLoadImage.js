import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startUploading } from "../../actions/actions";
import "./form.css";

export const UpLoadImage = () => {
  const dispatch = useDispatch();

  const photo = localStorage.getItem("profileImage");
  console.log(photo);
  const { setInput } = useState(() => {
    if (photo) {
      return photo;
    }
  });

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    document.querySelector("#fotoPerfil").click();
  };

  return (
    <div>
      <div className="flex">
        <div className="grupoRegister">
          <p className="labels">Imagen de perfil</p>
          <input
            type="file"
            name="profilePicture"
            id="fotoPerfil"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          <img
            src={photo}
            alt="foto perfil"
            name="photo"
            width="250vw"
            height="250vh"
          />
          <br />
          <button className="botonImg" onClick={handleImageClick}>
            subir
          </button>

          <input
            type="hiden"
            id="inputPhoto"
            name="profilePicture1"
            onChange={(e) => setInput(e.target.value)}
            value={photo}
          />
        </div>
      </div>
    </div>
  );
};
