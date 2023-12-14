import { Route } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Home Page</h1>
      <Route path='/home/new-user'>
        <h2>Welcome!</h2>
        <p>Glad to see you!</p>
      </Route>
    </section>
  )
};

export default Home;