import Trainer from "./trainer";

const trainersMock = [
  new Trainer(
    "t-rahul",
    "Rahul Sharma",
    "rahul.sharma@gmail.com",
    "9876543210",
    "Java",
    ["Java", "Spring Boot", "React", "MySQL"]
  ),

  new Trainer(
    "t-priya",
    "Priya Verma",
    "priya.verma@gmail.com",
    "9876543211",
    "Python",
    ["Python", "Django", "React", "MongoDB"]
  ),

  new Trainer(
    "t-amit",
    "Amit Kumar",
    "amit.kumar@gmail.com",
    "9876543212",
    ".NET",
    ["C#", ".NET Core", "SQL Server", "Azure"]
  )
];

export default trainersMock;