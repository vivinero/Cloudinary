import {v2 as cloudinary} from 'cloudinary';
const env = require("dotenv")


cloudinary.config({ 

  cloud_name: process.env.cloud_name, 
  api_key: '446571452736794', 
  api_secret: '6drRWSIXZ-PgxTHOITwxCbY9IbA' 
});