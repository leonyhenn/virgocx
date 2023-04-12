import React from 'react';

class Main extends React.Component<any, any> {
  constructor(props:any){
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
    if (screenWidth >= 390){
      title = <img src={"./assets/images/title-hor.png"} />
      leftUp = <img src={"./assets/images/left-up.png"} />
      leftDown = <img src={"./assets/images/left-down.png"} />
      rightUp = <img src={"./assets/images/right-up.png"} />
      rightDown = <img src={"./assets/images/right-down.png"} />
    }else{
      title = <img src={"./assets/images/title-ver.png"} />
      leftUp = <img src={"./assets/images/left-up-small.png"} />
      leftDown = <img src={"./assets/images/right-up-small.png"} />
      rightUp = <img src={"./assets/images/left-down-small.png"} />
      rightDown = <img src={"./assets/images/right-down-small.png"} />
    }
    return (
    <div className="flex flex-col items-center">
      <div className="p-[12%] desktop:p-[10%]">
        {title}
      </div>
      <div className="flex flex-col desktop:flex-row items-center w-full">
        <div className="flex-col desktop:w-1/2 flex flex-row items-end">
          <div className="w-full flex flex-col items-end">
            {leftUp}
          </div>
          <div className="w-full flex flex-col items-end">
            {leftDown}
          </div>
        </div>
        <div className="flex-col desktop:w-1/2 flex flex-row items-start">
          <div className="w-full flex flex-col items-start">
            {rightUp}
          </div>
          <div className="w-full flex flex-col items-start">
            {rightDown}
          </div>
        </div>
      </div>
    </div>
  );
    }
}

export default Main;