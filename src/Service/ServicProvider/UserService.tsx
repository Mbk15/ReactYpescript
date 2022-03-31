import { Iuser } from "../../models/UserList";
export class UserService {
  private static users: Iuser[] = [
    {
      sno: "A101",
      name: "Mubarak",
      age: 34,
      designation: "University of Ibadan",
      company: "EdawahTech",
    },
    {
      sno: "A102",
      name: "Yusuf",
      age: 27,
      designation: "University of Kakulta",
      company: "Spotify",
    },
    {
      sno: "A103",
      name: "WinniedPooh",
      age: 34,
      designation: "University of Colarado",
      company: "OxPolygon",
    },
    {
      sno: "A104",
      name: "Geekmaros",
      age: 36,
      designation: "University of Stanford",
      company: "Web3DAO",
    },
  ];
  public static getAllUsers() {
    return this.users;
  }
}
