export class Post {
  public id: string;
  public userId: string;
  public userImage: string;
  public username: string;
  public postTitle: string;
  public postImage: string;
  public postText: string;
  public timestamp: Date;

  setUserId(userId: string) {
    this.userId = userId;
  }

  setUserImage(userImage: string) {
    this.userImage = userImage;
  }

  setUsername(username: string) {
    this.username = username;
  }

  createCurrentTimeStamp() {
    this.timestamp = new Date();
  }

  setPostText(postText: string) {
    this.postText = postText;
  }
}
