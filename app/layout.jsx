import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import StairTransition from "@/components/Header/StairTransition";
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  width: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header></Header>
        <StairTransition></StairTransition>
        {children}
      </body>
    </html>
  );
}
