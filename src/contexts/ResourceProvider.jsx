import React from "react";
import resourcesData from "@/data/resources.json";
import { ResourceContext } from "./ContextHub";

const ResourceProvider = ({ children }) => {
  console.log("Providing resources data:", resourcesData);

  return (
    <ResourceContext.Provider value={resourcesData}>
      {children}
    </ResourceContext.Provider>
  );
};

export default ResourceProvider;
