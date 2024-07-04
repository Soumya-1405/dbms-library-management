import { Member } from "../models/member";
import { Data } from "../staticData/data";
export const insertMembersData = async () => {
    const member = await Member.bulkCreate(Data.memberData);
    console.log("insert succesffullt");
  };