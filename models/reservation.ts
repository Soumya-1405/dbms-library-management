import { Sequelize,DataTypes } from "sequelize";
// import sequelize from "../db_connection/index";
import { Book } from "./book";
// import { Member } from "../memberModel/member";
import { Member } from "./member";
import {sequelize} from '../db_connection/config'
  
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
    timestamps:false
})

Book.hasMany(Reservation,{foreignKey:"book_id"});
Reservation.belongsTo(Book,{foreignKey:"book_id"});

Member.hasMany(Reservation,{foreignKey:"member_id"});
Reservation.belongsTo(Member,{foreignKey:"member_id"});
