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
    console.log(this.imageRef);
  }
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
