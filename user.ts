const sequelize = require('./index.js');
import { DataTypes } from "sequelize";
export const userModel = (sequelize:any) => {
    return sequelize.define(
        'User',
        {
          // Model attributes are defined here
          firstName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          lastName: {
            type: DataTypes.STRING,
            // allowNull defaults to true
          },
        },
        {
          // Other model options go here
        },
      );
}


