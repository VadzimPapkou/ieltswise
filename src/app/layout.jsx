import "./_global.scss";
import classes from "./layout.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { isProduction } from "@/common";

export const metadata = {
  title: "IELTSwise - Your Path to Success with Professional IELTS Tutors",
  description:
    "Get top scores in the IELTS exam with IELTSwise's personalized tutoring. Our experienced tutors offer customized study plans and one-on-one sessions to ensure you excel. Start improving your English skills with us today!",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
};

if (!isProduction) {
  metadata.robots = {
    index: false,
    follow: false,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800" rel="stylesheet" />
      </head>
      <body>
        <div className={classes.wrapper}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
