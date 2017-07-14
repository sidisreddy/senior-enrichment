"use strict";
var Sequelize = require("sequelize");
var db = require("../index.js");
var Student = require("./student");

module.exports = db.define("campus",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '/server/images/5.jpg'
    }
  }
);
