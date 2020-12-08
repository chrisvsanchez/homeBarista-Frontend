import React from "react";
export default class NewItemForm extends React.Component {
  state = {
    image: {},
    video: {},
  };

  onChange = (e) => {
    e.persist();
    this.setState(() => {
      return {
        [e.target.name]: e.target.files[0],
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("image", this.state.image);

    fetch(`http://localhost:3000/items`, {
      method: "POST",
      body: form,
    })
      .then((r) => r.json())
      .then((imageObj) => {
        console.log(imageObj.image);
        this.setState({
          image: imageObj.image,
        });
      });
  };
  render() {
    return (
      <div className="form">
        <form onSubmit={this.onSubmit}>
          <label> image Upload </label>
          <input type="file" name="image" onChange={this.onChange} />
          <br></br>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
