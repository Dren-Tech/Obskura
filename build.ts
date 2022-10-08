import * as esbuild from "https://deno.land/x/esbuild/mod.js";
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader/mod.ts";

await esbuild.build({
    plugins: [denoPlugin()],
    entryPoints: ["./src-deno/index.tsx"],
    outfile: "./src-deno/dist/main.js",
    bundle: true,
    format: "esm",
});

esbuild.stop();