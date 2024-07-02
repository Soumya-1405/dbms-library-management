// // const { Sequelize, DataTypes } = require('sequelize');
// import { Sequelize } from "sequelize";
// // import { DataTypes } from "sequelize";
// // const sequelize = new Sequelize('sqlite::memory:');
// export const userModel = (sequelize:any) => {
//     const {DataTypes} = sequelize;
//     return sequelize.define(
//         'User',
//         {
//           // Model attributes are defined here
//           firstName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//           },
//           lastName: {
//             type: DataTypes.STRING,
//             // allowNull defaults to true
//           },
//         },
//         {
//           // Other model options go here
//         },
//       );
// }


// // // `sequelize.define` also returns the model
// // console.log(User === sequelize.models.User); // true

const sequelize = require('./index.js');
import { DataTypes } from 'sequelize';

/**
 * User model
 */
export const User = sequelize.define('user', {

  id: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  lastEmail: {
    type: DataTypes.TIME,
  }
});
