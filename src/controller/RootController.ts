import { controller } from "./decorators/controller";
import { get } from "./decorators/route";

@controller("")
export class RootController {
  @get("/")
  getRoot() {}
}
