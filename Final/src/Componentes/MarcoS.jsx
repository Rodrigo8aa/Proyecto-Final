import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types"

function MarcoS({argentina}) {
    const imprimirinfo= () => {
        {argentina.map((c, index)=>{
            console.log(index,c.title);
        })}

        console.log("===================================");
        
        {argentina.map((c)=>{
            console.log(c.id_tag, c.title);
        })}
    }

    return ( 
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://tn.com.ar/resizer/AnpQHBdHwziWykAR5qTSiyjW1O4=/650x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/3KQ6CTEFXJCPNFRYPVXSF2PAGE.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        
        {argentina.map((c)=>( 
            <Card style={{ width: '18rem' }} key={c.title}>
            <Card.Img variant="top" src={c.image_url} />
            <Card.Body>
                <Card.Title>{c.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>     
        ))}

        <Button onClick={imprimirinfo}>
            Imprimir los datos de la info
        </Button>
        </>
    );
}
MarcoS.prototype={
    argentina: PropTypes.array.isRequired,
}

export default MarcoS;