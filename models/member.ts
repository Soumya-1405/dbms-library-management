import { Sequelize,Model,DataTypes } from "sequelize";
import {sequelize} from '../db_connection/config'
  
export const Member = sequelize.define('Member',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: DataTypes.STRING(255),
        allowNull : false
    },
    address:{
        type: DataTypes.STRING(255),
    },
    phone_number:{
        type: DataTypes.STRING(20),
        allowNull : false,
        unique:true
    },
    email:{
        type: DataTypes.STRING(255),
        unique:true
    }
},{
    timestamps: false,
    tableName:'Members'
})