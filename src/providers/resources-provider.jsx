import React from "react";
import resourcesData from "@/data/resources.json";
import { ResourcesProviderContext } from "../contexts/resources-context";

export default function ResourcesProvider({ children }) {
  return (
    <ResourcesProviderContext.Provider value={resourcesData}>
      {children}
    </ResourcesProviderContext.Provider>
  );
};
