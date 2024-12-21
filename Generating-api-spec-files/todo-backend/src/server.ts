// src/server.ts
import { app } from "./app";
import { Response as ExResponse, Request as ExRequest } from "express";
import swaggerUi from "swagger-ui-express";
import { DefaultService } from "../node-client";
const port = process.env.PORT || 3000;

//@ts-ignore
app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
      swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
});

//instead of create app.get, app.post we can use node client generated from the 
// spec file to use on other servers/clients , below is the example

DefaultService.getTodo("1")


app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);


