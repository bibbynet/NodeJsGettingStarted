import baseControllerModule = require('./BaseController');
import exp = require('express');
import userRepModule = require('../models/User');
import momentModule = require('moment');

module BF {

    export class UserController extends baseControllerModule.BaseController {

        constructor(public app: exp.Application) {

            super();

            console.log('UserController...');

            this.List();
            this.Edit();
            this.EditPost();
            this.Add();
            this.AddPost();
            this.DeletePost();

            //error handler
            //try {
            //    throw new Error("aaaa");
            //} catch (ex) {

            //    if (ex instanceof Error) {
            //        var err: Error = ex;
            //        console.log(err.message);
            //    }

            //    throw ex;
            //}

        }

        List() {

            this.app.get('/user/list', (res: exp.Request, req: exp.Response) => {

                userRepModule.UserRepository.find(null, (err: Error, modelData: userRepModule.IUser[]) => {

                    var obj = { title: "UserList", users: modelData };
                    req.render("user/list", obj);

                });

            });

        }

        Add() {

            this.app.get("/user/add", (res: exp.Request, req: exp.Response) => {

                req.render("user/add", { title: "UserAdd" });

            });

        }

        AddPost() {

            this.app.post("/user/add", (res: exp.Request, req: exp.Response) => {

                var model: userRepModule.IUser = userRepModule.UserRepository();

                model.Name = res.body.name;
                model.Age = res.body.age;
                model.Birthday = new Date(res.body.birthday);
                model.IsRich = !!res.body.isRich;

                model.save((err: Error, mm?: userRepModule.IUser) => {

                    req.redirect("/user/list", 301);

                });

            });

        }

        Edit() {

            this.app.get("/user/edit/:_id", (res: exp.Request, req: exp.Response) => {

                var moment = momentModule;

                userRepModule.UserRepository.findById(res.params._id, (err: Error, model: userRepModule.IUser) => {

                    var birthdayStr = moment(model.Birthday).format("YYYY/MM/DD HH:mm:ss");
                    var obj = { title: "UserEdit", user: model, birthdayStr: birthdayStr };
                    req.render("user/edit", obj);

                });

            });

        }

        EditPost() {

            this.app.post("/user/edit/:_id", (res: exp.Request, req: exp.Response) => {

                userRepModule.UserRepository.findById(res.params._id, (err: Error, model: userRepModule.IUser) => {

                    model.Name = res.body.name;
                    model.Age = res.body.age;
                    model.Birthday = new Date(res.body.birthday);
                    model.IsRich = !!res.body.isRich;

                    model.save((err: Error, mm?: userRepModule.IUser) => {

                        req.redirect("/user/list", 301);

                    });
                });

            });

        }

        DeletePost() {

            this.app.post("/user/delete/:_id", (res: exp.Request, req: exp.Response) => {

                userRepModule.UserRepository.findById(res.params._id, (err: Error, model: userRepModule.IUser) => {

                    model.remove((err: Error) => {

                        req.redirect("/user/list", 301);

                    });

                });

            });

        }


    }

}
export = BF;