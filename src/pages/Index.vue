<template>
  <layout>
    <section class="section section__ocher" id="slide1">
      <div class="img-back">
        <g-image src="~/assets/images/slide1_img.svg" alt="slide 1 img"></g-image>
      </div>
      <div class="welcome-message-wrapper">
        <div class="welcome-message-content">
          <div>
            <g-image src="~/assets/images/academy_logo.svg" alt="academy logo"></g-image>
            <h2>Welcome to <br>robonomics academy!</h2>
            <p>Get new skills in using modern web technologies to build IoT solutions</p>
            <a href="#firstForm">Start learning</a>
          </div>
        </div>
      </div>
    </section>
    <section class="section section__clear section__center section__contained" id="slide2">
      <div class="animate-inside" v-in-viewport.once>
        <h3 class="underlined-header">What is robonomics?</h3>
        <p>Robonomics is an open-source platform for IoT applications. We support a new generation of internet
          technologies (web3).</p>
        <div class="logotypes-container animate-inside" v-in-viewport.once>
          <g-image src="~/assets/images/ether_icon.svg" alt="Ether icon"></g-image>
          <g-image src="~/assets/images/polka_icon.svg" alt="Polka icon"></g-image>
          <g-image src="~/assets/images/kusama_icon.svg" alt="Kusama icon"></g-image>
          <g-image src="~/assets/images/ipfs_icon.svg" alt="ipfs icon"></g-image>
          <g-image src="~/assets/images/dapp_icon.svg" alt="dapp icon"></g-image>
          <g-image src="~/assets/images/ros_icon.svg" alt="ROS icon"></g-image>
        </div>
        <p>Robonomics implements the exchange of technical and economic information in the form of atomic transactions
          between user applications, IoT services, and complex robotics.</p>
        <div class="requests-wrapper">
          <div class="scheme-item">
            <h3 class="scheme-item-content">user (d)app</h3>
          </div>
          <div class="scheme-a">
            <div class="scheme-a-right">
              <span>function request</span>
              <span>_ __ __ __ __ __ __ __ __ _<span class="triangle-right"></span></span>
            </div>
            <div class="scheme-a-left">
              <span>report</span>
              <span><span class="triangle-left"></span>_ __ __ __ __ __ __ ___</span>
            </div>
          </div>
          <div class="scheme-item">
            <h3 class="scheme-item-content">digital twin</h3>
          </div>
          <div class="scheme-a">
            <div class="scheme-a-right">
              <span>control</span>
              <span>_ __ __ __ __ __ __ __ __ _<span class="triangle-right"></span></span>
            </div>
            <div class="scheme-a-left">
              <span>log</span>
              <span><span class="triangle-left"></span>_ __ __ __ __ __ __ ___</span>
            </div>
          </div>
          <div class="scheme-item">
            <h3 class="scheme-item-content">IOT device</h3>
          </div>
        </div>
        <p>For more information
          <g-link to="https://robonomics.network/intro">view official website</g-link>
        </p>
      </div>
    </section>
    <section class="section section__ocher section__center section__contained form" id="firstForm">
      <Form/>
    </section>
    <section class="section section__contained section__center section__tall" id="slide3">
      <div class="animate-inside" v-in-viewport.once>
        <h3 class="underlined-header">Welcome to our online school</h3>
        <p>The core developers of the Robonomics project, robotics specialists and PhD research scientists offer to pass
          through compendious experience based on 7 years of work with web 3.0 projects.</p>
      </div>
    </section>
    <section class="section section__contained section__center section__tall" id="slide4">
      <div class="animate-inside" v-in-viewport.once>
        <h3 class="underlined-header">New skills with Robonomics online school</h3>
        <p>By passing online lessons and practical assignments you can get following web3 skills:</p>
        <div class="skills-cards-wrapper animate-inside" v-in-viewport.once>
          <SkillCard img_src="skill_1.svg" scale="85%" header="Deploying and operating networks of IoT devices"
                     additional_info="Learn how to connect different types of devices (sensors, smart devices, robots) to a peer-to-peer network, configure collection and publication of telemetry for them and even create a digital twin of the device."></SkillCard>
          <SkillCard img_src="skill_2.svg" scale="85%" header="Operation blockchain technologies"
                     additional_info="Learn how to connect different types of devices (sensors, smart devices, robots) to a peer-to-peer network, configure collection and publication of telemetry for them and even create a digital twin of the device."></SkillCard>
          <SkillCard img_src="skill_3.svg" scale="50%" header="Protected operations logging and storage of device data"
                     additional_info="Learn how to connect different types of devices (sensors, smart devices, robots) to a peer-to-peer network, configure collection and publication of telemetry for them and even create a digital twin of the device."></SkillCard>
          <SkillCard img_src="skill_4.svg" scale="90%" header="Building IoT Dapps"
                     additional_info="Learn how to connect different types of devices (sensors, smart devices, robots) to a peer-to-peer network, configure collection and publication of telemetry for them and even create a digital twin of the device."></SkillCard>
          <SkillCard img_src="skill_5.svg" scale="90%" header="Basics of robot economy"
                     additional_info="Learn how to connect different types of devices (sensors, smart devices, robots) to a peer-to-peer network, configure collection and publication of telemetry for them and even create a digital twin of the device."></SkillCard>
          <SkillCard img_src="skill_6.svg" scale="90%" header="Get through intense engineering practice"
                     additional_info="Learn how to connect different types of devices (sensors, smart devices, robots) to a peer-to-peer network, configure collection and publication of telemetry for them and even create a digital twin of the device."></SkillCard>
        </div>
      </div>
    </section>
    <section class="section section__contained section__center section__tall" id="slide5">
      <div class="animate-inside" v-in-viewport.once>
        <h3 class="underlined-header">What you can get</h3>
        <p>By passing online lessons and practical assignments you can get following web3 skills:</p>
        <div class="opportunities-cards">
          <OpportunityCard img_src="opportunity_1.svg" header="Collect blockchain proved certificate"
                           additional_info="that you are familiar with the modern web technologies for the IoT. It will come in handy when hiring a technology company that wants to improve their corporate infrastructure using web3."/>
          <OpportunityCard img_src="opportunity_2.svg" header="Networking with professionals"
                           additional_info="with Robonomics engineers and even get advice at a personal consultation for your IoT research or engineering project."/>
          <OpportunityCard img_src="opportunity_3.svg" header="Grant program for your research"
                           additional_info="to apply for a grant of up to 50,000 DAI for your project under the Robonomics Grant Program for young researchers."/>
        </div>
      </div>
    </section>
    <section class="section section__ocher section__center section__contained form" id="secondForm">
      <Form/>
    </section>
  </layout>
