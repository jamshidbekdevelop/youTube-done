import React, { useContext } from "react";
import { Box } from "./styled";
import { MovieContext } from "../../context/movie";
import muvies from "../../mock/data";

export const Sitebar = () => {
  const [state, setState] = useContext(MovieContext);
  const onClick = (e) => {
    const value= e.target.innerText;
    let res=muvies.filter((val)=>val.catagory.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    setState(res)
    if (value === 'All') {
        setState(muvies)
    }
  };
  return (
    <Box>
      <Box.Button>
        <Box.H1 onClick={onClick}>All</Box.H1>
      </Box.Button>
      <Box.Button>
        <Box.H1 onClick={onClick}>Kino</Box.H1>
      </Box.Button>
      <Box.Button>
        <Box.H1 onClick={onClick}>Music</Box.H1>
      </Box.Button>
      <Box.Button>
        <Box.H1 onClick={onClick}>Videos</Box.H1>
      </Box.Button>
      <Box.Button>
        <Box.H1 onClick={onClick}>Multic</Box.H1>
      </Box.Button>
      <Box.Button>
        <Box.H1 onClick={onClick}>Pubg</Box.H1>
      </Box.Button>
      <Box.Button>
        <Box.H1 onClick={onClick}>Camediya</Box.H1>
      </Box.Button>
      <Box.Button>
        <Box.H1 onClick={onClick}>Live</Box.H1>
      </Box.Button>
    </Box>
  );
};
export default Sitebar;
