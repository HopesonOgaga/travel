import "./index.css";
export default function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Form></Form>
      <PackingLists></PackingLists>
      <Stats></Stats>
    </div>
  );
}

function Logo() {
  // window + . for emoji
  return <h1>far away 🐱</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>what do you need 🐱‍🚀?</h3>
    </div>
  );
}

function PackingLists() {
  return <div className="list">list</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <p>🐱‍👤 you have x item on your list, and you already packed x </p>
    </footer>
  );
}
