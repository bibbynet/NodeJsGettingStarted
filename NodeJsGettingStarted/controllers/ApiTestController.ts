import exp = require('express');
import baseControllerModule = require('./BaseController');

module BF {

    export class ApiTestController extends baseControllerModule.BaseController {
        constructor(app: exp.Application) {
            super();

            console.log('apiTestController..');

            //api/list
            app.get('/api/list', (req: exp.Request, res: exp.Response) => {

                res.set({
                    'Content-Type': 'application/json',
                    'ETag': '3388'
                });
                var arr = [
                    { Name: 'Bibby', Age: 20, Birthday: new Date(1970, 1, 1) },
                    { Name: 'Bibby1', Age: 33, Birthday: new Date(1990, 4, 1) }
                ];
                res.send(arr);
                
            });

            //api/list/:id
            app.get('/api/list/:id', (req: exp.Request, res: exp.Response) => {

                var id = req.params["id"];
                res.set('Content-Type', 'application/json');
                res.contentType('application/json');
                res.send({ Name: 'Bibby' + id, Age: 20, Birthday: new Date(1970, 1, 1) });
                res.end();
            });

        }
    }

}

export = BF;