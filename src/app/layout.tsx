import { AppContextProvider } from "../../context/AppContext";
import FooterSection from "../components/FooterSection";
import Navbar from "../components/Navbar";
import "/globals.css"
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