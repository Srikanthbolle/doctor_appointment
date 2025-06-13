import type { Metadata } from "next";
import "./globals.css";
import { AppContextProvider } from "../../context/AppContext";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <Navbar />
          {children}
          <FooterSection />
        </AppContextProvider>
      </body>
    </html>
  );
}