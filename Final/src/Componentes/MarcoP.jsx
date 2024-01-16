import Button from "react-bootstrap/Button"
import Card from 'react-bootstrap/Card';

function MarcoP({ argentina }) {
  const imprimirinfo= () => {
    {argentina.map((c)=>{
        console.log(c.title);
    })}
    // console.log(argentina);
}


  return (



    <>
      <Card className="bg-dark text-white " >
        <Card.Img src="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=a385b681962e40088a83019e33d393d2" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>

      {/* <Button onClick={imprimirinfo}>
            Imprimir los datos de la info
        </Button> */}


    </>
  );
}


export default MarcoP;