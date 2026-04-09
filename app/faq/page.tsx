import Link from "next/link";
import SiteHeader from "../components/site-header";

export default function FaqPage() {
  return (
    <main className="page">
      <SiteHeader currentPath="/faq" />

      <section className="hero">
        <div className="container">
          <h1 className="heroTitle">
            FAQ
          </h1>

          <p className="heroDescription">
            Simple answers for beginners
          </p>

          <div className="heroButtons">
            <Link href="/" className="secondaryButton">
              Home
            </Link>
            <Link href="/setup/api" className="primaryButton">
              Start Setup
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cardGrid">

          <div className="featureCard">
            <h2 className="cardTitle">Is this hard?</h2>
            <p className="cardText">
              No.
              <br />
              Just follow Step 1 → Step 2 → Step 3.
            </p>
          </div>

          <div className="featureCard">
            <h2 className="cardTitle">Do I need coding?</h2>
            <p className="cardText">
              No coding needed.
              <br />
              Just copy, paste, and click.
            </p>
          </div>

          <div className="featureCard">
            <h2 className="cardTitle">What does API do?</h2>
            <p className="cardText">
              It connects your app to YouTube.
              <br />
              Think of it as electricity.
            </p>
          </div>

          <div className="featureCard">
            <h2 className="cardTitle">What do keywords do?</h2>
            <p className="cardText">
              They decide what videos appear.
              <br />
              Change them → different results.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}