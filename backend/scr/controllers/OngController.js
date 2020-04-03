const generateUniqueid = require ('../utils/generateUniqueid');
const connection = require('../database/connection');

module.exports = {
  async index(request , response) {

    const ongs = await connection ('ongs').select('*');
      
        return response.json(ongs)                        /** LISTAGEM DE ONGS */      
    },
    
  async create (request, response) {
    const {name, email, whatsapp, city, uf} = request.body;

    const id = generateUniqueid();
 
   await connection('ongs').insert({
        id,
        name,
        email,                                     /** CADASTRO DE ONGS */
        whatsapp,
        city,
        uf
    })
 
 
     return response.json({ id });
  }
};