require('chai');
var assert = require('assert');
var chatM = require('../src/scripts/chatManager.js');
var podUtils = require('../src/scripts/podUtilities.js');

const timeout = 10000;

const credentials = {
    "idp": "https://solid.community",
    "username": "pruebaes5b",
    "base": "https://pruebaes5b.solid.community",
    "test": "/public/test/"
}

const receiver = {
    "idp": "https://cristina.solid.community",
    "username": "cristinamartin"
}

const testFolderUrl = credentials.base + "/public/test/";
const testFileUrl = testFolderUrl + "testfile";
const testFolderUrlTtl = credentials.base + "/public/testTtl/";
const testFileUrlTtl = testFolderUrlTtl + "testttlfile";
const notiMaUrl = "https://pruebaes5b.solid.community/inbox/";

describe('Log In and Session', function() {
    it('Login Fail', async function() {
        this.timeout(timeout);
        credentials.password = "123456";
        assert.equal(await podUtils.login(credentials), false);
    });
    it('Login Success', async function() {
        this.timeout(timeout);
        credentials.password = "CE.ji.JU-55";
        assert.equal(await podUtils.login(credentials), true);
    });
    it('logout', async function() {
        this.timeout(timeout);
        assert.equal(await podUtils.logout(), true);
    });
    it('Login using null credentials', async function() {
        assert.equal(await podUtils.login(null), false);
    });
});

describe('Test POD Utilities', function() {
    it('Login Success', async function() {
        this.timeout(timeout);
        credentials.password = "CE.ji.JU-55";
        assert.equal(await podUtils.login(credentials), true);
    });
    it('createFolder', async function() {
        this.timeout(timeout);
        assert.equal(await podUtils.createFolder(testFolderUrl, true), true);
    });
    it('createFile', async function() {
        this.timeout(timeout);
        assert.equal(await podUtils.createFile(testFileUrl + ".txt", "test create file", true), true);
        assert.equal(await podUtils.readFile(testFileUrl + ".txt", true), "test create file");
        assert.equal(await podUtils.writeMsgJson(testFileUrl + ".json", "test json file", true), true);
        assert.equal(await podUtils.writeMsgJsonld(testFileUrl, "test jsonld file", true), true);
    });
    it('readFile', async function() {
        this.timeout(timeout);
        assert.equal(await podUtils.readFile(testFileUrl + ".txt", true), "test create file");
        assert.equal(await podUtils.readFile(testFileUrl + ".json", true), "test json file");
        assert.equal(await podUtils.readFile(testFileUrl + ".jsonld", true), "test jsonld file");
    });
    it('readFolderWithContent', async function() {
        this.timeout(timeout);
        var folder = await podUtils.readFolder(testFolderUrl, true);
        assert.equal(folder.name, "test");
        assert.equal(folder.files.length, 3);
        assert.equal(testFolderUrl, "https://pruebaes5b.solid.community/public/test/");
    });
    it('deleteFile', async function() {
        this.timeout(timeout);
        assert.equal(await podUtils.deleteFile(testFileUrl + ".txt", true), true);
        assert.equal(await podUtils.readFile(testFileUrl + ".txt", true), null);
        assert.equal(await podUtils.deleteFile(testFileUrl + ".json", true), true);
        assert.equal(await podUtils.readFile(testFileUrl + ".json", true), null);
        assert.equal(await podUtils.deleteFile(testFileUrl + ".jsonld", true), true);
        assert.equal(await podUtils.readFile(testFileUrl + ".jsonld", true), null);
    });
    it('readEmptyFolder', async function() {
        this.timeout(timeout);
        var folder = await podUtils.readFolder(testFolderUrl, true);
        assert.equal(folder.name, "test");
        assert.equal(folder.files.length, 0);
        assert.equal(testFolderUrl, "https://pruebaes5b.solid.community/public/test/");
    });
    it('deleteFolder', async function() {
        this.timeout(timeout);
        assert.equal(await podUtils.deleteFolder(testFolderUrl, true), true);
        assert.equal(await podUtils.readFolder(testFolderUrl, true), null);
    });
    it('createTurtle', async function() {
        this.timeout(timeout);
        assert.equal(await podUtils.writeTurtle(testFileUrlTtl, ":timeStamp\na msg:message ;\nmsg:text \"#El Mensaje\" .", true), true);
    });
    it('updateExistentTurtle', async function() {
        this.timeout(timeout);
        assert.equal(await podUtils.updateTurtle(testFileUrlTtl, ":timeStamp\na msg:message ;\nmsg:text \"#Nuevo Mensaje\" .", true),
            true);
    });
    it('updateNonEexistentTurtle', async function() {
        this.timeout(timeout);
        assert.equal(await podUtils.updateTurtle("file.ttl", ":timeStamp\na msg:message ;\nmsg:text \"#No existe\" .", true),
            false);
    });
    it('logout', async function() {
        this.timeout(timeout);
        assert.equal(await podUtils.logout(), true);
    });
});

