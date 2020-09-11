import React from "react";
import { Card, Image, Button, Icon, Segment } from "semantic-ui-react";

class Post extends React.Component {
  handleClickDelete = (e) => {
    this.props.deletePost(this.props.post.id);
  };
  render() {
    // console.log(this.props);
    return (
      <Card style={{ backgroundColor: "#DDC9B4" }}>
        <div>
          <Button animated>
            <Button.Content visible>Edit</Button.Content>
            <Button.Content hidden>
              <Icon name="edit outline" />
            </Button.Content>
          </Button>
          <Button animated onClick={this.handleClickDelete}>
            <Button.Content visible>Delete</Button.Content>
            <Button.Content hidden>
              <Icon name="delete" />
            </Button.Content>
          </Button>
          <Button animated onClick={"hello"}>
            <Button.Content visible>Comments</Button.Content>
            <Button.Content hidden>
              <Icon name="Comments" />
            </Button.Content>
          </Button>

          <Image
            src={this.props.post.image}
            as="a"
            size="medium"
            // href='http://google.com'
            // target='_blank'
          />
          <div>
            <h3>{this.props.post.title}</h3>
            <p>{this.props.post.article_text}</p>
          </div>
        </div>
      </Card>
    );
  }
}

export default Post;
