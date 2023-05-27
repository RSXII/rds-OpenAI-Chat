
export const environment = {
    production: false,
    firebase: {
        apiKey: process.env.API_KEY,

        authDomain: process.env.AUTH_DOMAIN,

        projectId: "rds-openai",

        storageBucket: process.env.STORAGE_BUCKET,

        messagingSenderId: process.env.MESSAGING_SENDER_ID,

        appId: process.env.APP_ID,

        measurementId: process.env.MEASUREMENT_ID
    }
};
