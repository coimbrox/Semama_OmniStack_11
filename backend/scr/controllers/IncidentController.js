const connection = require('../database/connection'); /**importando a conexao com o banco    */
module.exports = {
    async index(request, response) {
      const {page = 1} = request.query;

      const [count] = await connection('incidents').count();
       

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1 ) * 5 )
        .select([
        'incidents.*',
         'ongs.name', 
         'ongs.email',
         'ongs.whatsapp', 
          'ongs.city',
          'ongs.uf' 
        ]);

      response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

    async create(request, response){
        const {title, description, value} = request.body; /* fazendo a desestruturação */
        const ong_id = request.headers.authorization;

     const [id] = await connection('incidents').insert({
           title,
           description,                /** caso queira gerar o id criado a partir desse cadastro colocar o const result = */
           value,             
           ong_id,
        });

        return response.json({ id }); 
 /** request.headers;  cabeçalho que guarda informações de autenticação e dados de localização (idioma) */ 
    },
    
    async delete(request, response){
      const { id } = request.params;
      const ong_id = request.headers.authorization;

      const incidents = await connection('incidents')
       .where('id', id)
       .select('ong_id')
       .first();

    if (incidents.ong_id !== ong_id)  {
        return response.status(401).json({error: 'Operation Not Permitted.'});
    } 

      await connection('incidents').where('id', id ).delete();
      
      return response.status(204).send();
    }

};  //*exportar objetos*/