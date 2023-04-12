import React from 'react';
class Main extends React.Component {
  render() {

    return (
    <div className="flex flex-col items-center">
      <div className="title">Commission-free Crypto Trading </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex-col">
          <div className="w-[325px] h-[230px] lg:w-[560px] lg:h-[446px] bg-white-500">
            <img src={"./assets/images/left-up.png"} className="w-[325px] h-[230px] lg:w-[560px] lg:h-[446px] bg-white-500"/>
            {/* Picture 1 */}
          </div>
          {/* <div className="horizontal-gap"/> */}
          <div className="w-[325px] h-[230px] lg:w-[560px] lg:h-[578px] bg-blue-500">
            Picture 2
          </div>
        </div>
        {/* <div className="vertical-gap"/> */}
        <div className="flex-col">
          <div className="w-[325px] h-[230px] lg:w-[560px] lg:h-[628px] bg-yellow-500">
            Picture 3
          </div>
          {/* <div className="horizontal-gap"/> */}
          <div className="w-[325px] h-[230px] lg:w-[560px] lg:h-[396px] bg-green-500">
            Picture 4
          </div>
        </div>
      </div>
    </div>
  );
    }
}

export default Main;