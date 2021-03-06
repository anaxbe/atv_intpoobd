const {Pool} = require('pg');

async function criarConexao(){
    const poll = new Pool({
        connectionString: ',
        ssl: {
            rejectUnauthorized: false
        }
    });
    let con = await poll.connect(); 
   
    /*await con.query(`create table pedido(
            id serial,
            sabor varchar,
            tamanho varchar,
            sem_lactose varchar,
            sabor_borda varchar,
            valorDopedido integer,

            constraint pedido_pk primary key (id)
        )`
    );
await con.query(
        `insert into pedido(tamanho, sem_lactose, sabor) values 
            ($1, $2, $3)`, 
            ['pequena', 'sem lactose', 'calabresa']
    );
await con.query(
        `insert into pedido(tamanho, sabor) values 
            ($1, $2), ($3, $4)`, 
            ["familia", "calabresa", "pequena", "frango"]
    );
  await con.query("delete from pedido where sabor like $1", ["calabresa%"]);*/
 
  let res = await con.query('select * from pedido');
    console.log(res);
    con.release();   
}
criarConexao();