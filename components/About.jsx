import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anubhav-nagar");
    const json = await data.json();
    this.setState({
        userInfo: json,
      });

    // this.timer = setInterval(()=>{
    //     console.log("Set Interval is called from componentDidMout");
    // }, 1000);
  }

  // componentWillUnmount(){
  //   clearInterval(this.timer);
  // }


  render() {
    if(!this.state.userInfo){
        return <h3>Hi!! Nothing to Show.</h3>
    }
    return( 
        <>
        <div className="h-screen bg-slate-100 z-60 flex">
        <div>
        <img src={this.state.userInfo?.avatar_url} className="w-60 mt-36 ml-16 rounded-full"></img>
        </div>
        <div className="mt-44 ml-12 text-xl leading-relaxed">
        <h3>Name: {this.state?.userInfo?.name}</h3>
        <h3>Location: {this.state.userInfo?.location}</h3>
        <h3>Bio: {this.state.userInfo?.bio}</h3>
        {console.log(this.state?.userInfo)}
        <p className="mt-12 text-xs">Source: Github Profile API</p>
        </div>
        </div>
        </>
    )
  }
}

export default About;
