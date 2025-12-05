import express from 'express';
import db from './config/db.js'

import mongoose from 'mongoose';
const { Schema } = mongoose;

const app = express();
db(); // connection to database

var events = [];
var registrations = [];
var results = [];
var tickets = [];

// Highland Games Paisley Schemas

// Event Schema
var EventSchema = new Schema({
  name: { type: String, required: true },
  category: String,
  date: String,
  location: String,
  description: String
}, { timestamps: true });

// Registration Schema  
var RegistrationSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
  firstName: String,
  lastName: String,
  email: String,
  club: String
}, { timestamps: true });

// Ranking Schema (subdocument for Results)
var RankingSchema = new Schema({
  place: Number,
  name: String,
  score: String,
  distance: String
}, { _id: false });

// Result Schema
var ResultSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
  year: Number,
  rankings: [RankingSchema]
}, { timestamps: true });

// Ticket Schema
var TicketSchema = new Schema({
  purchaserName: String,
  email: String,
  type: String,
  quantity: Number,
  code: String
}, { timestamps: true });

// Create models for Highland Games
const Event = mongoose.model('Event', EventSchema);
const Registration = mongoose.model('Registration', RegistrationSchema);
const Result = mongoose.model('Result', ResultSchema);
const Ticket = mongoose.model('Ticket', TicketSchema);

// Highland Games seeding functions

async function eventCreate(events, name, category, date, location, description) {
  let newEvent = new Event({
    name: name,
    category: category,
    date: date,
    location: location,
    description: description
  });
  await newEvent.save()
   .then( 
    event => {console.log('Event created:', event._id); events.push(event._id); console.log(events)
    })
   .catch(err => console.error(err));
}

async function registrationCreate(eventId, firstName, lastName, email, club) {
  let newRegistration = new Registration({
    eventId: eventId,
    firstName: firstName,
    lastName: lastName,
    email: email,
    club: club
  });
  await newRegistration.save()
  .then( registration => {console.log('Registration created:', registration._id)})
  .catch(err => console.error(err));
}

async function resultCreate(eventId, year, rankings) {
  let newResult = new Result({
    eventId: eventId,
    year: year,
    rankings: rankings
  });
  await newResult.save()
  .then( result => {console.log('Result created:', result._id)})
  .catch(err => console.error(err));
}

async function ticketCreate(purchaserName, email, type, quantity, code) {
  let newTicket = new Ticket({
    purchaserName: purchaserName,
    email: email,
    type: type,
    quantity: quantity,
    code: code
  });
  await newTicket.save()
  .then( ticket => {console.log('Ticket created:', ticket._id)})
  .catch(err => console.error(err));
}

