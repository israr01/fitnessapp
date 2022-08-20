/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";
import bg from './bg.jpg';
import { Button } from "@chakra-ui/button"
import { ChakraProvider } from '@chakra-ui/react'



const container = () => {
  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (

    <div css={css`
    display: flex;
    align-items:center;
    justify-content: center;
    height:100vh;
    flex-direction:column;
    background: url(${bg});
    background-size: cover;
    backdrop-filter: blur(5px);
    padding:15%;
    }
    .calendar-block
    {
        margin:40px;
    }
    h1{
        color: #fff;
        text-shadow: -3px 3px #000;
        font-size: 50px;
        margin-bottom: 20px;
        text-shadow: 2px 2px #000;
        font-family: 'Open Sans', serif;
        font-weight:800;
    }
    h2{
        color:#fff;
        font-size: 25px;
        margin-bottom: 34px;
        text-shadow: 2px 2px #000;
    }
    .btn1
    {
        margin-right: 15px;
    }
  `}>
        <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,300"></link>
    <h1>READY TO TRAIN LIKE A PRO?</h1>
    <h2>SHOP MY PRODUCTS OR LEARN WHAT'S BEST FOR YOU WITH MY PROGRAM SELECTOR TOOL</h2>
    <ChakraProvider>

    <div>
        <Button colorScheme='yellow' className="btn1"> Lorem Ipsum is simply dummy </Button>
        <Button  colorScheme='yellow' className="btn2"> Lorem Ipsum is simply dummy </Button>
        </div>
    </ChakraProvider>
  </div>
    
  );
};

export default container;
