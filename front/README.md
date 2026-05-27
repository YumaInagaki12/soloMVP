```sh
npm init -y
npm install express
npm install knex
npm install pg
npm install dotenv
npm install nodemon
```

DATABASE soloMVP;
\q

````

.env ファイルの作成（USER や PASSWORD など必要に応じて記述してください）

中身は
```
DB_USER=
DB_PASSWORD=
DB_NAME=soloMVP
```
マイグレーションとシード

```sh
npm run db:migrate
npm run db:seed
```

データベースの確認

```sh
psql -d soloMVP
\dt
SELECT * FROM health_logs;
\q
```A
````
