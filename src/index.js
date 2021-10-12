import Server from "./services/server";
import { connectToDB } from "./services/db";
import Config from "../config";

const express_port = `${Config.EXPRESS_PORT}`;

process.on("exit", (code) => {
  console.log(`Program exit with code ${code}`);
});

const init = async () => {
  await connectToDB();
  Server.listen(express_port, () =>
    console.log(`Server up puerto ${express_port}`)
  );
};

init();
