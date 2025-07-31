// import { httpServer } from './socket/socket.js';
import express from 'express';
import http from 'http';
import cors  from 'cors';
import { SocketConnection } from './socket/socket.js';
import { MongoConnection } from './dbLayer/connection/mongoConnection.js';
import { router } from './routes/messages.js';
import { userRoute } from './routes/userRouter.js';


const app = express();
const httpServer = http.createServer(app);
let socketObject = new SocketConnection(httpServer);
let dbConnection = new MongoConnection();
app.use(cors({
    origin: '*',  // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


dbConnection.connectToMongo();

const PORT = 8080;

httpServer.listen(PORT, () => {
    console.log('Server started at port 8080');
});

app.use('/api/v1/message', router)
app.use('/user', userRoute);