</template>

<script>
import OpportunityCard from "../components/OpportunityCard";

export default {
  components: {
    OpportunityCard,
    Form: () => import("~/components/Form"),
    SkillCard: () => import('~/components/SkillCard')
  },
  metaInfo: {
    title: 'Robonomics academy'
  }
}
</script>

<style>
.section {
  /*height: calc(100vh - 45px);*/
}

.section__center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section__ocher {
  background-color: var(--color-ocher);
}

.section__ocher > .img-back {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.section__contained > * {
  width: 1100px;
  max-width: 1100px;
  height: calc(100% - 100px);
  margin: 50px 130px;
}

.section__tall {
  height: unset;
}

.section__tall > * {
  height: unset;
}

.img-back > img {
  margin-left: -94px;
}

#slide1 {
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
}

.form {
  background-image: url("../assets/images/form_background.svg");
  background-position: bottom;
  background-repeat: no-repeat;
}

.welcome-message-wrapper {
  display: flex;
  justify-content: center;
  min-width: 450px;
}

.welcome-message-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  padding: var(--space);
}

.welcome-message-content h2 {
  margin-top: 60px;
}

.welcome-message-content p {
  max-width: 320px;
}

.welcome-message-content > div {
  padding-left: 55px;
  border-left: 1px solid var(--color-gray-dark);
}

