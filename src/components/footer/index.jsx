import React, { useContext,} from "react";
import { MovieContext } from "../../context/movie";
import { Box } from "./styled";
export const Movie = () => {
  const [state, setState] = useContext(MovieContext);
  return (
    <Box>
      {state.map(({ id ,src, title, user, view })=>{
        return (
          <Box.K key={id}>
            <Box.Img width='100%' height="100%"  src={src} />
            <Box.D>
              <Box.I src={user.img} />
              <div>
                <Box.T>{title}</Box.T>
                <Box.N>{user.name} {user.surname}</Box.N>
                <Box.V>{view}</Box.V>
              </div>
            </Box.D>
          </Box.K>
        );
      })}
    </Box>
  );
};
export default Movie;
