import React from 'react';

class Main extends React.Component {
  constructor(props){
    super(props)
    const { height, width } = { width: 0, height: 0 };
    this.state = {height:height,width:width};
  }
  updateDimensions = () => {
    console.log(window.innerWidth)
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  render() {
    let title;
    const screenWidth = this.state.width;
    if (screenWidth >= 1024){
      title = <img src={"./assets/images/title-hor.png"} />
    }else{
      title = <img src={"./assets/images/title-ver.png"} />
    }
    

    return (
    <div className="flex flex-col items-center">
      <div className="pb-[40px] lg:pb-[84px] pt-[49px] lg:pt-[109px]">
        {/* Commission-free Crypto Trading  */}
        {title}
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex-col">
          <div className="w-[325px] h-[230px] lg:w-[560px] lg:h-[446px] bg-white-500">
            <img src={"./assets/images/left-up.png"} className="w-[325px] h-[230px] lg:w-[560px] lg:h-[446px] bg-white-500"/>
            {/* Picture 1 */}
          </div>
          {/* <div className="horizontal-gap"/> */}
          <div className="w-[325px] h-[230px] lg:w-[560px] lg:h-[578px] bg-blue-500">
            {/* <img src={"./assets/images/left-down.png"} className="w-[325px] h-[230px] lg:w-[560px] lg:h-[578px] bg-white-500"/> */}
          </div>
        </div>
        {/* <div className="vertical-gap"/> */}
        <div className="flex-col">
          <div className="w-[325px] h-[230px] lg:w-[560px] lg:h-[628px] bg-yellow-500">
            {/* <img src={"./assets/images/right-up.png"} className="w-[325px] h-[230px] lg:w-[560px] lg:h-[628px] bg-white-500"/> */}
          </div>
          {/* <div className="horizontal-gap"/> */}
          <div className="w-[325px] h-[230px] lg:w-[560px] lg:h-[396px] bg-green-500">
            {/* <img src={"./assets/images/right-down.png"} className="w-[325px] h-[230px] lg:w-[560px] lg:h-[396px] bg-white-500"/> */}
          </div>
        </div>
      </div>
    </div>
  );
    }
}

export default Main;