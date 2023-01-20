import axios from "axios";
import React from "react";
import BookItem from "../components/BookItem";

function Home() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3000/books.json").then((response) => {
      setItems(response.data.books);
      console.log(response.data);
    });
  }, []);
  return (
    <div className="home">
      {items.map((obj) => <BookItem key={obj.id} {...obj}/>)}
    </div>
  );
}

export default Home;
