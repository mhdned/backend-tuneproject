/*------<SERVER>------*/
const app = require("./app");
const dotenv = require("dotenv");
// const Configs = require("./config/config");

/*------<CONFIG>------*/
// new Configs();
dotenv.config({ path: "./configs/config.env" });
/*------<ENV>------*/
// const DB = process.env.DATABASE_LOCAL;

/*------<LESTEN>------*/
const port = process.env.PORT || 6350;
app.listen(port, "127.0.0.1", () => {
  console.log(`APP RUN :: http://localhost:${port}`);
});
