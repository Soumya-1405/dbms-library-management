import { Member } from "../models/member";
import { Data } from "../staticData/data";
export const insertMembersData = async () => {
    const member = await Member.bulkCreate(Data.memberData);
    console.log("insert succesffullt");
  };

  export const getAllMembers = async () => {
    try {
      const authors = await Member.findAll();
      console.table(authors.map((author: any) => author.toJSON()));
    } catch (error) {
      console.log("error fetchiing authors", error);
    }
  };
  
  export const updateMember = async (authorId: Number, updatedData: Object) => {
    try {
      const author = await Member.findByPk(authorId);
      if (author) {
        await author.update(updatedData);
        const authors = await Member.findAll();
        console.table(authors.map((author: any) => author.toJSON()));
      } else {
        console.log("Member not Found");
      }
    } catch (error) {
      console.log("error updating data", error);
    }
  };
  
  export const deleteMember = async (authorId: Number) => {
    try {
      const author = await Member.findByPk(authorId);
      if (author) {
        await author.destroy();
        const authors = await Member.findAll();
        console.table(authors.map((author: any) => author.toJSON()));
      } else {
        console.log("Member not Found");
      }
    } catch (error) {
      console.log("error deleteing data", error);
    }
  };
  