import Hero from "@/components/hero";
import WhatIKnow from "@/components/whatiknow";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Contact from "@/components/contact";
import About from "@/components/about";
import Message from "@/components/message";
import Footer from "@/components/footer";
const Home = () => {
  return(
    <section>
      <Hero />
      <WhatIKnow />
      <Projects />
      <Services />
      <About />
      <Message />
      <Contact />
      <Footer />
    </section>
  )
}
export default Home;