const Product = require('../Models/productModel');
const express = require('express');

module.exports.createProduct = async (req, res) => { 
  try {
    const newProduct = new Product({...req.body});
    await newProduct.save();
    res.status(200).json({message: "Product ajouté avec succès!" }); 
  } catch(error) {
    res.status(500).json({message: "Erreur lors de l'ajout"});
    console.log(error);
  }
}

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch(error) {
    res.status(500).json({message: "Erreur lors de la récupération des produits"});
    console.log(error);
  }
}