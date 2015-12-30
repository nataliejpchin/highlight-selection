var people = [{"name": "Pepe"},{"name":"Juan"}];

var Model = function(data){
	this.name = ko.observable(data.name);
};

var viewModel = function() {
    var self = this;

    //self.people = ko.mapping.fromJS(people);  // Note ko.mapping!!
    
    self.peopleList = ko.observableArray([]);
    people.forEach(function(person) {
    	self.peopleList.push(new Model(person));
    });
    
    // This will hold the selected person
    self.selectedPerson = ko.observable();    
    
    self.select = function(person) { 
    		// The event receives the current data as parameter
        self.selectedPerson(person);
    };
};


ko.applyBindings(new viewModel());