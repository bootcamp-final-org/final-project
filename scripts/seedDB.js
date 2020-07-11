const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const studentsSeed = [
  {
    username: "ronjohn4",
    password: "abcde12345",
    email: "ronald@example.com",
    age: 12,
    grade: "5",
    availability: [{"Monday" : "12:15"}, {"Wednesday" : "1:00"}],
    subjects: ["Math", "History"]
  },
  {
    username: "jimmy707",
    password: "john11@20!92874$",
    email: "jimmyk@example.com",
    age: 15,
    grade: "9",
    availability: [{"Tuesday" : "5:00"}, {"Friday" : "7:00"}],
    subjects: ["Algebra 1", "Spanish 1"]
  },
 
];

const tutorsSeed = [
  {
    name: "Stephanie Hasse",
    availability: [{"Monday" : "12:15"}, {"Wednesday" : "1:00"}],
    main_subject: "Math"
  },
  {
    name: "John Jones",
    availability: [{"Monday" : "12:15"}, {"Wednesday" : "1:00"}],
    main_subject: "Science"
  },
  {
    name: "Timothy Baker",
    availability: [{"Monday" : "12:15"}, {"Wednesday" : "1:00"}],
    main_subject: "Algebra 1"
  },
  {
    name: "Tom Hall",
    availability: [{"Monday" : "12:15"}, {"Wednesday" : "1:00"}],
    main_subject: "Chemistry"
  },
  {
    name: "Stephanie Hasse",
    availability: [{"Monday" : "12:15"}, {"Wednesday" : "1:00"}],
    main_subject: "Math"
  },
  {
    name: "Stephanie Hasse",
    availability: [{"Monday" : "12:15"}, {"Wednesday" : "1:00"}],
    main_subject: "Math"
  },
  {
    name: "Stephanie Hasse",
    availability: [{"Monday" : "12:15"}, {"Wednesday" : "1:00"}],
    main_subject: "Math"
  },
  {
    name: "Stephanie Hasse",
    availability: [{"Monday" : "12:15"}, {"Wednesday" : "1:00"}],
    main_subject: "Math"
  },
 
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
