const Cat = require('../models/cat.model');

//get test
exports.test = function(request, response){
    response.send('Greetings from the Test controller');
}

//posts
exports.cat_create = function(request, response){
    let cat = new Cat(
        {
            name: request.body.name,
            rarity: request.body.rarity,
            description: request.body.description
        }
    );

    cat.save(function(error){
        if(err) {
            return next(error);
        }
        response.send('Cat created succesfully!');
    })
}

//gets
exports.cat_details = function(request, response){
    Cat.findById(request.params.id, function(error, cat){
        if (error) {
            return next(error);
        }
        response.send(cat);
    });
}

//puts
exports.cat_update = function(request, response){
    Cat.findByIdAndUpdate(request.params.id, {$set: request.body},
    function(error, cat){
        if(error) {
            return next(error)
        }
        response.send('Cat has been updated!');
    });
}

//deletes
exports.cat_delete = function(request, response){
    Cat.findByIdAndDelete(request.params.id, function(error){
        if(error){
            return next(error);
        }
        response.send("Deleted successfully!");
    });
}