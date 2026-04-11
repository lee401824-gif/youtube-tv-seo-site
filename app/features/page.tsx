import Link from "next/link";
import SiteHeader from "../components/site-header";

export default function FeaturesPage() {
  return (
    <main className="page">
      <SiteHeader currentPath="/features" />

      <section className="hero">
        <div className="container">
          <h1 className="heroTitle">
            What you can build
          </h1>

          <p className="heroDescription">
            This is not just a player.
            <br />
            You are building your own TV system.
          </p>

          <div className="heroButtons">
            <Link href="/" className="secondaryButton">
              Home
            </Link>
            <Link href="/watch" className="secondaryButton">
              Open Watch
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cardGrid">

          <div className="featureCard">
            <h2 className="cardTitle">Auto Play</h2>
            <p className="cardText">
              Videos keep playing automatically.
              <br />
              No need to click every time.
            </p>
          </div>

          <div className="featureCard">
            <h2 className="cardTitle">Loop</h2>
            <p className="cardText">
              When videos end, it starts again.
              <br />
              Like a real TV channel.
            </p>
          </div>

          <div className="featureCard">
            <h2 className="cardTitle">Channels</h2>
            <p className="cardText">
              Create multiple channels.
              <br />
              Switch anytime.
            </p>
          </div>

          <div className="featureCard">
            <h2 className="cardTitle">Your Control</h2>
            <p className="cardText">
              You decide the keywords.
              <br />
              You control what plays.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}