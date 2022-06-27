import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ mode }) => {
    return defineConfig({
        plugins: [react()],
        define: {
            "process.env.NODE_ENV": `"${mode}"`,
        }
    })
}