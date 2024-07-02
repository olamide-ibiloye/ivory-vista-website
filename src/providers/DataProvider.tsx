"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";

interface DataContextType {}

const initialContext: DataContextType = {};

export const DataContext = createContext(initialContext);

const DataProvider = ({ children }: { children: ReactNode }) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default DataProvider;
