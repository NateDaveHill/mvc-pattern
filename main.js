import Model from "./modules/Model.js";
import View from "./modules/View.js";
import Controller from "./modules/Controller.js";

console.log("Hello MVC Pattern!");

Controller(
     Model(),
     View()
);