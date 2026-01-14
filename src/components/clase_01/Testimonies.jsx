import CardList from "../clase_02/CardsList";

export default function Testimonies() {
  return (
    <>
      <section id="Testimonies">
        <h2>Destinos</h2>
        <CardList />
      </section>

      <style jsx>{`
        #Testimonies {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h2 {
          font-size: 3rem;
        }
      `}</style>
    </>
  );
}
