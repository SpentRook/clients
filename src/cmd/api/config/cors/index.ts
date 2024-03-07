import cors from "cors";

const env = process.env.NODE_ENV ?? "development";

const getOptions = (env: string) => {
  switch (env) {
    case "development":
      return {
        origin: "*",
        credentials: true,
      };
    case "production":
      return {
        origin: ["*"],
        credentials: true,
      };
    default:
      return {
        origin: ["*"],
        credentials: true,
      };
  }
};
const corsOptions = getOptions(env);

export default cors(corsOptions);