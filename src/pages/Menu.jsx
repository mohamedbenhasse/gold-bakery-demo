import StackedMenu from "../components/StackedMenu.jsx";

export default function Menu({ setPage, setSelectedProduct }) {
  return (
    <main>
      <StackedMenu setPage={setPage} setSelectedProduct={setSelectedProduct} />
    </main>
  );
}
