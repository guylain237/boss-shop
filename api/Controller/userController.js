const userModel = require("../Models/userModel");
const bcrypt = require('bcrypt'); 


module.exports.userCreate = async (req, res) => {
  console.log(req.body);
  const email = req.body.email; // email de l'utilisateur

  try {
    const result = await userModel.findOne({ email: email });

    console.log(result);

    if (result) {
      res.status(400).send({
        message: "Email already exists",
        alert: false
      });

    } else {
     
      const newUser = new userModel(req.body);
      const savedUser = await newUser.save();
      res.status(200).send({ message: "Utilisateur créé avec succès", alert: true });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: err.message,
    });
  }
};


module.exports.userLogin = async (req, res) => {
  console.log(req.body);  
  const { email , motpasse } = req.body;

  try {
      const result = await userModel.findOne({ email: email });

      if (result ) {
          const datasend = {
              _id: result._id,
              nom: result.nom,
              prenom: result.prenom,
              email: result.email,
              telephone: result.telephone,
              images: result.images
          }
          console.log(datasend);
          res.status(200).send({ message: "Login success", alert: true, data: datasend });
      } else {
          res.status(400).send({ message: err.message, alert: false });
      }
  } catch (err) {
      res.status(500).send({ message: err.message });
  }
}