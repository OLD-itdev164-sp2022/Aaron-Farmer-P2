import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Card from './components/Card';
import './App.css';
import { Box } from 'rebass';
import styled from 'styled-components';
import { FaRegKissBeam} from "react-icons/fa";


//{ imageList.map((image) => (<img src={image.url} alt={image.public_id}></img>)) }
//const [imageList, setImageList] = useState([images.resources]);

const Grid = styled(Box)`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill,minmax(350px, 1fr));

`;

const App = () => {  
  return (
    <section className='big_tainer'>
    <Navbar />
      <Grid>
        <Card 
          img={require("./images/img_1.jpg")}
          title="Cool Poses"
          text="Enjoying the sun"
          alt="Sunbathing">
        </Card>
        <Card 
          img={require("./images/img_2.jpg")}
          title="Snowy Coldy"
          text="Having fun on on a snowy trail"
          alt="Having fun on on a snowy trail">
        </Card>

        <Card 
          img={require("./images/img_3.jpg")}
          title="Frozen Motion"
          text="Inside of a frozen river"
          alt="Frozen River">
        </Card>

        <Card 
          img={require("./images/img_4.jpg")}
          title="Easter Picture"
          text="Find the eggs!"
          alt="Easter Picture">
        </Card>

        <Card 
          img={require("./images/img_5.jpg")}
          title="Lucky Egg!"
          text="Hidden treasure within the egg"
          alt="Opening easter eggs">
        </Card> 
        <Card
          img={require("./images/img_6.jpg")}
          title="Chef Boy Farmer"
          text="Learning to make gourmet Fruit Loops"
          alt="Alex standing, holding fake food">
        </Card> 
        <Card
          img={require("./images/img_7.jpg")}
          title="Bob the Builder"
          text="Yes He Can!"
          alt="Play with work truck">
        </Card> 
        <Card
          img={require("./images/img_8.jpg")}
          title="Construction Worker"
          text="Working hard daily to improve everyones' quality of life"
          alt="Wearing high visiilty vest and hard hat">
        </Card> 
        <Card
          img={require("./images/img_9.jpg")}
          title="Pumpkin Time"
          text="Pumpkin Farms"
          alt="Sitting amongst pumkins">
        </Card> 
        <Card
          img={require("./images/img_10.jpg")}
          title="Happiness"
          text="Smiling with or without teeth"
          alt="Alex smiling">
        </Card> 
      </Grid>
      <Footer />
    </section>
  );
};


export default App;