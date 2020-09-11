import React from "react";
import { Image } from "semantic-ui-react";

import MyCoff from "/Users/chrissanchez/Desktop/HomeBarista/homebarista-frontend/src/Images/homeCoff.jpg";
function Home() {
  return (
    <div styles={{ backgroundImage: `url(${MyCoff})` }}>
      <Image
        // size={"small"}
        center
        src={
          "https://images.unsplash.com/photo-1549926870-e783ee3bab5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        }
      />
    </div>
  );
}
export default Home;
