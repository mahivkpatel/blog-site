import React from "react"
import "../styles/main.scss"
import Layout from "../components/layout"
import Main from "../images/main.jpg"
import Togather from "../images/togather.jpg"
import Goa from "../images/goa_beach.jpg"
import fisrtPic from "../images/f1.jpg"
import fisrtPicMrg from "../images/fisrt-mrg1.jpg"
import mumbai from "../images/mumbai.jpg"
import lomavala from "../images/lonavala.jpg"

const IndexPage = () => (
  <Layout>
    <body>
      <header
        className="w3-display-container w3-wide bgimg w3-grayscale-min"
        id="home"
      >
        <div className="w3-display-middle w3-text-white w3-center">
          <h1 className="w3-jumbo">Sagar and Mohini</h1>
          <h2>Are In Love</h2>
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
            Wedding
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
            <b>Mohini and sagar</b>
          </h1>
          <img
            className="w3-round w3-grayscale-min"
            src={Main}
            style={{ width: `100%`, margin: `32px 0` }}
          />
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

      <div className="w3-display-container bgimg2">
        <div className="w3-display-middle w3-text-white w3-center">
          <h1 className="w3-jumbo">You Are Invited</h1>
          <br />
          <h2>Of course..</h2>
        </div>
      </div>

      <div
        className="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center"
        id="wedding"
      >
        <div className="w3-content">
          <h1 className="w3-text-grey">
            <b>THE WEDDING</b>
          </h1>
          <img
            className="w3-round-large w3-grayscale-min"
            src={Togather}
            style={{ width: `100%`, margin: `64px 0` }}
          />
          <div className="w3-row">
            <div className="w3-half">
              <h2>When</h2>
              <p>Wedding Ceremony - 2:00pm</p>
              <p>Reception & Dinner - 5:00pm</p>
            </div>
            <div className="w3-half">
              <h2>Where</h2>
              <p>Some place, an address</p>
              <p>Some where, some address</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center"
        id="rsvp"
      >
        <h3 className="w3-center">Here is our time Togather</h3>
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
              <img src={mumbai} alt="Mountains" width="600" height="400" />
            </a>
            <div className="desc">
              Most awaited trip, our second trip..late nigth at juhu beach and
              marin drive and thank for my tender coconut
            </div>
          </div>
        </div>
      </div>
    </body>
  </Layout>
)
export default IndexPage
