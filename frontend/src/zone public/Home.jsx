import React from "react";
import Newv from "../assets/Newv.jpg?url";

const Home = () => {
  
  return (
    <div className="h-full">
      <section
        id="vitrine"
        style={{ backgroundImage: `url(${Newv})` }}
        className="h-[60vh]  bg-cover bg-center flex justify-center items-center relative"
      >
        <div className=" bg-black/50 absolute inset-0 flex justify-center items-center">
          <h1 className="font-bold uppercase text-white text-6xl drop-shadow-sm">
            welcome
          </h1>
        </div>
      </section>
      <section id="service" className="my-4 px-3 mb-2">
        <h2 className="text-center uppercase text-xl mb-4"> Services</h2>
        <div className="grid grid-cols-3 place-items-center">
          <div>
            <img src="https://picsum.photos/200/300" alt="" />
          </div>

          <div>
            <img src="https://picsum.photos/201/300" alt="" />
          </div>

          <div>
            <img src="https://picsum.photos/200/301" alt="" />
          </div>
        </div>
      </section>
      <section id="produit">
        <h2 className="text-center uppercase mt-10 text-xl">produit</h2>
        <div className="grid grid-cols-4 place-items-center mt-10">
          <div>
            <img src="https://picsum.photos/201/301" />
          </div>
          <div>
            <img src="https://picsum.photos/202/301" />
          </div>
          <div>
            <img src="https://picsum.photos/200/302" />
          </div>
          <div>
            <img src="https://picsum.photos/201/302" />
          </div>
        </div>
      </section>
      <section id="svg" className=" text-sm mt-20">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius
          sunt magni expedita qui. Earum a, dolore magnam incidunt velit officia
          debitis accusantium voluptatibus sunt, voluptatem facilis aliquam quis
          sapiente!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias
          laudantium maiores iure inventore, amet placeat corporis consectetur
          voluptas deserunt quaerat sunt ab omnis veniam repellendus in quas
          voluptates repudiandae?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          unde eaque dolor maiores sunt fugit exercitationem illo cumque?
          Repellat similique, totam numquam id alias voluptas sed nihil. Hic,
          placeat dolore.
        </div>
      </section>
    </div>
  );
};

export default Home;
