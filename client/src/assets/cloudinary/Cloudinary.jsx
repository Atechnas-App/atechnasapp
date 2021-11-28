


export const fileUpload = async (file) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/Atechnas/image/upload";

  const formData = new FormData();

  formData.append("upload_preset", "Atechnas");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    if (resp.ok) {
      const cloudResp = await resp.json();

      return cloudResp.secure_url;
    } else {
      throw new Error("No se pudo subir la imagen");
    }
  } catch (error) {
    throw new Error(error);
  }
};



/* import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
  const notesSnap = await db.collection(`${uid}/usuarios/photoURL`).get();
  const notes = [];
  notesSnap.forEach((snapHijo) => {
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });

  return notes;
};
 */