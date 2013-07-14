//List the name of possible subway stations
$(document).ready(function(){
    var stations = ["Penn", "Grand Central"];
    $("#tags").autocomplete({
        source: stations
    });
});
