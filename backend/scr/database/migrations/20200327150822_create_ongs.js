exports.up = function(knex) {   
    return knex.schema.createTable ('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();      /** método up responsável pela criação da tabela */
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    })
    
    };
    
    exports.down = function(knex) {      /** se der algum problema e eu quiser voltar atrás (deletar tabela) */
     return knex.schema.dropTable('ongs');
    };
        