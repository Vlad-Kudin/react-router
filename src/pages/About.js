import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eius omnis repudiandae hic doloribus dolorum, quo repellat in molestias quisquam.</p>
      <Link to='/contact-us'>Contact Us</Link>
    </section>
  )
};

export default About;
