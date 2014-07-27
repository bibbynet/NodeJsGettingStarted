module BF {
    export class BaseController {
        constructor() {
            console.log('baseController...');
        }

        authorize() {
            console.log('authorize...');
        }
    }
}

export = BF;