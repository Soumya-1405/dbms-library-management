const sequelize = require('../models/index');
import { userModel } from "../models/user";

export var addUser = async () => {
  const users = await userModel(sequelize).bulkCreate([
    { firstName: "soumya", lastName: "katta" },
    { firstName: "sakshi", lastName: "katta" },
    { firstName: "tej", lastName: "lalugani" },
    { firstName: "kiya", lastName: "bejjarapu" },
    { firstName: "sumith", lastName: "bejjarapu"},
  ]);
};

addUser();
