# Chatbot Application Development Environment Setup

This guide will help you set up the development environment for both the frontend and backend of our chatbot application.

## Frontend (Angular)

### Prerequisites
- Install [Node.js](https://nodejs.org/) (includes npm - Node Package Manager)

### Steps
1. Install Angular CLI globally:
npm install -g @angular/cli

2. Clone the GitHub repository:
git clone <repository-url>


3. Navigate to the project directory and install dependencies:
cd <project-directory>
npm install


4. Verify the project runs correctly:
ng serve

The application should be accessible at `http://localhost:4200/`.

## Backend (Java Spring Boot)

### Prerequisites
- Install [Java Development Kit (JDK)](https://adoptium.net/) (preferably JDK 11 or higher)
- Install a Java IDE such as [IntelliJ IDEA](https://www.jetbrains.com/idea/) or [Eclipse](https://www.eclipse.org/downloads/)
- Install a build tool: [Maven](https://maven.apache.org/download.cgi) or [Gradle](https://gradle.org/install/)

### Steps
1. Create a new branch for the Spring Boot migration in the existing GitHub repository:

git checkout -b spring-boot-migration

2. Create a new Spring Boot project using the [Spring Initializr](https://start.spring.io/) or your IDE.

3. Gradually replace the Express backend with the Spring Boot implementation. Copy the relevant code and logic from the Express project, and rewrite it to work with Java and Spring Boot.

4. Configure the new Spring Boot project to work with PostgreSQL by adding the necessary dependencies and settings.

5. Verify that the Spring Boot application runs correctly and that the APIs work as expected.

## Additional Notes

For further development, ensure that you keep the frontend and backend projects in sync and test the application regularly. If you encounter any issues or need clarification, don't hesitate to ask for assistance.

