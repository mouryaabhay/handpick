import React, { useState, useEffect } from "react";
import { BookmarksContext } from "@/contexts/bookmarks-context";

export function BookmarksProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    setBookmarks(stored);
  }, []);

  const addBookmark = (resource) => {
    const updated = [...bookmarks, resource];
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  const removeBookmark = (url) => {
    const updated = bookmarks.filter((b) => b.url !== url);
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  const isBookmarked = (url) => bookmarks.some((b) => b.url === url);

  return (
    <BookmarksContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, isBookmarked }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
