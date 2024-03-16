import { createRouteHandler } from "uploadthing/next-legacy";

import { ourFileRouter } from "@/components/utils";

export default createRouteHandler({
  router: ourFileRouter,
  config: {},
});
