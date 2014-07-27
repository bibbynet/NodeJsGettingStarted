import exp = require('express');
import homeControllerModule = require('./HomeController');
import apitestControllerModule = require('./ApiTestController');
import userControllerModule = require('./UserController');

module BF {

    export var Init = (app: exp.Application) => {

        new homeControllerModule.HomeController(app);
        new apitestControllerModule.ApiTestController(app);
        new userControllerModule.UserController(app);

    }

}

export = BF;