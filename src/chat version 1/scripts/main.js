const FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');

const userDataUrl = 'https://martinreycristina.solid.community/public/micarpeta';


// Log the user in and out on click
const popupUri = 'popup.html';
$('#login  button').click(() => solid.auth.popupLogin({ popupUri }));
$('#logout button').click(() => solid.auth.logout());

// Update components to match the user's login status
solid.auth.trackSession(session => {
    const loggedIn = !!session;
    $('#login').toggle(!loggedIn);
    $('#logout').toggle(loggedIn);
    if (loggedIn) {
        $('#user').text(session.webId);
        // Use the user's WebID as default profile
        if (!$('#profile').val())
            $('#profile').val(session.webId);
    }
});

$('#view').click(async function loadProfile() {
    // Set up a local data store and associated data fetcher
    const store = $rdf.graph();
    const fetcher = new $rdf.Fetcher(store);

    // Load the person's data into the store
    const person = $('#profile').val();
    await fetcher.load(person);

    // Display their details
    const fullName = store.any($rdf.sym(person), FOAF('name'));
    $('#fullName').text(fullName && fullName.value);
	
	const message = {
		message: "hola samuel"
	};
	
	const cris = await solid.auth.currentSession();
	
	console.log(cris);
	
	solid.auth.fetch('https://martinreycristina.solid.community/public/prueba').then(console.log);

    // Display their friends
    const friends = store.each($rdf.sym(person), FOAF('knows'));
    $('#friends').empty();
    friends.forEach(async (friend) => {
        await fetcher.load(friend);
        const fullName = store.any(friend, FOAF('name'));
        $('#friends').append(
            $('<li>').append(
                $('<a>').text(fullName && fullName.value || friend.value)
                    .click(() => $('#profile').val(friend.value))
                    .click(loadProfile)));
		$('#friends').append(
                $('<a>').text('Send Message')
					.click(()=> chatM.createChatFolder(userDataUrl)));
    });
});
  
  /**
   * This method generates a unique url for a resource based on a given base url.
   * @param baseurl: the base url for the url of the resource.
   * @returns {Promise<string>}: a promise that resolves with a unique url.
   */
  async function generateUniqueUrlForResource(baseurl) {
	  let count =1;
    let url = baseurl + '#' + '1234';

    try {
      let d = this.getObjectFromPredicateForResource(url, namespaces.rdf + 'type');

      // We assume that if this url doesn't have a type, the url is unused.
      // Ok, this is not the most fail-safe thing.
      // TODO: check if there are any triples at all.
      while (d) {
        url = baseurl + '#' + (count+1);
        d = await this.getObjectFromPredicateForResource(url, namespaces.rdf + 'type');
      }
    } catch (e) {
      // this means that response of data[url] returns a 404
      // TODO might be called when you have no access, should check
    } finally {
      return url;
    }
  }