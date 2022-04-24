import React, { useContext } from "react";
import { Div } from "./styled";
import { MovieContext } from "../../context/movie";
import muvies from "../../mock/data";
import jsh from "../../assats/img/jsh.png";

export const Main = () => {
  const [state, setState] = useContext(MovieContext);
  const onChange = (e) => {
    const { value } = e.target;
    let res = muvies.filter((val) =>
      val.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setState(res);
  };
  return (
    <Div>
      <Div.M>
        <Div.Button>
          <Div.Img0 />
        </Div.Button>
        <Div.K>
          <Div.Img2 />
          <Div.H1>Youtube</Div.H1>
        </Div.K>
      </Div.M>
      <Div.B>
        <Div.Input placeholder={"Search"} onChange={onChange} />
        <Div.Button1>
          <Div.Img1 />
        </Div.Button1>
      </Div.B>
      <Div.DD>
        <Div.L>
          <Div.Img3 />
          <Div.Img4 />
          <Div.Img5 />
          <Div.Img6>
            <img
              borderradius={"50%"}
              width={"100%"}
              height={"100%"}
              src={jsh}
              alt=""
            />
          </Div.Img6>
        </Div.L>
      </Div.DD>
    </Div>
  );
};
export default Main;
