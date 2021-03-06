let lang;
/**
 * Update login screen language
 */
function setLanguage(locale) {
	// This saves user preference in localStorage to
	// persist locale across windows (and sessions)
	window.localStorage.userLocale = locale;
	switch (locale) {
		case "en-US":
			lang = {
				"title": "DeChat ES5B - Your decentralized chat",
				"about": "About the chat",
				"langSelector": "Language",
				"h1header": "Welcome to our decentralized chat",
				"h2header": "Log in with your Solid POD!",
				"logInBtn": "Log in",
				"logOutBtn": "Log out",
				"chatRef": "Enter to chat",
				"h3header": "Start chatting",
				"desc1": "Just log in with your Solid community account and start chatting.",
				"desc2": "You need friends in your solid community account to be able to chat.",
				"h3header2": "How it works",
				"desc3": "Our deChat is a decentralized chat site, built on top of Solid.",
				"desc4": "All personal data about the chat is stored on your POD.",
				"desc5": "You can also use our desktop application.",
				"modalIDPTitle": "Select your Identity Provider (IDP) or WebID",
				"modalIDPDescription": "If you want to login using Solid Community Server, leave this field empty and click \"Login with Solid Community\"",
				"solidLogin": "Log in with Solid Community",
				"idpLogin": "Log in",
				"desktop_app": "Desktop app",
				"about_us": "About us",
				"development": "Development",
				"arc42": "Arc42 Docs"
			}
			break;
		case "es-ES":
			lang = {
				"title": "DeChat ES5B - Chatea con tus amigos de forma descentralizada",
				"about": "Acerca de",
				"langSelector": "Idioma",
				"h1header": "Bienvenido a nuestro chat descentralizado",
				"h2header": "Inicia sesión con tu POD de SOLID",
				"logInBtn": "Inicia sesión",
				"logOutBtn": "Cerrar sesión",
				"chatRef": "Entrar al chat",
				"h3header": "Chatea ahora",
				"desc1": "Simplemente inicia sesión en tu cuenta de SOLID usando tu POD y comienza a chatear.",
				"desc2": "Debes tener una cuenta de SOLID para poder chatear.",
				"h3header2": "Como funciona",
				"desc3": "Nuestro DeChat es un Chat descentralizado construido sobre SOLID",
				"desc4": "Toda tu información personal está almacenada en tu pod",
				"desc5": "También puedes utilizar nuestra aplicación de escritorio.",
				"modalIDPTitle": "Selecciona tu Proveedor de Identidad (IDP) o WebID",
				"modalIDPDescription": "Si deseas iniciar sesión utilizando el servidor de Solid Community, deja esto en blanco y pulsa \"Entrar con Solid Community\"",
				"solidLogin": "Entrar con Solid Community",
				"idpLogin": "Iniciar sesión",
				"desktop_app": "App para escritorio",
				"about_us": "Sobre nosotros",
				"development": "Desarrollo",
				"arc42": "Arc42 Docs"
			}
			break;
		case "zh-CN":
			lang = {
				"title": "DeChat ES5B - 您的分散聊天室",
				"about": "关于聊天室",
				"langSelector": "语言",
				"h1header": "欢迎来到您的分散聊天室",
				"h2header": "使用您的 Solid POD 登录",
				"logInBtn": "登录",
				"logOutBtn": "登出",
				"chatRef": "进入聊天室",
				"h3header": "开始聊天",
				"desc1": "只需使用您的 Solid 社区帐户登录即可开始聊天。",
				"desc2": "您必须拥有可靠的社区帐户中的朋友才能聊天。",
				"h3header2": "怎么运作",
				"desc3": "我们的 deChat 是一个分散的聊天网站，建立在 Solid 之上。",
				"desc4": "有关聊天的所有个人数据都存储在您的 POD 中。",
				"desc5": "您還可以使用桌面應用程序.",
				"modalIDPTitle": "选择您的身份提供商 (IDP) 或者 WebID",
				"modalIDPDescription": "如果要使用 Solid Community Server 登录, 将此字段留空并单击 \"使用 Solid Community 登录\"",
				"solidLogin": "使用 Solid Community 登录",
				"idpLogin": "登录",
				"desktop_app": "桌面應用",
				"about_us": "關於我們",
				"development": "發展",
				"arc42": "arc42文檔"
			}
			break;
      case "gl-GL":
            lang = {
                "title": "DeChat ES5B - O teu chat descentralizado",
                "about": "Sobre o chat",
                "langSelector": "Lingua",
                "desktopApp": "Descarga a aplicación de escritorio",
                "h1header": "Benvido ao noso chat descentralizado",
                "h2header": "Entra en sesión co teu POD de Solid",
                "logInBtn": "Entrar",
                "logOutBtn": "Desconectar",
                "chatRef": "Entrar ao chat",
                "h3header": "Empezar",
                "desc1": "Entra con o teu POD de Solid e empeza e chatear",
                "desc2": "Necesitas ter amigos na tua conta de solid community para poder chatear",
                "h3header2": "Como funciona",
                "desc3": "O noso deChat é un chat descentralizado baseado en Solid.",
                "desc4": "Todos os teus datos persoais do chat almacearanse no teu POD.",
                "desc5": "Tamén podes utilizar a nosa aplicación de escritorio.",
                "modalIDPTitle": "Selecciona o teo proveedor de identidade (IDP) ou WebID",
                "modalIDPDescription": "Se queres entrar usando Solid COmmunity, deixa esta campo vacío e fai click en \"Entrar con Solid Community\"",
                "solidLogin": "Entrar con Solid Community",
                "idpLogin": "Entrar",
                "desktop_app": "Aplicación de escritorio",
                "about_us": "Sobre nós",
                "development": "Desenvolvemento",
                "arc42": "Arc42 Docs"
            }
            break;
		default:
			setLanguage("en-US");
			console.error("No language set");
	}
	//Set phrases
	document.title = lang.title;
	$("#about").text(lang.about);
	$("#langSelector").text(lang.langSelector);
	$("#h1header").text(lang.h1header);
	$("#h2header").text(lang.h2header);
	$("#logInBtn").text(lang.logInBtn);
	$("#logOutBtn").text(lang.logOutBtn);
	$("#chatRef").text(lang.chatRef);
	$("#h3header").text(lang.h3header);
	$("#desc1").text(lang.desc1);
	$("#desc2").text(lang.desc2);
	$("#h3header2").text(lang.h3header2);
	$("#desc3").text(lang.desc3);
	$("#desc4").text(lang.desc4);
	$("#desc5").text(lang.desc5);
	$("#modalIDPTitle").text(lang.modalIDPTitle);
	$("#modalIDPDescription").text(lang.modalIDPDescription);
	$("#solidLogin").text(lang.solidLogin);
	$("#idpLogin").text(lang.idpLogin);
	$("#desktop_app").text(lang.desktop_app);
	$("#about_us").text(lang.about_us);
	$("#development").text(lang.development);
	$("#arc42").text(lang.arc42);
}
if (typeof window.localStorage.userLocale == "undefined") {
	//User did not select language, changing to default
	window.localStorage.userLocale = "en-US";
}
setLanguage(window.localStorage.userLocale);