import { createContext } from "react";

export const BookmarksContext = createContext({
  bookmarks: [],
  addBookmark: () => {},
  removeBookmark: () => {},
  isBookmarked: () => false,
});
