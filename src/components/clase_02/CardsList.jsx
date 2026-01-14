import Card from "./Card";

const destinos = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCS8T2EW5FzgScWdX8etBMNoQ1IYwMe_TjQ&s',
    title: 'Villa La Angostura',
    description: 'Un hermoso lugar con pinos y agua cristalina.',
    bgColor: 'green',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbsutGQE0Gs6N4MoB5oP4z1WFVHk26Qjw5A&s',
    title: 'Mendoza Capital',
    description: 'Un maravilloso lugar para hacer rafting y comer tremendo asado con vino.',
    bgColor: 'yellow'
  },
  {
    image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/12/3f/b7/c1.jpg',
    title: 'El Calafate',
    description: 'Un lugar increible para ver caer trozos de hielo gigantes.',
    bgColor: 'aqua',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBK91rCU3q_MblHlzw2JUDEftOLpj9kuzIw&s',
    title: 'Laferrere',
    description: 'Un lugar del que no volves.',
    bgColor: 'black',
  },
]

const CardList = () => {
  return (
    <>
      <div className="testimonies_cards">
        {destinos.map((destino, i) => (
          <Card key={i} destino={destino} />
        ))}
      </div>

      <style jsx>{`
        .testimonies_cards {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            gap: 50px;
        }
      `}</style>
    </>
  );
};

export default CardList;
