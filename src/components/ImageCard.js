import React from "react";

//to wireup the react ref
//create const
//this.ref_name = react.createRef();
//pass the ref prop with this.ref_name

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //   //to find the height of the current img
    // console.log(this.imageRef.current.clientHeight);
    // //but this will console height as 0 // because at that moment image have not been rendered
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    console.log(this.imageRef.current.clientHeight);
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div className="image-card">
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
