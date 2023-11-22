const userModel = require("../Models/userModel");

module.exports.userCreate = async (req, res) => {
  console.log(req.body);
  const email = req.body.email; // email de l'utilisateur

  try
   {
    const result = await userModel.findOne({ email: email });

    console.log(result);

    if (result)
     {
      res.status(400).send({
        message: "Email already exists", alert:false });

    } 
    else
     {
      const newUser = new userModel(req.body);
      const savedUser = await newUser.save();
      res.status(200).send({ message: "Utilisateur creer avec success",alert:true });
    }
  } 
  catch (err) 
  {
    console.log(err);
    res.status(500).send({
      message: err.message,
    });
  }
};
