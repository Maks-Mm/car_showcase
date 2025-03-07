"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context value type
interface MyContextType {
    value: string;
    setValue: (value: string) => void;
}

// Create the context with a default value
const MyContext = createContext<MyContextType | undefined>(undefined);

// Create a provider component
export const MyProvider = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState<string>("Default Value");

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
};

// Create a custom hook to use the context
export const useMyContext = () => {
    const context = useContext(MyContext);
    if (context === undefined) {
        throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
};
