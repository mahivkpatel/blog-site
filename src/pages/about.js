import React from "react"
import styles from "./about-css-modules.module.scss"
import Layout from "../components/layout"
const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

const AboutPage = () => (
  <Layout>
    <main>
      <h1>About the Author</h1>
      <User
        username="Test User"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Test User. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </main>
  </Layout>
)
export default AboutPage
