import "./globals.css";

export const metadata = {
  title: "Sourashis & Co.",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
