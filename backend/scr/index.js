const cors = require ('cors');
const express = require ('express');
const routes = require('./routes'); /** usar o "./" pra referenciar a pasta  */
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
/**
 * Rota/ Recurso 
 */
/**
 * Metodos HTTP :
 * 
 * GET: QUANDO QUISER BUSCAR OU LISTAR INFO DO BACK-END
 * POST: Criar info no Back-end
 * PUT: Alterar info do Back- end
 * DELETE: Deletar info do Back- end
 */     
/**
 * TIPOS DE PARAMETROS
 * 
 * Query Parms:Parâmetros nomeados enviados na rota após "?" (flitros,paginação)
 * Route Parms:Parâmetros utilizados para identificar recursos
 * Request Body: Copro da Requisição, utilizado pra criar ou alterar recurso
 */

 /**
  * SQL, MySQL, SQLite, PostegresSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver do Banco de Dados: SELECT * FROM users  
   * Query Builder: table('users').select('*').where()
   * Query BUilder que irei utilizar: knexjs
   */




