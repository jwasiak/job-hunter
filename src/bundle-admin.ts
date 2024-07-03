import { bundle } from "@adminjs/bundler";

import {AppComponentLoader} from './AppComponentLoader.js'

(async () => {
  const files = await bundle({
    componentLoader: AppComponentLoader,
    destinationDir: "public",
  });

  console.log(files);
})();
