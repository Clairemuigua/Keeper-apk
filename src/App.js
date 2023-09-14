import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Note from "./Components/Note";
import notes from "./Components/notes";

// console.log(notes);
// function createNotes(noteItem) {
//   return <Note
//     key={noteItem.key}
//     title={noteItem.title}
//     content={noteItem.content}
//   />
// }

function App() {
  return (
    <div className="App">
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;