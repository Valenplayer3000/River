import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
  Routes,
} from "react-router-dom";

import './index.css';

import { CssBaseline } from '@mui/material';


import App from './routes/App';
import ErrorPage from "./error-page"
import Signup from "./routes/signup/index"
import PostPage from "./routes/PostPage"
import SettingPage from './routes/settings/SettingPage';
import Profile from './routes/settings/users/profile';
import PostID from "./routes/PostID"
import About from './routes/settings/misc/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />} element={<App />}>
      <Route index element={<Navigate replace to="/post" />} />
      <Route path="/post" element={<PostPage />} >
        {/*
          Status: Feature not implemented 
          <Route path="/:id" element={<PostID />} /> 
        */}
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/setting/" element={<SettingPage />} />
      <Route path="/profile" element={<Profile />} />
      {/* 
        Status: Currently Disabled
        <Route path="/about" element={<About/>}/>
      */}
    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <head>
      {/* The title of the page. */}
      <title>River (Open Beta)</title>

      {/* For social media. */}
      <meta
        name="description"
        content="A new way to communicate with friends"
      />
      <meta property="og:url" content="https://rivermain.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="River (Open Beta)" />
      <meta
        property="og:description"
        content="A new way to communicate with friends"
      />
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/64864880/191989005-40c643d1-aad9-4031-a923-861d9e932ecb.png"
      />

      <meta
        name="twitter:card"
        content="A new way to communicate with friends"
      />
      <meta property="twitter:domain" content="rivermain.vercel.app" />
      <meta property="twitter:url" content="https://rivermain.vercel.app" />
      <meta name="twitter:title" content="River (Open Beta)" />
      <meta
        name="twitter:description"
        content="A new way to communicate with friends"
      />
      <meta
        name="twitter:image"
        content="https://user-images.githubusercontent.com/64864880/191989005-40c643d1-aad9-4031-a923-861d9e932ecb.png"
      />

      {/* For the PWA. */}

      <link rel="icon" href="favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </head>
    <CssBaseline>
      <RouterProvider router={router} />
    </CssBaseline>
  </React.StrictMode>
);