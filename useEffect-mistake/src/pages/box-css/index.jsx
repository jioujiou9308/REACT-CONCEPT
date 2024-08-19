import React from "react";
import Image from "next/image";
const Index = () => {
  return (
    <>
      <style jsx>{`
        .responsive-box {
          width: 100%;
          height: auto;
          max-width: 500px;
          max-height: 500px;
          min-width: 300px;
          min-height: 300px;
          aspect-ratio: 1/1;
        }
      `}</style>
      <div>
        <div className="responsive-box bg-yellow-200 m-2">asdf</div>
      </div>
      <Image
        src="https://cdn.sanity.io/images/mqc7p4g4/production/5f636d7be122c9a77310044ba2f4eb6c4210d26c-930x728.png"
        width={465}
        height={464}
        className="object-cover !border !border-solid !border-outlineGray rounded-xl max-w-[370px] h-[370px]"
      />
    </>
  );
};

export default Index;
