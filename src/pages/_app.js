import "@/styles/globals.css";
import "katex/dist/katex.min.css";
import { MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/ams"] },
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
