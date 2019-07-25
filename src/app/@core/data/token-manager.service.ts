import {Injectable} from '@angular/core'

@Injectable()
export class TokenManagerService {

  private tokenKey = 'app_token';
  private ttl = 3000;

  public generateNewToken(response) {
    const currentTime: number = (new Date()).getTime() + this.ttl;
    sessionStorage.setItem(this.tokenKey, JSON.stringify({ttl: currentTime, token: response.token}));
  }

  public retrieveToken() {
    const currentTime: number = (new Date()).getTime();
    const storedToken: any = JSON.parse(sessionStorage.getItem(this.tokenKey));
    if (!storedToken || storedToken.ttl < currentTime) {
      return null;
    }
    return storedToken.token;
  }

  public removeToken() {
    sessionStorage.removeItem(this.tokenKey);
  }
}
