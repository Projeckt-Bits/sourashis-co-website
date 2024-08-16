import "./globals.css";

export const metadata = {
  title: "Sourashis & Co.",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-adsense-account" content="ca-pub-8293804271257945"></meta>
      <body>{children}</body>
    </html>
  );
}
