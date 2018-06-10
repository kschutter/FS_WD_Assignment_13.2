// Fetches the git data, returning a pending promise for the data for the given user
function fetchGitData(userName) {
    return fetch("https://api.github.com/users/" + userName);
}

// Consumes the promise
fetchGitData("kschutter")
    .then(data => data.json())
    // Console.log can be any method call
    .then(myJson => console.log(myJson));
