var socket = io();
    	//On Escuchar 
    	socket.on('connect', function(){
    		console.log('Conectado al servidor');
    	});

    	socket.on('disconnect', function(){
    		console.log('Perdimos conexion con el servidor');
    	});

    	//Emit Enviar información
    	socket.emit('enviarMensaje', {
    		usuario: 'Mariana',
    		mensaje: 'Hola mundo'
    	}, function(resp){
    		console.log('Respuesta server: ', resp);
    	});

    	//Escuchar información
    	socket.on('enviarMensaje', function(mensaje){
    		console.log('Servidor: ', mensaje);
    	})