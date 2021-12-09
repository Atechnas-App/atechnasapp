const { Router } = require("express");
const axios = require("axios");
// const open = require("open");
// const path = require("path");
const mercadopago = require("mercadopago");
const { Usersmp } = require("../db");

const router = Router();
// PUBLIC =TEST-1c069190-12d6-466a-a3a5-c442a8521f48

const mercadoPagoPublicKey = process.env.PUBLIC_KEY;
if (!mercadoPagoPublicKey) {
  console.log("Error: public key not defined");
  process.exit(1);
}

const mercadoPagoAccessToken = process.env.ACCESS_TOKEN;
if (!mercadoPagoAccessToken) {
  console.log("Error: access token not defined");
  process.exit(1);
}

mercadopago.configurations.setAccessToken(mercadoPagoAccessToken);

// const app = express();

// app.set("view engine", "html");
// app.engine("html", require("hbs").__express);
// app.set("views", path.join(__dirname, "views"))

// app.use(express.urlencoded({ extended: false }));
// app.use(express.static("./static"));
// app.use(express.json());

router.get("/accesmp", (req, res) => {
  const { code } = req.query;
  console.log("desde el back", code);
  if (code) {
    let userCredentials = {
      client_secret: process.env.CLIENT_SECRET,
      client_id: process.env.APP_ID,
      grant_type: "authorization_code",
      code,
      redirect_uri: "http://localhost:3001/api/accesmp",
    };

    axios
      .post("https://api.mercadopago.com/oauth/token", userCredentials)
      .then((cred) => {
        console.log(cred.data);
        Usersmp.create(cred.data);
      })
      .then( r => res.send(cred.data))
      .catch((err) => console.log(err.message));
  } else {
    res.send("Code not provided")
  }
  // res.status(200).render("index", { mercadoPagoPublicKey });
});
// app.get("/", function (req, res) {
// });

router.post("/process_payment", (req, res) => {
  const { body } = req;
  const { payer } = body;
  const paymentData = {
    transaction_amount: Number(body.transactionAmount),
    token: body.token,
    description: body.description,
    installments: Number(body.installments),
    payment_method_id: body.paymentMethodId,
    issuer_id: body.issuerId,
    payer: {
      email: payer.email,
      identification: {
        type: payer.identification.docType,
        number: payer.identification.docNumber,
      },
    },
  };

  mercadopago.payment
    .save(paymentData)
    .then(function (response) {
      const { response: data } = response;
      res.status(response.status).json({
        status_detail: data.status_detail,
        status: data.status,
        id: data.id,
      });
    })
    .catch(function (error) {
      res.status(error.status).send(error);
    });
});

module.exports = router;
// {
//     "id": 1034748483,
//     "nickname": "TESTSH1SBBOG",
//     "password": "qatest69",
//     "site_status": "active",
//     "email": "test_user_11366720@testuser.com"
//   }
