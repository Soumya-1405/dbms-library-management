import { Loan } from "../models/loan";
import { Data} from "../staticData/data";
import { Member } from "../models/member";
import { Book } from "../models/book";

const getAllLoans = async(id:Number)=>{
    const member = await Member.findByPk(id);
    const loans = await Loan.findAll({ where: { member_id: member.id}})
    console.table("loans", loans)
}
getAllLoans(2);