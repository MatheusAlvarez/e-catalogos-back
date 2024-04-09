const database = require("../config/dbConfig");
const colorsModel = require("../models/colorsModel");
const imagesModel = require("../models/imagesModel");
const productsModel = require("../models/productsModel");
const skusModels = require("../models/skusModels");


class adminController{

    // ------------------------------------------ Criação ------------------------------------------
    
    //Produtos
    static async createProducts(req, res){
        try{        
            const { name, reference, price} = req.body;

            if (
            !name ||
            !reference ||
            !price || isNaN(price) || price <= 0
            ) {
                return res.status(400).json({ error: "Preencha todos os campos corretamente!" });
            }

            await database.sync();

            const existingProduct = await productsModel.findOne({
                where: {
                    reference: reference
                }
            });
          
            if(existingProduct){
                return res.status(201).json({ message: "Referencia já cadastrada"});
            }
            else{
                await productsModel.create(req.body);
                return res.status(201).json({ message: "Produto cadastrado com sucesso!"});
            }
                                
        }
        catch(err){
            console.log('Erro ao criar produto: ', err);
        
            res.status(500).json({ error: "Erro ao criar o produto. Por favor, tente novamente." });
        }
    }

    //Cor
    static async createColors(req, res){        
        try {  
            await database.sync();          
            await colorsModel.create(req.body);
            res.status(200).json("Cor cadastrada com sucesso!");

        } catch (err) {
            console.log(err);
        }
    }

    //Imagens
    static async createImages(req, res){
        await database.sync();

        try{
            await imagesModel.create(req.body);
            res.status(200).json("Imagem cadastrada com sucesso!");
        }
        catch(err){
            console.log(err);
        }
    }

    //Skus
    static async createSkus(req, res){
        
        await database.sync();

        try{
            await skusModels.create(req.body);
            res.status(200).json("Sku cadastrada com sucesso!");
        }
        catch(err){
            console.log(err);
        }
    }

    // ------------------------------------------ Listagem de Produtos ------------------------------------------
    
    //listar produto
    static async listProducts(req, res){
        await database.sync();
        try{

            const id = req.params.id;

            productsModel.findOne({raw: true, where: { id: id }})
            .then((response) => res.status(200).json(response))
        }
        catch(err){
            res.status(404).json("Produto não encontrado");
        }
    }

    //listar cor
    static async listColors(req, res){
        await database.sync();
        try{

            const id = req.params.id;

            colorsModel.findAll({raw: true, where: { product_id: id }})
            .then((response) => res.status(200).json(response))
        }
        catch(err){
            res.status(404).json("Cor não encontrada");
        }
    }

    //Listar imagem
    static async listImage(req, res){
        await database.sync();
        try{

            const id = req.params.id;

            imagesModel.findAll({raw: true, where: { product_id: id }})
            .then((response) => res.status(200).json(response))
        }
        catch(err){
            res.status(404).json("Image não encontrada");
        }
    }

    //Listar Skus
    static async listSkus(req, res){
        await database.sync();
        try{
            skusModels.findAll({raw: true, where: { product_id: id }})
            .then((response) => res.status(200).json(response))
        }
        catch(err){
            res.status(404).json("Sku não encontrado");
        }
    }



}

module.exports = adminController;