function getDatabase() {
    return database;
}

function getNearbyCompanies () {
    var companies = getDatabase().companies;
    
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br>';
    }
    
    document.getElementById("id01").innerHTML = out;
}