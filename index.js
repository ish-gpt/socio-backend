import {httpServer} from './socket/socket.js';
const PORT = 8080;

httpServer.listen(PORT, () => {
    console.log('Server started at port 8080');
});