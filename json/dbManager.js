function getDatabase() {
    return database;
}

function getCompanies () {
    var companies = getDatabase().companies;
    return companies;
}

function getUsers() {
    var users = getDatabase().users;
    return users;
}

