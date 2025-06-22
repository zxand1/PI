import React from "react";
import Route from './src/route';
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
    <Route/>
    </PaperProvider>
  );
}

