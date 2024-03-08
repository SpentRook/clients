import swaggerJSDoc from "swagger-jsdoc";
import { clientCreate, clientResponse, clientUpdate } from "./schema/client";

const endpointsFiles = ["src/cmd/api/route/*.ts", "dist/cmd/api/route/*.js"];

const options = {
        definition: {
            openapi: "3.0.0",
            info: {
            title: "API Clients",
            version: "1.0.0",
            description: "API for manage bank clients",
            },
        servers: [
            {
                url: "http://localhost:8080",
                description: "Development server",
            },
        ],
        components: {
            schemas: {
                clientCreate,
                clientUpdate,
                clientResponse
            }
        }
    },
    apis: endpointsFiles,
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;