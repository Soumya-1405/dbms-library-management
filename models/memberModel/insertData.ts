import { Member } from "./member";

const memberData = [
  {
    name: "soumya",
    address: "add1",
    phone_number: "12345678902",
    email: "soumya@example.com",
  },

  {
    name: "sakshii",
    address: "add2",
    phone_number: "09876543215",
    email: "sakshi@example.com",
  },

  {
    name: "Doe",
    address: "add3",
    phone_number: "12345673290",
    email: "doe@example.com",
  },

  {
    name: "suith",
    address: "add4",
    phone_number: "098765432121",
    email: "suith@example.com",
  },

  {
    name: "kiya",
    address: "add5",
    phone_number: "57597294758",
    email: "kiya@example.com",
  },
];

export const insertMembersData = async () => {
  const member = await Member.bulkCreate(memberData);
  console.log("insert succesffullt");
};

insertMembersData();
