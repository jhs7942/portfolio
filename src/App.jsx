import { createBrowserRouter, RouterProvider } from "react-router";
import { useState } from "react";
import Book from "./components/Book";

// const router = createBrowserRouter({});

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Book />
    </div>
  );
}
