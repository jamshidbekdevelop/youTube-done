import React from "react";
import Main from "../components/main";
import Navbar from "../components/navbar";
import Sitebar from "../components/sitebar";
import Footer from "../components/footer";
import { Moc } from "./styled";
export const Root = () => {
  return (
      <Moc>
        <Moc.Main>
          <Main />
        </Moc.Main>
        <Moc.Flex>
          <Moc.Navbar>
              <Navbar />
          </Moc.Navbar>
          <Moc.Basic>
            <Moc.Sitebar>
              <Sitebar />
            </Moc.Sitebar>
            <Moc.Footer>
                <Footer />
            </Moc.Footer>
          </Moc.Basic>
        </Moc.Flex>
      </Moc>
  );
};
export default Root;
