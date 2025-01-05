import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        allowedHeaders: ['*'],
        origin: '*'
    }
});

let userSocketMap = {};
io.on("connection", (socket) => {

    const userId = socket.handshake.query.userId;

    if (userId) userSocketMap[userId] = socket.id;
    socket.broadcast.emit("connectedClientID", Object.keys(userSocketMap));
    // console.log("new array", userSocketMap);
    socket.on('disconnect', () => {
        delete userSocketMap[userId];
        // console.log("disconnect loggedout", Object.keys(userSocketMap));
        socket.broadcast.emit("connectedClientID", Object.keys(userSocketMap));
    });

});

export { io, httpServer, app };