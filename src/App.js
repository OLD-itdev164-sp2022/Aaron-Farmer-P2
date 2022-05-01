import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';
import { Box } from 'rebass';
import styled from 'styled-components';


//{ imageList.map((image) => (<img src={image.url} alt={image.public_id}></img>)) }
//const [imageList, setImageList] = useState([images.resources]);

const Grid = styled(Box)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto_fill,minmax(450px, 1fr));

`;

const App = () => {  
  return (
    <>
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
      </Grid>
    </>
  );
};


export default App;