// Highland Games seeding data
async function seed(){

await Event.collection.drop().then(() => { }).catch(() => { console.log('error dropping event collection') });  
await Registration.collection.drop().then(() => { }).catch(() => { console.log('error dropping registration collection') }); 
await Result.collection.drop().then(() => { }).catch(() => { console.log('error dropping result collection')}); 
await Ticket.collection.drop().then(() => { }).catch(() => { console.log('error dropping ticket collection') }); 

// Create Highland Games Events
await eventCreate(events, "Caber Toss", "Heavy Events", "2024-07-15", "Paisley Abbey Grounds", "The traditional Scottish caber toss event where competitors attempt to flip a large wooden pole end over end.");
await eventCreate(events, "Stone Put", "Heavy Events", "2024-07-15", "Paisley Abbey Grounds", "Athletes throw a heavy stone for distance using traditional Highland Games technique.");
await eventCreate(events, "Hammer Throw", "Heavy Events", "2024-07-15", "Paisley Abbey Grounds", "Competitors swing and release a weighted hammer in this classic strength event.");
await eventCreate(events, "Weight for Distance", "Heavy Events", "2024-07-15", "Paisley Abbey Grounds", "Athletes throw a 56lb weight for maximum distance.");
await eventCreate(events, "Tug of War", "Team Events", "2024-07-15", "Paisley Abbey Grounds", "Teams compete to pull their opponents across a center line.");
await eventCreate(events, "Highland Dancing", "Cultural Events", "2024-07-15", "Main Stage", "Traditional Scottish highland dancing competition with various age categories.");
await eventCreate(events, "Pipe Band Competition", "Cultural Events", "2024-07-15", "Main Stage", "Bagpipe bands compete in various grades and categories.");
await eventCreate(events, "Hill Race", "Running Events", "2024-07-15", "Paisley Hills", "A challenging uphill race through the scenic Paisley countryside.");

// Create sample registrations
await registrationCreate(events[0], "Hamish", "MacLeod", "hamish.macleod@email.com", "Glasgow Highland Athletic Club");
await registrationCreate(events[0], "Angus", "Campbell", "angus.campbell@email.com", "Edinburgh Caber Club");
await registrationCreate(events[1], "Morag", "Fraser", "morag.fraser@email.com", "Stirling Stone Putters");
await registrationCreate(events[1], "Duncan", "Stewart", "duncan.stewart@email.com", "Highland Games Scotland");
await registrationCreate(events[2], "Fiona", "MacDonald", "fiona.macdonald@email.com", "Paisley Athletic Club");
await registrationCreate(events[5], "Ailsa", "Burns", "ailsa.burns@email.com", "Royal Scottish Country Dance Society");
await registrationCreate(events[6], "Callum", "Ross", "callum.ross@email.com", "Paisley Pipe Band");
await registrationCreate(events[7], "Isla", "Grant", "isla.grant@email.com", "Renfrewshire Running Club");

// Create sample results from previous years
await resultCreate(events[0], 2023, [
  { place: 1, name: "Hamish MacLeod", distance: "18 feet 6 inches" },
  { place: 2, name: "Angus Campbell", distance: "17 feet 2 inches" },
  { place: 3, name: "Donald MacKenzie", distance: "16 feet 8 inches" }
]);

await resultCreate(events[1], 2023, [
  { place: 1, name: "Morag Fraser", distance: "42 feet 3 inches" },
  { place: 2, name: "Duncan Stewart", distance: "41 feet 1 inch" },
  { place: 3, name: "Kenneth MacBride", distance: "39 feet 9 inches" }
]);

await resultCreate(events[2], 2023, [
  { place: 1, name: "Fiona MacDonald", distance: "88 feet 4 inches" },
  { place: 2, name: "Bruce Wallace", distance: "85 feet 2 inches" },
  { place: 3, name: "Ian MacPherson", distance: "82 feet 7 inches" }
]);

await resultCreate(events[5], 2023, [
  { place: 1, name: "Ailsa Burns", score: "95.5 points" },
  { place: 2, name: "Caoimhe O'Neill", score: "92.8 points" },
  { place: 3, name: "Maeve MacLeod", score: "89.2 points" }
]);

await resultCreate(events[7], 2023, [
  { place: 1, name: "Isla Grant", score: "22:15" },
  { place: 2, name: "Ruaridh MacKinnon", score: "23:42" },
  { place: 3, name: "Eilidh Stewart", score: "24:18" }
]);

// Create sample tickets
await ticketCreate("John Smith", "john.smith@email.com", "General Admission", 2, "HG2024001");
await ticketCreate("Mary MacDougall", "mary.macdougall@email.com", "VIP", 1, "HG2024002");
await ticketCreate("Robert Burns", "robert.burns@email.com", "Family Pass", 1, "HG2024003");
await ticketCreate("Jean Armour", "jean.armour@email.com", "Student", 3, "HG2024004");
await ticketCreate("William Wallace", "william.wallace@email.com", "General Admission", 4, "HG2024005");
await ticketCreate("Flora MacDonald", "flora.macdonald@email.com", "VIP", 2, "HG2024006");

}

seed();

app.listen(3000, () => {
    console.log('Server started on port 3000');
});