import db from './db.js'

const CONTENTS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "conteudos" (
    "ID" INTEGER PRIMARY KEY AUTO_INCREMENT,
    "TITULO" varchar(64),
    "DESCRIÇÃO" varchar (64),
    "PORCENTAGEM" INTEGER
);`;

function createTableContent() {
    db.run(CONTENTS_SCHEMA, (error)=> {
        if(error) console.log('Erro ao criar tabela de conteudo');
    });
}

db.serialize( ()=>{
    createTableContent();
});