describe('Test Chat Manager', function() {
    it('Login Success', async function() {
        this.timeout(timeout);
        credentials.password = "CE.ji.JU-55";
        assert.equal(await podUtils.login(credentials), true);
    });

    chatM.INFO.userURI = credentials.base + "/";
    chatM.INFO.username = credentials.username;
    chatM.INFO.receiverURI = receiver.idp + "/";
    chatM.INFO.receiverName = receiver.username;
    const sendFolder = credentials.base + "/public/SolidChat/" + receiver.username + "/chatld.jsonld";
    chatM.GROUP.friends = [credentials.username, receiver.username];

    it('sendMessage', async function() {
        this.timeout(timeout);
        assert.equal(await chatM.setUpFolder(true), true);
        assert.equal(await chatM.checkNewMessages(receiver.idp + "/", receiver.username), false);
        assert.equal(await chatM.sendMessage("newMessage", false), true);
        assert.notEqual(await podUtils.readFile(sendFolder, true), null);
        assert.equal(await chatM.setUpFolder(false), true);
    });
    it('createGroup', async function() {
        this.timeout(timeout);
        const chatFolder = "https://pruebaes5b.solid.community/public/SolidChat/Groups/pruebacreate/metadata.jsonld";
        chatM.GROUP.name = "pruebacreate";
        assert.notEqual(await chatM.createGroup(), null);
        assert.notEqual(await podUtils.readFile(chatFolder, true), null);
        assert.equal(await podUtils.deleteFile(chatFolder, true), true);
    });
    it('joinGroupWithNoMetadataFile', async function() {
        this.timeout(timeout);
        const chatFolder = "https://pruebaes5b.solid.community/public/SolidChat/Groups/pruebacreate/metadata.jsonld";
        chatM.GROUP.name = "pruebacreate";
        assert.equal(await podUtils.readFile(chatFolder, true), null);
        assert.equal(await chatM.joinGroup("https://pruebaes5b.solid.community/public/SolidChat/Groups/pruebacreate/"), false);
    });
    it('sendGroupMessage', async function() {
        this.timeout(timeout);
        const chatFolder = "https://pruebaes5b.solid.community/public/SolidChat/Groups/pruebatest/chatld.jsonld";
        chatM.GROUP.name = "pruebatest";
        assert.equal(await chatM.sendMessage("newGroupMessage", true), true);
        assert.notEqual(await podUtils.readFile(chatFolder, true), null);
    });
    it('recieveGroupMessages', async function() {
        this.timeout(timeout);
        const chatFolder = "https://pruebaes5b.solid.community/public/SolidChat/Groups/pruebatest/chatld.jsonld";
        chatM.GROUP.name = "pruebatest";
        var messages = await chatM.receiveGroupMessages();
        assert.notEqual(messages, null);
        assert.notEqual(await podUtils.readFile(chatFolder, true), null);
    });
    it('readGroups', async function() {
        this.timeout(timeout);
        const chatFolderTest = "https://pruebaes5b.solid.community/public/SolidChat/Groups/pruebatest/chatld.jsonld";
        const chatFolderCreate = "https://pruebaes5b.solid.community/public/SolidChat/Groups/pruebacreate/metadata.jsonld";
        assert.notEqual(await chatM.readGroups(), null);

        assert.equal(await podUtils.deleteFile(chatFolderCreate, true), true);
        assert.equal(await podUtils.deleteFolder("https://pruebaes5b.solid.community/public/SolidChat/Groups/pruebacreate/", true), true);
        assert.equal(await podUtils.deleteFile(chatFolderTest, true), true);
        assert.equal(await podUtils.deleteFolder("https://pruebaes5b.solid.community/public/SolidChat/Groups/pruebatest/", true), true);
        assert.equal(await podUtils.deleteFolder("https://pruebaes5b.solid.community/public/SolidChat/Groups/", true), true);
    });
    it('createGroup', async function() {
        this.timeout(timeout);
        const chatFolder = "https://pruebaes5b.solid.community/public/SolidChat/Groups/pruebacreate/metadata.jsonld";
        chatM.GROUP.name = "pruebacreate";
        assert.notEqual(await chatM.createGroup(), null);
        assert.notEqual(await podUtils.readFile(chatFolder, true), null);
    });
    it('joinGroup', async function() {
        this.timeout(timeout);
        const chatFolder = "https://pruebaes5b.solid.community/public/SolidChat/Groups/pruebacreate/metadata.jsonld";
        chatM.GROUP.name = "pruebacreate";
        assert.equal(await podUtils.deleteFile(chatFolder, true), true);
        assert.equal(await podUtils.deleteFolder("https://pruebaes5b.solid.community/public/SolidChat/Groups/pruebacreate/", true), true);
        assert.equal(await podUtils.deleteFolder("https://pruebaes5b.solid.community/public/SolidChat/Groups/", true), true);
    });
    it('receiveMessage', async function() {
        this.timeout(timeout);
        var messages = await chatM.receiveMessages();
        assert.notEqual(messages[messages.length - 1].indexOf("newMessage"), -1);
    });
    it('logout', async function() {
        this.timeout(timeout);
        assert.equal(await podUtils.deleteFolder("https://pruebaes5b.solid.community/public/SolidChat/cristinamartin/", true), true);
        assert.equal(await podUtils.logout(), true);
    });
    it('sendMessage and createGroup when there is no SolidChat folder', async function() {
        this.timeout(20000);

        const pepaCredentials = {
            "idp": "https://solid.community",
            "username": "pepa",
            "base": "https://pepa.solid.community",
            "password": "4152524152636352"
        }
        const pepaFolder = pepaCredentials.base + "/public/SolidChat/";
        chatM.INFO.userURI = pepaCredentials.base + "/";

        assert.equal(await podUtils.login(pepaCredentials), true);
        assert.equal(await chatM.sendMessage("pepaMessage", false), true);
        var messages = await chatM.receiveMessages();
        assert.equal(messages[0].includes("pepaMessage"), true);

        assert.equal(await podUtils.deleteFile(pepaFolder + receiver.username + "/chatld.jsonld", true), true);
        assert.equal(await podUtils.deleteFolder(pepaFolder + receiver.username + "/", true), true);
        assert.equal(await podUtils.deleteFolder(pepaFolder, true), true);

        const chatFolder = "https://pepa.solid.community/public/SolidChat/Groups/pruebapepa/metadata.jsonld";
        chatM.GROUP.name = "pruebapepa";
        assert.notEqual(await chatM.createGroup(), null);
        assert.notEqual(await podUtils.readFile(chatFolder, true), null);
        assert.equal(await podUtils.deleteFile(chatFolder, true), true);
        assert.equal(await podUtils.deleteFolder("https://pepa.solid.community/public/SolidChat/Groups/pruebapepa/", true), true);
        assert.equal(await podUtils.deleteFolder("https://pepa.solid.community/public/SolidChat/Groups/", true), true);
        assert.equal(await podUtils.deleteFolder("https://pepa.solid.community/public/SolidChat/", true), true);

        var messages = await chatM.receiveMessages();
        assert.notEqual(messages, null);
        assert.equal(messages.length, 0);

        chatM.INFO.userURI = credentials.base + "/";
        assert.equal(await podUtils.logout(), true);
    });
});