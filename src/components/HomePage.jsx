import { useEffect, useState } from "react";
import axios from "axios";
const initialArticle = { title: "", content: "", image: "" }
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [formData, setFormData] = useState(initialArticle);
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  function loadData() {
  axios.get("http://localhost:3001/posts").then((resp) => {
    // console.log(resp.data);
  setArticles(resp.data)
  })
  }


async function addData(newArticle) {
  return axios.post("http://localhost:3001/posts", newArticle).then((resp) => {
    // console.log(resp.data);
    loadData();
    return resp.data;
  });
}

useEffect(() => {
loadData();
}, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev_data) => ({
      ...prev_data,
      [name]: value
    }))
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { title, content, image } = formData;
  
    if (title && content && image) {
      const newArticle = { title, content, image };
  
      try {
        const result = await addData(newArticle); // Attende la risposta della promessa
        setFormData(initialArticle); // Reimposta il modulo
        console.log(result);
        navigate(`/PostsList/${result.id}`); // Usa l'id restituito per la navigazione
      } catch (error) {
        console.error("Errore durante l'aggiunta dell'articolo:", error);
      }
    }
  };
    
  // console.log(articles)
  
  return (
    <>
      <div className="container">
        <section>
          <h1>Aggiugi un nuovo articolo</h1>

          <form onSubmit={handleFormSubmit}>

            <div className="mb-3">
              <label htmlFor="title">Titolo dell'articolo</label>
              <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleInputChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="content">Il contenuto dell'articolo</label>
              <input type="text" className="form-control" id="content" name="content" value={formData.content} onChange={handleInputChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="image">L'immagine del ciiiiboh</label>
              <input type="text" className="form-control" id="image" name="image" value={formData.image} onChange={handleInputChange} />
            </div>

            <button type="submit" className="btn btn-primary">Pubblica</button>

          </form>
        </section>
   
      </div>
    </>
  )
}

export default HomePage;
