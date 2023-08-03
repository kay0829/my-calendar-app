import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // define: {
    //     "process.env": {},
    // },
    resolve: {
        alias: [
            { find: "@api", replacement: "/src/api" },
            { find: "@asset", replacement: "/src/asset" },
            { find: "@component", replacement: "/src/component" },
            { find: "@constant", replacement: "/src/constant" },
            { find: "@container", replacement: "/src/container" },
            { find: "@recoil", replacement: "/src/recoil" },
            { find: "@features", replacement: "/src/features" },
            { find: "@hooks", replacement: "/src/hooks" },
            { find: "@routes", replacement: "/src/routes" },
            { find: "@styles", replacement: "/src/styles" },
            { find: "@utils", replacement: "/src/utils" },
            { find: "@type", replacement: "/src/type" },
            { find: "@", replacement: "/src" },
        ],
    },
});
