# RDS-OpenAI-Chat

This project is an Angular application that utilizes OpenAI's GPT-4 to provide a chat interface. The frontend is built with Angular, and the backend uses Express and the OpenAI API.

## Prerequisites

- Node.js v14 or higher
- NPM v7 or higher
- Angular CLI v15.2.4 or higher
    
## Setup

1. Clone the repository:

> git clone https://github.com/YOUR-USERNAME/rds-openai-chat.git

Replace YOUR-USERNAME with your github username.

> cd rds-openai-chat

2. Install the required dependencies:

> npm install

3. Create a .env file in the root of the project and add your OpenAI API key:    

> OPENAI_API_KEY=your-api-key

Replace your-api-key with your actual OpenAI API key.

## Running the project

To start the development server for both the frontend and the API, run the following command:

> npm run start

This command will start both the Angular and the Express server concurrently. The Angular app will be available at http://localhost:4200/, and the API will be available at http://localhost:3000/.

## Building the project

To build the project, run the following command:

> npm run build

This will create a dist/ folder containing the production-ready files for the frontend.

## Customization

You can customize the project by editing the files in the src/app (frontend) and api (backend) directories. To add additional dependencies, use npm install followed by the package name.

## License

This project is licensed under the MIT License
