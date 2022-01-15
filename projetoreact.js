import { ChakraProvider, Box} from '@chakra-ui/react';
import React from 'react';

function App() {

  const [direction, setDirection] = React.useState([
    'to-t',
    'to-tr',
    'to-r',
    'to-br',
    'to-b',
    'to-bl',
    'to-l',
    'to-tl',
  ]);

  const [index, setIndex] = React.useState(0);

  const rotateGradient = () => {
    if (index === direction.length - 1) setIndex(0);

    setIndex((previous) => previous +1);
  }



  return (
    <ChakraProvider>

      <Box
        display="flex"
        w= "100%"
        h="1000px"
        bgGradient={[
          'linear(to-tr, teal.300, yellow.400)',
          'linear(to-t, blue.200, teal.500)',
          'linear(to-b, orange.100, purple.300)',
        ]}
      >

        {/* <Button /}
          {/ left="20%" /}
          {/ top="20%" /}
          {/ bgGradient={'linear(' + direction[index] + ', red.100,blue.300)'} /}

        {/ ></Button> */}

      </Box>
    </ChakraProvider>
  );
}

export default App;