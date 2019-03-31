require('chai');
var assert = require('assert');
var chatM = require('../src/scripts/chatManager.js');
var loginM = require('../src/scripts/LogInManager.js');
var podUtils = require('../src/scripts/podUtilities.js')
const fileClient = require('solid-file-client');


const credentials = {
    "idp"      : "https://solid.community",
    "username" : "pruebaes5b",                  
    "password" : "CE.ji.JU-55", 
    "base"     : "https://pruebaes5b.solid.community",
    "test"     : "/public/test/"
}

describe('Log In', function() {
	it('Test login function', async function() {
		this.timeout(4000);
		const result = await podUtils.login(credentials);
		assert.equal(result,true);
	});
});
/*
describe('Test POD Utilities', function() {
	it('createFolder', async function() {
		this.timeout(5000);
		const testPromise =  new Promise( (resolve) => {
			resolve(podUtils.createFolder(true));
		});
		testPromise.then( (result) => {
			assert.equal(result,true);
		});
	});
});
/*
describe('createFile', function(done) {
	 it('Create File with the message', async function() {
		 var testPromise =  new Promise(function(resolve,reject){
			setTimeOut( function() {
				resolve(podUtils.createFile());
		}, 300);
		});
		try {
			var result = await testPromise;
			expect(result).to.equal(true);
			done();
		} catch(err) {
			console.log(err);
		}
	});
});

describe('readFile', function(done) {
	 it('Read File', async function() {
		var testPromise =  new Promise(function(resolve,reject){
			setTimeOut( function() {
				resolve(podUtils.readFile());
		}, 300);
		});
		try {
			var result = await testPromise;
			expect(result).to.equal(true);
			done();
		} catch(err) {
			console.log(err);
		}
		// await chatM.readFile('https://pruebaes5b.solid.community/public/PruebaSinLogin/ficheroprueba.txt');
	});
});

describe('readFolder', function(done) {
	 it('Read folder', async function() {
		var testPromise =  new Promise(function(resolve,reject){
			setTimeOut( function() {
				resolve(podUtils.readFolder());
		}, 300);
		});
		try {
			var result = await testPromise;
			expect(result).to.equal(true);
			done();
		} catch(err) {
			console.log(err);
		}
		//await chatM.readFolder('https://pruebaes5b.solid.community/public/PruebaSinLogin');
	});
});

describe('deleteFile', function(done) {
	 it('Delete File', async function() {
		var testPromise =  new Promise(function(resolve,reject){
			setTimeOut( function() {
				resolve(podUtils.deleteFile());
		}, 300);
		});
		try {
			var result = await testPromise;
			expect(result).to.equal(true);
			done();
		} catch(err) {
			console.log(err);
		}
		// await chatM.deleteFile('https://pruebaes5b.solid.community/public/PruebaSinLogin/ficheroprueba.txt');
	});
});

describe('deleteFolder', function(done) {
	 it('Delete Folder', async function() {
		var testPromise =  new Promise(function(resolve,reject){
			setTimeOut( function() {
				resolve(podUtils.deleteFolder());
		}, 300);
		});
		try {
			var result = await testPromise;
			expect(result).to.equal(true);
			done();
		} catch(err) {
			console.log(err);
		}
		// await chatM.deleteFolder('https://pruebaes5b.solid.community/public/PruebaSinLogin/');
	});
});


describe('ChatManagerTest', function (done) {
    it('Testing SendMenssage', async function () {
		var testPromise =  new Promise(function(resolve,reject){
			setTimeOut( function() {
				resolve(chatM.sendMessage());
		}, 300);
		});
		try {
			var result = await testPromise;
			expect(result).to.equal(true);
			done();
		} catch(err) {
			console.log(err);
		}
      //let r =  await chatM.sendMessage();
      //assert.equal(r, true);
   });
 
   it('Testing ReceiveMessage', async function () {

	var testPromise =  new Promise(function(resolve,reject){
		setTimeOut( function() {
			resolve(chatM.receiveMessages());
	}, 300);
	});
	try {
		var result = await testPromise;
		expect(result).to.equal(true);
		done();
	} catch(err) {
		console.log(err);
	}
     //let r = await chatM.receiveMessages();
     //assert.typeOf(r,"Array");
	 });

	it('Testing Order', async function () {

		var testPromise =  new Promise(function(resolve,reject){
			setTimeOut( function() {
				resolve(chatM.order());
		}, 300);
		});
		try {
			var result = await testPromise;
			expect(result).to.equal(chatM.message);
			done();
		} catch(err) {
			console.log(err);
		}
	});
});*/