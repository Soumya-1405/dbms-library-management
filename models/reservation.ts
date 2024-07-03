import { Model,DataTypes } from "sequelize";
import sequelize from "../db_connection";
import { Book } from "./book";
import { Member } from "./member";

export const Reservation = sequelize.define('Reservation',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    book_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Book,
            key: 'id'
        }
    },
    member_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Member,
            key: 'id'
        }
    },
    reservation_date:{
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    timestamps:false,
    tableName:'Reservation'
})

