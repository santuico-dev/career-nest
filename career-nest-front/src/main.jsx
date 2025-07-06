import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { GoogleOAuthProvider } from '@react-oauth/google';

import store from "./utils/state/store/store.js";
import router from "./utils/router/router.jsx";
import { CacheProvider } from "./utils/providers/cache-provider";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <SnackbarProvider maxSnack={3}>
                <Provider store={store}>
                    <CacheProvider>
                        <RouterProvider router={router} />
                    </CacheProvider>
                </Provider>
            </SnackbarProvider>
        </GoogleOAuthProvider>
    </StrictMode>
);
