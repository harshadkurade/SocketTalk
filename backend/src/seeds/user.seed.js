import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    // Female Users
    {
      email: "ananya.sharma@example.com",
      fullName: "Ananya Sharma",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      email: "isha.verma@example.com",
      fullName: "Isha Verma",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      email: "kiara.mehta@example.com",
      fullName: "Kiara Mehta",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      email: "rhea.kapoor@example.com",
      fullName: "Rhea Kapoor",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      email: "saanvi.iyer@example.com",
      fullName: "Saanvi Iyer",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      email: "tanvi.menon@example.com",
      fullName: "Tanvi Menon",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      email: "isha.kohli@example.com",
      fullName: "Isha Kohli",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      email: "nikita.bhatt@example.com",
      fullName: "Nikita Bhatt",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  
    // Male Users
    {
      email: "arjun.singh@example.com",
      fullName: "Arjun Singh",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      email: "veer.ahmed@example.com",
      fullName: "Veer Ahmed",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      email: "vihaan.jain@example.com",
      fullName: "Vihaan Jain",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      email: "advik.das@example.com",
      fullName: "Advik Das",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      email: "dhruv.patel@example.com",
      fullName: "Dhruv Patel",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      email: "kabir.kumar@example.com",
      fullName: "Kabir Kumar",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      email: "reyansh.malhotra@example.com",
      fullName: "Reyansh Malhotra",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  ];
  

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();