const {Fabricantes} = require("../models");

const fabricantesController = {
  listarFabricante: async (req, res)=>{

    const listaDeFabricantes = await Fabricantes.findAll();

    res.json(listaDeFabricantes);     
  },

  async cadastrarFabricante(req, res){
    const { nome } = req.body;

    const novoFabricante = await Fabricantes.create({
      nome,
    });

    res.json(novoFabricante);
  },

  async deletarFabricante(req, res){
    const {id} = req.params;

    await Fabricantes.destroy({
      where: {
        id,
      },      
    });
    res.json("Fabricante deletado")
  },
  async atualizarFabricante(req, res){
    const {id} = req.params;
    const { nome } = req.body;

    const FabricanteAtualizado = await Fabricantes.update({
      nome,
    },{
      where: {
        id,
      },
    },
    );

    res.json("Fabricante ataulizado")
  },
};

module.exports = fabricantesController;

