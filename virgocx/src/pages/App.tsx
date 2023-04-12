import React from 'react';

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {height:0,width:0};
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  
  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  render() {
    let title,leftUp,leftDown,rightUp,rightDown;
    const screenWidth = this.state.width;
    if (screenWidth >= 1024){
      title = <img src={"./assets/images/title-hor.png"} />
      leftUp = <img src={"./assets/images/left-up.png"} className="w-[560px] h-[446px]"/>
      leftDown = <img src={"./assets/images/left-down.png"} className="w-[560px] h-[578px]"/>
      rightUp = <img src={"./assets/images/right-up.png"} className="w-[560px] h-[628px] "/>
      rightDown = <img src={"./assets/images/right-down.png"} className="w-[560px] h-[396px] "/>
    }else{
      title = <img src={"./assets/images/title-ver.png"} />
      leftUp = <img src={"./assets/images/left-up-small.png"} className="w-[325px] h-[230px] "/>
      leftDown = <img src={"./assets/images/right-up-small.png"} className="w-[325px] h-[230px] "/>
      rightUp = <img src={"./assets/images/left-down-small.png"} className="w-[325px] h-[230px] "/>
      rightDown = <img src={"./assets/images/right-down-small.png"} className="w-[325px] h-[230px] "/>
    }
    return (
    <div className="flex flex-col items-center">
      <div className="pb-[40px] lg:pb-[84px] pt-[49px] lg:pt-[109px]">
        {title}
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex-col">
          <div className="w-[325px] h-[230px] lg:w-[560px] lg:h-[446px] ">
            {leftUp}
          </div>
          <div className="w-[325px] h-[230px] lg:w-[560px] lg:h-[578px] ">
            {leftDown}
          </div>
        </div>
        <div className="flex-col">
          <div className="w-[325px] h-[230px] lg:w-[560px] lg:h-[628px] ">
            {rightUp}
          </div>
          <div className="w-[325px] h-[230px] lg:w-[560px] lg:h-[396px] ">
            {rightDown}
          </div>
        </div>
      </div>
    </div>
  );
    }
}

export default Main;