let lang;
/**
 * Update two-people-chat.html language
 */
function setLanguage(locale) {
    // This saves user preference in localStorage to
    // persist locale across windows (and sessions)
    window.localStorage.userLocale = locale;
    switch (locale) {
        case "en-US":
            lang = {
                "title": "DeChat ES5B - Chatroom",
                "dropdownUser": "User Profile",
                "signed": "Signed in as",
                "profile": "Go to your SOLID profile",
                "navBarLogout": "Log out",
                "langSelector": "Language",
                "h5friends": "Friends list",
                "h5friendsDescription": "Please select a friend before you start chatting",
				"groupButton": "Create a group",
                "h1title": "Welcome to your decentralized chat room",
                "sendButton": "Send",
				"modalGroupTitle": "Create a group",
				"modalGroupDescription": "Select your friends and put them in the new group",
				"modalAddFriend": "Add to group",
				"modalRemoveFriend": "Remove from group",
				"modalCreateGroup": "Create group",
				"modalGroupTitleCol1": "Friends list",
				"modalGroupTitleCol2": "Friends added to the group"
            }
            break;
        case "es-ES":
            lang = {
                "title": "DeChat ES5B - Sala de chat",
                "dropdownUser": "Perfil",
                "signed": "Logueado como",
                "profile": "Ir a tu perfil de SOLID",
                "navBarLogout": "Cerrar sesión",
                "langSelector": "Idioma",
                "h5friends": "Listado de amigos",
                "h5friendsDescription": "Selecciona un amigo antes de comenzar a chatear",
				"groupButton": "Crea un grupo",
                "h1title": "Bienvenido a tu sala de chat descentralizada",
                "sendButton": "Enviar",
				"modalGroupTitle": "Crear un grupo",
				"modalGroupDescription": "Selecciona a tus amigos y mételos en el nuevo grupo",
				"modalAddFriend": "Añadir amigo",
				"modalRemoveFriend": "Eliminar amigo",
				"modalCreateGroup": "Crear grupo",
				"modalGroupTitleCol1": "Lista de amigos",
				"modalGroupTitleCol2": "Amigos añadidos al grupo"
            }
            break;
        case "zh-CN":
            lang = {
                "title": "DeChat ES5B - 聊天室",
                "dropdownUser": "用户资料",
                "signed": "確定為",
                "profile": "转到您的SOLID个人资料",
                "navBarLogout": "登出",
                "langSelector": "语言",
                "h5friends": "好友列表",
                "h5friendsDescription": "请在开始聊天之前选择一位朋友",
				"groupButton": "创建一个组",
                "h1title": "欢迎来到您的分散聊天室",
                "sendButton": "发送",
				"modalGroupTitle": "创建一个组",
				"modalGroupDescription": "选择您的朋友并将其放入新组中",
				"modalAddFriend": "加好友",
				"modalRemoveFriend": "删除朋友",
				"modalCreateGroup": "创建组",
				"modalGroupTitleCol1": "朋友列表",
				"modalGroupTitleCol2": "朋友加入了该组"
            }
            break;
        case "gl-GL":
            lang = {
                "title": "DeChat ES5B - Sala de chat",
                "dropdownUser": "Perfil",
                "signed": "Logueado como",
                "profile": "Ir ao teu perfil de SOLID",
                "navBarLogout": "Pechar sesión",
                "langSelector": "Lingua",
                "h5friends": "Listado de amigos",
                "h5friendsDescription": "Selecciona un amigo antes de comezar a chatear",
				"groupButton": "Crea un grupo",
                "h1title": "Benvido á tua sala de chat descentralizada",
                "sendButton": "Enviar",
				"modalGroupTitle": "Crear un grupo",
				"modalGroupDescription": "Selecciona os teus amigos e colócaos no novo grupo",
				"modalAddFriend": "Engadir amigo",
				"modalRemoveFriend": "Eliminar amigo",
				"modalCreateGroup": "Crear grupo",
				"modalGroupTitleCol1": "Lista de amigos",
				"modalGroupTitleCol2": "Amigos engadidos ao grupo"
            }
            break;
        default:
            setLanguage("en-US");
            console.error("No language set");
    }

    //Set phrases
    document.title = lang.title;
    $("#dropdownUser").text(lang.dropdownUser);
    $("#signed").text(lang.signed);
    $("#profile").text(lang.profile);
    $("#navBarLogout").text(lang.navBarLogout);
    $("#langSelector").text(lang.langSelector);
    $("#h5friends").text(lang.h5friends);
    $("#h5friendsDescription").text(lang.h5friendsDescription);
	$("#groupButton").text(lang.groupButton);
    $("#h1title").text(lang.h1title);
    $("#sendButton").text(lang.sendButton);
	$("#modalGroupTitle").text(lang.modalGroupTitle);
	$("#modalGroupDescription").text(lang.modalGroupDescription);
	$("#modalAddFriend").text(lang.modalAddFriend);
	$("#modalRemoveFriend").text(lang.modalRemoveFriend);
	$("#modalCreateGroup").text(lang.modalCreateGroup);
	$("#modalGroupTitleCol1").text(lang.modalGroupTitleCol1);
	$("#modalGroupTitleCol2").text(lang.modalGroupTitleCol2);
    //$("#").text(lang.);
}
if (typeof window.localStorage.userLocale == "undefined") {
    //User did not select language, changing to default
    window.localStorage.userLocale = "en-US";
}
setLanguage(window.localStorage.userLocale);