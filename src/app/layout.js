import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "State Management Praktikum",
    description: "Belajar State Management di Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider>
            <main className="min-h-screen container mx-auto flex flex-col w-full">
                <div className="flex-grow flex items-center justify-center w-full overflow-y-auto">
                    {children}
                </div>
                <div className="w-full py-4 border-t flex">
                    <ThemeToggle />
                </div>
            </main>
        </ThemeProvider>
        </body>
        </html>
    );
}