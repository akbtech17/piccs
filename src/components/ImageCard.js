import React from "react";

//to wireup the react ref
//create const
//this.ref_name = react.createRef();
//pass the ref prop with this.ref_name

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
    this.setSpan = this.setSpan.bind(this);
  }

  componentDidMount() {
    
    //   //to find the height of the current img
    // console.log(this.imageRef.current.clientHeight);
    // //but this will console height as 0 // because at that moment image have not been rendered
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 150);

    this.setState({ spans });
    // console.log(this.state.spans);
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div className="image-card" style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
