import React from "react"
import "../styles/main.scss"
import Layout from "../components/layout"
import Togather from "../images/togather.jpg"
import Goa from "../images/ice.jpg"
import fisrtPic from "../images/f1.jpg"
import fisrtPicMrg from "../images/fisrt-mrg1.jpg"
import dam from "../images/dam.jpg"
import nice from "../images/dam2.jpg"
import love from "../images/love.jpg"
import m1 from "../images/m1.jpg"
import l1 from "../images/l1.jpg"
import l4 from "../images/l4.jpg"

const IndexPage = () => (
  <Layout>
    <body>
      <header
        className="w3-display-container w3-wide bgimg w3-grayscale-min"
        id="home"
      >
        <div className="w3-text-white w3-center">
          <h1 className="w3-jumbo">
            Sagar <span style={{ color: `red` }}>&hearts;</span> Mohini
          </h1>
          <h2>Happy Anniversary!</h2>
          <h2>
            <b>22.01.2019</b>
          </h2>
        </div>
      </header>

      <div className="w3-bottom w3-hide-small">
        <div className="w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">
          <a
            href="#home"
            style={{ width: `25%` }}
            className="w3-bar-item w3-button"
          >
            Home
          </a>
          <a
            href="#us"
            style={{ width: `25%` }}
            className="w3-bar-item w3-button"
          >
            Mohini & Sagar
          </a>
          <a
            href="#wedding"
            style={{ width: `25%` }}
            className="w3-bar-item w3-button"
          >
            happiness
          </a>
          <a
            href="#rsvp"
            style={{ width: `25%` }}
            className="w3-bar-item w3-button w3-hover-black"
          >
            Our time togather
          </a>
        </div>
      </div>

      <div
        className="w3-container w3-padding-64 w3-pale-red w3-grayscale-min"
        id="us"
      >
        <div className="w3-content">
          <h1 className="w3-center w3-text-grey">
            <b className="happy">Happy couple</b>
          </h1>
          <div id="captioned-gallery">
            <figure className="slider">
              <figure>
                <img src={l1} />
                <figcaption>Mumbai</figcaption>
              </figure>
              <figure>
                <img src={m1} />
                <figcaption>Imegica</figcaption>
              </figure>
              <figure>
                <img src={l4} />
                <figcaption>Lonavala</figcaption>
              </figure>
              <figure>
                <img src={nice} />
                <figcaption>Bhushi dam</figcaption>
              </figure>
              <figure>
                <img src={Togather} />
                <figcaption>Love</figcaption>
              </figure>
            </figure>
          </div>
          <p>
            <i>
              Thank you for being you. For sharing your love with me. For
              inspiring me to accept myself. For helping me see the unique
              beauty in imperfection. For showing me that love is something you
              do; something not to just be said, but also to be shown.
            </i>
          </p>
          <br />
        </div>
      </div>
      <img
        className="w3-round-large w3-grayscale-min"
        src={love}
        style={{ width: `100%`, margin: `64px 0` }}
      />
      <div
        className="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center"
        id="wedding"
      >
        <div className="w3-content">
          <h1 className="w3-text-grey">
            <b className="happy">The happiness</b>
          </h1>
          <img
            className="w3-round-large w3-grayscale-min"
            src={nice}
            style={{ width: `100%`, margin: `64px 0` }}
          />
          <div className="w3-row">
            <h1 className="w3-text-grey">
              <b className="happy">Favorite time</b>
            </h1>
            <div className="w3-half">
              <h2>When</h2>
              <p>Break time</p>
              <p>After 3:30</p>
              <p>Long drive</p>
              <p>And the day we connected</p>
            </div>
            <div className="w3-half">
              <h2>Where</h2>
              <p>Fruit dish</p>
              <p>Saputara</p>
              <p>On way to home</p>
              <p>22/01/2019</p>
            </div>
          </div>
          <div className="w3-row">
            <i>
              The most wonderful thing I decided to do was to share my life and
              heart with you.I find myself lucky as I found my best friend and
              soul mate in my husband and nothing feels better than this!...I
              love you a lot!
            </i>
          </div>
        </div>
      </div>
      <div
        className="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center"
        id="rsvp"
      >
        <h1 className="w3-text-grey w3-center">
          <b className="happy">Here is our time Together</b>
        </h1>
        <div className="img-galley">
          <div className="gallery">
            <a target="_blank" href="#">
              <img
                src={fisrtPic}
                alt="first Pic"
                width="600"
                height="400"
                className="galley-img"
              />
            </a>
            <div className="desc">
              Here is our first pic after committed our relationship, it's means
              lot. our first memory. I never want to stop making memories with
              you"
            </div>
          </div>

          <div className="gallery">
            <a target="_blank" href="#">
              <img
                src={Togather}
                alt="Forest"
                width="600"
                height="400"
                className="galley-img"
              />
            </a>
            <div className="desc">
              A very special day It's day we are officially connected to each
              other for life.
            </div>
          </div>

          <div className="gallery">
            <a target="_blank" href="#">
              <img
                src={Goa}
                alt="Northern Lights"
                width="600"
                height="400"
                className="galley-img"
              />
            </a>
            <div className="desc">
              Our First trip..Where I enjoy lots .... and many more left that
              you now bcoz you'r wify like to travel{" "}
            </div>
          </div>

          <div className="gallery">
            <a target="_blank" href="img_mountains.jpg">
              <img src={fisrtPicMrg} alt="Mountains" width="600" height="400" />
            </a>
            <div className="desc">
              We attend First marriage. remember sagar you always wait to see
              what I've wear so you can match me..
            </div>
          </div>

          <div className="gallery">
            <a target="_blank" href="#">
              <img src={m1} alt="Mountains" width="600" height="400" />
            </a>
            <div className="desc">
              Most awaited trip, our second trip..late nigth at juhu beach and
              marin drive and thank for my tender coconut
            </div>
          </div>
          <div className="gallery">
            <a target="_blank" href="#">
              <img src={dam} alt="dam" width="600" height="400" />
            </a>
            <div className="desc">
              Here we both are made for each other.Everything will fall in place
              when I meet to you. Because we were made to complete each other.
            </div>
          </div>
        </div>
      </div>
    </body>
  </Layout>
)
export default IndexPage
