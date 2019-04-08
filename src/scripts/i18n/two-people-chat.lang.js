let lang;
/**
 * Update two-people-chat.html language
 */
function setLanguage(locale){
	switch(locale){
		case "en_US":
			lang = {
				"title": "DeChat ES5B - Chatroom",
				"dropdownUser": "User Profile",
				"profile": "Go to your SOLID profile",
				"navBarLogout": "Log out",
				"langSelector": "Language",
				"h5friends": "Friend list",
				"h5friendsDescription": "Please select a friend before you start chatting",
				"h1title": "Welcome to your decentralized chat room",
				"sendButton": "Send",
				"": "",
				"": ""
			}
			break;
		case "es_ES":
			lang = {
				"title": "DeChat ES5B - Sala de chat",
				"dropdownUser": "Perfil",
				"profile": "Ir a tu perfil de SOLID",
				"navBarLogout": "Cerrar sesión",
				"langSelector": "Idioma",
				"h5friends": "Listado de amigos",
				"h5friendsDescription": "Selecciona un amigo antes de comenzar a chatear",
				"h1title": "Bienvenido a tu sala de chat descentralizada",
				"sendButton": "Enviar",
				"": "",
				"": ""
			}
			break;
		default:
			console.error("No language set");
	}
	//Set navbar phrases
	document.title = lang.title;
	$("#dropdownUser").text(lang.dropdownUser);
	$("#profile").text(lang.profile);
	$("#navBarLogout").text(lang.navBarLogout);
	$("#langSelector").text(lang.langSelector);
	$("#h5friends").text(lang.h5friends);
	$("#h5friendsDescription").text(lang.h5friendsDescription);
	$("#h1title").text(lang.h1title);
	$("#sendButton").text(lang.sendButton);
	//$("#").text(lang.);
}

setLanguage("en_US");