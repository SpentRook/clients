export const clientCreate = {
    type: "object",
    properties: {
        name: {
            type: "string",
            example: "John Doe"
        },
        email: {
            type: "string",
            example: "johndoe@example.com",
            format: "email"
        },
        birth: {
            type: "string",
            example: "06/28/2000",
            format: "date"
        }
    },
}

export const clientUpdate = {
    type: "object",
    properties: {
        name: {
            type: "string",
            example: "John Doe"
        },
        email: {
            type: "string",
            example: "johndoe@example.com",
            format: "email"
        }, 
        birth: {
            type: "string",
            example: "06/28/2000",
            format: "date"
        }
    },
}

export const clientResponse = {
    type: "object",
    properties: {
        id: {
            type: "string",
            example: "f32a5ce9-f77e-4c1f-8753-143aa73dd679"
        },
        name: {
            type: "string",
            example: "John Doe"
        },
        email: {
            type: "string",
            example: "johndoe@example.com",
            format: "email"
        },
        birth: {
            type: "string",
            example: "2000-08-14T00:00:00.000Z",
            format: "date-time"
        },
        createdAt: {
            type: "string",
            example: "2021-08-14T00:00:00.000Z",
            format: "date-time"
        }
    },
}