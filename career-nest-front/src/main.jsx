import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import store from "./utils/state/store/store.js";
import { RouterProvider } from "react-router-dom";
import router from "./utils/router/router";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <SnackbarProvider maxSnack={3}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </SnackbarProvider>
    </StrictMode>
);
