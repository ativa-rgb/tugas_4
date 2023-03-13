import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
    host: "db.vcbtfgofmweaymihajxv.supabase.co",
    user: "postgres",
    password: "avitadiah28",
    database: "postgres",
    port: 5432

});

await client.connect();
console.log("database terhubung");

