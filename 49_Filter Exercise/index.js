function validUserNames(usernames) {
    return usernames.filter(username => {
        return username.length < 10;
    });
}