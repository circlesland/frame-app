export interface ICirclesAuthApi {
  login: () => void;
  logout: () => void;
}

export interface ICirclesCustomWindow extends Window {
  authApi: ICirclesAuthApi;
}