.welcome-message-content a {
  display: block;
  width: 231px;
  height: 39px;
  border: 2px solid var(--color-gray-dark);
  border-radius: 0;
  background-color: var(--color-light);
  color: var(--color-dark);
  line-height: 39px;
  text-align: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: var(--font-family-roboto);
}

.underlined-header {
  float: left;
  box-shadow: 0 2px var(--color-ocher);
}

.underlined-header + p {
  margin-top: 100px;
}

.logotypes-container {
  width: 100%;
  margin: 30px 0 45px;

  display: flex;
  justify-content: center;
  column-gap: 125px;
  row-gap: 50px;
  flex-wrap: wrap;
}

.logotypes-container > img {
  filter: contrast(0);
  transition: all .2s;
}

.logotypes-container > img:hover {
  filter: contrast(1);
  transition: all .2s;
}

.requests-wrapper {
  display: grid;
  grid-template-columns: 1fr 125px 1fr 125px 1fr;
  margin-top: 30px;
}

.requests-wrapper + p {
  margin-top: calc(var(--space) * 2)
}

.scheme-item {
  min-height: 135px;
  display: grid;
  align-content: center;
  justify-content: center;
  border: 1px solid var(--color-dark);
}

.scheme-item-content {
  font-family: var(--font-family-roboto);
  padding: var(--space);
  margin-block-start: 0;
  text-transform: uppercase;
}

.scheme-a {
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
}

.scheme-a-right, .scheme-a-left {
  color: var(--color-gray-dark);
  font-family: var(--font-family-roboto);
  font-size: .78rem;
  text-transform: uppercase;
}

.scheme-a-right :first-child, .scheme-a-left :first-child {
  padding: 0 10px;
  text-align: center;
}

.scheme-a-right :not(:first-child), .scheme-a-left :not(:first-child) {
  letter-spacing: -2px;
}

.scheme-a-right > span, .scheme-a-left > span {
  display: block;
}

.triangle-right {
  width: 0;
  height: 0;
  padding: 0 !important;
  margin-left: -15px;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  border-left: 16px solid var(--color-gray-dark);
  font-size: 0;
}

.triangle-left {
  width: 0;
  height: 0;
  padding: 0 !important;
  margin-left: -2px;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  border-right: 16px solid var(--color-gray-dark);
  font-size: 0;
}

.skills-cards-wrapper {
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 87px;
  row-gap: 55px;
}

.opportunities-cards {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 87px;
}


.animate-inside > *, .animate-inside-fast > *, .animate-inside-reverse > * {
  visibility: hidden;
  opacity: 0;
  transform: translateY(5%);
}

.animate-inside.in-viewport > * {
  animation-name: FadeIn, FloatYUp;
  animation-timing-function: linear;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;

  animation-duration: 0.5s;
}

.animate-inside-reverse.in-viewport > * {
  animation-name: FadeIn, FloatYDown;
  animation-timing-function: linear;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;

  animation-duration: 0.5s;
}


@media screen and (max-width: 1300px) {
  #slide1 {
    padding: 40px 0;
    height: unset;
    flex-direction: column-reverse;
    align-items: center;
  }

  .welcome-message-content {
    max-width: 600px;
  }

  .welcome-message-content > div {
    padding: 0;
    border: none;
  }

  .welcome-message-content img {
    display: none;
  }
}

@media screen and (max-width: 1100px) {
  .skills-cards-wrapper {
    grid-template-columns: 1fr 1fr;
  }

  .opportunities-cards {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 800px) {
  .img-back img {
    width: 100%;
    margin: 0;
  }

  .skills-cards-wrapper {
    grid-template-columns: 1fr;
  }

  .section__contained > * {
    width: calc(100% - 60px);
    padding: 0 30px;
    margin-right: 0;
    margin-left: 0;
  }

  .requests-wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 125px 1fr 125px 1fr;
  }

  .scheme-a {
    font-size: 80%;
    transform: rotate(90deg);
  }

  .welcome-message-wrapper {
    min-width: unset;
  }
}

</style>
