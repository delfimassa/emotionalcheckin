import React from "react";
import Carousel from "react-bootstrap/Carousel";
import post1 from "../assets/mentalHealthPost1.jpg";
import post2 from "../assets/mentalHealthPost2.jpg";
import post3 from "../assets/mentalHealthPost3.jpg";
import post4 from "../assets/mentalHealthPost4.jpg";
import call from "../assets/emotionsb.jpg"
import call2 from "../assets/emotionsa.jpg"

const Inicio = () => {
  return (
    <div className="container">
      <div className="row p-3 bgWhy no-gutters">
        <div className="col-md-8 nomd nolg noxl">
          <h5 className="display-6">Why</h5>
          <p>
            I saw this post on instagram and I thought this was AMAZING so I
            decided to create a virtual version of this AWESOME TEACHER's
            check-in as practice, hoping some institution can apply it in their
            virtual classroom and maybe help someone. <br></br>This pandemic has
            had a big impact on our mental health, our learning process and our
            bonds. Hopefully this can help bring us a little bit closer.
            <br></br>Mysterious teacher, whoever you are, thank you!
          </p>
        </div>
        <div className="col-md-4">
          <Carousel className="mx-2 mb-2">
            <Carousel.Item>
              <img className="w-100" src={post1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100" src={post2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100" src={post3} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100" src={post4} alt="" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-8 nosm noxs">
          <h5 className="display-6">Why</h5>
          <p>
            I saw this post on instagram and I thought this was AMAZING so I
            decided to create a virtual version of this AWESOME TEACHER's
            check-in as practice, hoping some institution can apply it in their
            virtual classroom and maybe help someone. <br></br>This pandemic has
            had a big impact on our mental health, our learning process and our
            bonds. Hopefully this can help bring us a little bit closer.
            <br></br>Mysterious teacher, whoever you are, thank you!
          </p>
          <div className="text-center nomd emotions">
            <img className="nolg" src={call} alt="charla" width="100%" />
            <img className="noxs noxs noxl"src={call2} alt="charla" width="100%" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
