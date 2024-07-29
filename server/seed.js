import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({ connectionString: process.env.MESSAGEDB });

db.query(`
create table if not exists messages(
  id serial primary key,
  username varchar(255) ,
  message varchar(255) ,
  likes int
);



insert into messages (username,message,likes) values
('jamie','welcome',0);`);
