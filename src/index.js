import Server from "./services/server";
import { connectToDB } from "./services/db";
import Config from "../config";

const puerto = 8080;

const init = async () => {
  await connectToDB();
  Server.listen(puerto, () => console.log(`Server up puerto ${puerto}`));
};

init();
