const {io} = require('../server');

io.on('connection', (client) =>{
	console.log('uusuario conectado');

	client.emit('enviarMensaje', {
		usuario:'Adiministrador',
		mensaje:'Bienvenido a esta aplicación'
	});

	client.on('disconnect', ()=>{
		console.log('usuario desconectado');
	});

	//Escuchar el cliente
	client.on('enviarMensaje', (data, callback) =>{
		console.log(data);

		client.broadcast.emit('enviarMensaje', data);
		/*if(mensaje.usuario){
			callback({
				resp: 'Todo salio Bien!!!'
			});
		}else{
			callback({
				resp: 'Todo salio mal!'
			});
		}*/

		//callback();

	});
});