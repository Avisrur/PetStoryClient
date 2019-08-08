export class Post {
  public id: string;
  public userId: string;
  public username: string;
  public postImage: string;
  public postText: string;
  public timestamp: Date;

  setUserId(userId: string) {
    this.userId = userId;
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
