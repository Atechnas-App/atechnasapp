import "./Perfil.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "../../actions/actions";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import CardTrabajo from "./CardTrabajo/CardTrabajo";
import CardComentario from "./CardComentario/CardComentario";
import axios from "axios";

export default function Perfil(props) {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.rootReducer.details);
  const { id } = JSON.parse(localStorage.getItem("user"));
  const id1 = localStorage.getItem("idgit");
  const [preferenceId, setPreferenceId] = useState("");
  //   console.log(id1);

  let fullId = props.match.params.id;

  useEffect(() => {
    console.log(detail)
    dispatch(getDetails(fullId, id, id1));
    if (detail.public_key ) {
      console.log("publik key:", detail.public_key);
      axios
        .post(`http://localhost:3001/api/create_preference?id=${detail.id}`, {
          quantity: 10,
          price: 100,
          description: "BACKEND DEVELOPER",
        })
        .then((res) => {
          console.log("respuesta del post", res.data);
          setPreferenceId(res.data.id);
        })
        .catch((e) => e.message);
    } else {
      console.log("key null:", detail.public_key)
      return;
    }
  }, [dispatch]);

  //   console.log("id de usuario", detail.id);
  //   console.log(`preferenceId`, preferenceId);

  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = () => {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      console.log("entró al else");
      script.onload = () => callback();
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  const handleScriptLoad = () => {
    const mp = new window.MercadoPago(detail.public_key, {
      locale: "es-AR",
    });
    mp.checkout({
      preference: {
        id: preferenceId,
      },
      autoOpen: true,
      marketplace_fee: 2,
    });
    console.log(preferenceId);
    console.log(detail.public_key);
  };

  function handleHire(e) {
    e.preventDefault();
    console.log("ESTOY EN EL HANDLE");

    loadScript("https://sdk.mercadopago.com/js/v2", handleScriptLoad);
  }
  return (
    <div className="perfil-container">
      <Nav />
      <h1>SOBRE MI</h1>
      <hr className="hr-perfil-verde"></hr>
      <div className="datos-perfil">
        <div className="foto-perfil">
          <div className="foto-de-perfil">
            <img
              className="foto-de-perfil"
              src={detail.profilePicture}
              alt="img not found"
            ></img>
            {/* <div>{detail.categories?detail.categories[0].category:"Usuario sin categoria"}{detail.qualification}</div> */}
          </div>
          <div>
            <form className="boton-container">
              <Link to={`/editPerfil/${fullId}`}>
                <button className="boton-perfil">Editar Perfil</button>
              </Link>
              <button
                className="boton-perfil"
                onClick={
                  detail.public_key === null
                    ? (e) => {
                        e.preventDefault();
                        alert("Usuario sin credenciales");
                      }
                    : (e) => handleHire(e)
                }
              >
                Contratar
              </button>
              <form id="button-pay" method="GET" />
              <button className="boton-perfil">Mensaje</button>
            </form>
          </div>
        </div>
        <div className="descripcion-perfil">
          <h1 className="nombre-completo-perfil">
            {detail.name} {detail.lastName}
          </h1>
          <hr className="hr-perfil-violeta"></hr>
          <div className="contenedor-idiomas">
            {detail.languages?.map((e) => {
              return <h4 className="idiomas-perfil">{e.languages}</h4>;
            })}
          </div>
          <p className="descripcion-texto">{detail.description}</p>
          <a href={detail.portfolio}>
            <button cursor="pointer" className="boton-perfil">
              Portfolio
            </button>
          </a>
          <h2>Skills</h2>
          <hr className="hr-perfil-violeta"></hr>
          <div className="keyword-container">
            {detail.technologies
              ? detail.technologies.map((e) => {
                  return <h3 className="keyword">{e.technology}</h3>;
                })
              : "Sin keywords"}
          </div>
        </div>
      </div>
      {/* <div className="trabajos-perfil">
                <div>
                    <h1>MIS TRABAJOS</h1>
                    <hr className="hr-perfil-verde"></hr>
                </div>
                <div>
                    <CardTrabajo id={fullId}/>
                </div>
            </div>
            <div className="comentarios-perfil">
            <div>
                    <h1>COMENTARIOS</h1>
                    <hr className="hr-perfil-verde"></hr>
                </div>
                <div>
                    <CardComentario/>
                </div>
            </div> */}
    </div>
  );
}
//   useEffect(() => {
//       // con el preferenceId en mano, inyectamos el script de mercadoPago
//       const script = document.createElement("script");
//       script.type = "text/javascript";
//       script.src = "https://sdk.mercadopago.com/js/v2";
//       document.head.appendChild(script);

// //       const scriptDos = document.createElement("script");
// //              public key del vendedor(usuario)
//       const mp = new window.MercadoPago(
//           detail.public_key,
//           {
//               locale: "es-AR",
//             }
//             );
//         mp.checkout({
//             preference: {
//                 id: preferenceId,
//             },
//             render: {
//                 container: "#button-pay", // Indica el nombre de la clase donde se mostrará el botón de pago
//                 label: "Pagar", // Cambia el texto del botón de pago (opcional)
//             },
//         });
//             scriptDos.appendChild(mp)
//             document.body.appendChild(scriptDos);

//       //   script.addEventListener("load", addCheckout); // Cuando cargue el script, se ejecutará la función addCheckout
//     //   if (preferenceId) {
//     // }
//   }, []);
//   console.log(detail.categories, "Hay categorias?");

// const mercadopago = new mercadopago("TEST-e265a5a1-c336-4a51-8c96-b34e9c36bbc3", {locale :"es-AR"})
// const script = document.createElement("script");
// script.type = "text/javascript";
// script.src =
//   "https://sdk.mercadopago.com/js/v2";
//   script.addEventListener('load', addCheckout); // Cuando cargue el script, se ejecutará la función addCheckout
//   document.body.appendChild(script);
// script.setAttribute("data-preference-id", res.data.id);

// const form = document.getElementById("button-pay");
// form.appendChild(script);
//   })
//   .catch((e) => console.log(e.message));

// axios
//   .post(`http://localhost:3001/api/create_preference?id=${detail.id}`, {
//     quantity: 10,
//     price: 100,
//     description: "BACKEND DEVELOPER",
//   })
//   .then((res) => {
//     console.log("respuesta del post", res.data);
//     setPreferenceId(res.data.id);
//     // paymentsApi.testmp().then((res) => {
//     //   console.log(`CARGO EL ITEM`, res);
//     // });
//   })
//   .then((res) => {
//     console.log(preferenceId);
//     loadScript("https://sdk.mercadopago.com/js/v2", handleScriptLoad);
//   })
//   .catch((err) => {
//     console.log(`err`, err);
//   });
