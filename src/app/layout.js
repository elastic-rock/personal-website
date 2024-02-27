import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "David Weis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoFlex.className}>
        <div className="min-h-screen">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
