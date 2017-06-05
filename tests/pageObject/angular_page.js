'use strict';

var home_page = 'http://www.angularjs.org';


var AngularPage = function () {
    browser.get(home_page);
};
var angularPage =  null;

AngularPage.prototype = Object.create({}, {

    //Elements
    todoText: {
        get: function () {
            return element(by.model('todoList.todoText'));
        }
    },
    addButton: {
        get: function () {
            return element(by.css('[value="add"]'));
        }
    },
    yourName: {
        get: function () {
            return element(by.model('yourName'));
        }
    },
    greeting: {
        get: function () {
            return element(by.binding('yourName')).getText();
        }
    },
    todoList: {
        get: function () {
            return element.all(by.repeater('todo in todoList.todos'));
        }
    },

    //PageObject actions
    reset: {
        value: function () {
            browser.get(home_page);
        }
    }
    ,
    typeName: {
        value: function (keys) {
            return this.yourName.sendKeys(keys);
        }
    },
    todoAt: {
        value: function (idx) {
            return this.todoList.get(idx).getText();
        }
    },
    addTodo: {
        value: function (todo) {
            this.todoText.sendKeys(todo);
            this.addButton.click();
        }
    },
    getAngularOPage: {
        value: function(){
            if (angularPage == null){
                return new AngularPage();
            }else{
                angularPage.reset();
                return angularPage;
            }
        }
    }



});


module.exports = AngularPage;