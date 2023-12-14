import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const params = useParams();

  return (
    <section>
      <h1>Article Details</h1>
      <p>{params.articleId}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, explicabo suscipit tempore deleniti fuga perferendis quaerat ipsam cupiditate molestias quasi, consequatur eos, libero placeat esse. Quibusdam molestiae, adipisci iure aspernatur est temporibus pariatur repellendus, laborum non consequatur quaerat officia voluptates magni quidem fugit ratione ipsam accusantium omnis laboriosam? Possimus, quas!</p>
    </section>
  )
}

export default ArticleDetails;
