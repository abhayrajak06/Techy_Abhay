import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyAbhay</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading teach company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            culpa temporibus saepe cupiditate, dicta minima est consequatur
            recusandae ipsum harum debitis minus deleniti assumenda, commodi qui
            ut asperiores inventore quaerat eveniet ipsam repellat esse cumque
            nisi. Ipsam reprehenderit, nihil cupiditate vel aspernatur deleniti
            consequuntur maiores fugiat recusandae enim nisi odit? Ullam maiores
            dolorem odit, vero laborum culpa, cupiditate iste quis aperiam qui,
            doloremque perspiciatis nemo magni quam itaque incidunt delectus
            consectetur beatae id dignissimos aliquam saepe. Reprehenderit
            obcaecati natus, ipsa, velit dolore eaque voluptates voluptas, sequi
            amet porro nihil. Ipsum commodi vero consectetur natus mollitia quam
            ut, ratione sint placeat libero nihil rem vel, repellendus quaerat
            at nobis asperiores ab odio repudiandae doloribus animi dolor? Eos
            delectus natus soluta accusamus!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
