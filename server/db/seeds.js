use hotel_bookings;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Joe Bloggs",
    email: "Joe@Bloggs.com",
    checkIn: false
  },
  {
    name: "Samwise Gamgee",
    email: "Sam@Hobbitonnet.com",
    checkIn: true
  },
  {
    name: "Liz Lemon",
    email: "LLemon@NBC.com",
    checkIn: false
  },
  {
    name: "Winnie the Pooh",
    email: "WinnieP@Poo.com",
    checkIn: false
  },
])
