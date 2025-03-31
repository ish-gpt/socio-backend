import { Server } from 'socket.io';

export class SocketConnection {
    userSocketMap = {};

    constructor(httpServer) {
        const io = new Server(httpServer, {
            cors: {
                allowedHeaders: ['*'],
                origin: '*'
            }
        });

        io.on("connection", (socket) => {
            // console.log("new array")
            const userId = socket.handshake.query.userId;

            if (userId) this.userSocketMap[userId] = socket.id;
            io.emit("connectedClientID", Object.keys(this.userSocketMap));
            // console.log("new array", this.userSocketMap);
            socket.on('disconnect', () => {
                delete this.userSocketMap[userId];
                // console.log("disconnect loggedout", Object.keys(userSocketMap));
                io.emit("connectedClientID", Object.keys(this.userSocketMap));
            });

            socket.on("newMessage", (msg) => {
                // console.log(msg);
                io.to(this.userSocketMap[msg.receiver]).emit('receivedMsg', msg);
            });
        });
    }
}