function getDatabase() {
    return database;
}

function getCompanies () {
    var companies = getDatabase().companies;
    return companies;
}

function getCompany (name) {
    var companies = getCompanies();
    for (var i = 0; i < companies.length; i ++) {
        if (companies[i].name == name) {
            return companies[i];
        }
    }
    return null;
}

function getPromotions (name) {
    var company = getCompany(name);
    if (company != null) {
        return company.promotions;
    }
}

function getUsers() {
    var users = getDatabase().users;
    return users;
}

function createUser() {
    var users = getDatabase().users;
}

function getCurrentUser () {
    return getUser(current_username, current_password);
}

function getUser(name, password) {
    var users = getUsers();
    for (var i = 0; i < users.length; i ++) {
        if (users[i].password == password && users[i].username == name) {
            return users[i];
        }
    }
    return null;
}

