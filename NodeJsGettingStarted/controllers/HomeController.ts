import baseControllerModule = require('./BaseController');
import exp = require('express');

module BF {

    export class HomeController extends baseControllerModule.BaseController {

        constructor(app: exp.Application) {
            super();

            console.log('HomeController...');

            //Home/Index
            app.get('/', (req: exp.Request, res: exp.Response) => {

                var vm = {
                    title: 'Nodejs Start',
                    content:'Hello World!'
                };
                res.render('Home/Index', vm);
                
                //authorize
                super.authorize();
            });

        }
    }

}

export = BF;