import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';



 const app = express();

app.use(cors());

 app.use(express.json());

 app.use(routes);

 //Rota: Endereço completo da requisição
 //Recurso: Qual entidade estamos acessando do sistema

 //Request Param: Parâmetros que vem na proproa rota que identificamos um recurso
 //Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
 //Request Body Parâmetros para criação/atualização de informações
 

 app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
 app.listen(3333);