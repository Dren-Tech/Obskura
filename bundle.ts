import * as esbuild from "https://deno.land/x/esbuild/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader/mod.ts";

const res = await esbuild.serve({
  port: 3000,
  servedir: "./src-deno"
}, {
  plugins: [denoPlugin()],
  entryPoints: ["./src-deno/index.tsx"],
  outfile: "./src-deno/dist/main.js",
  bundle: true,
  format: "esm",
});

await res.wait;

esbuild.stop();