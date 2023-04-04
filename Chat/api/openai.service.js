import { config } from "dotenv";
config();

console.log(config.env.API_KEY);
