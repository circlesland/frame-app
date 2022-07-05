export interface ICirclesLocalStorage {
  sessionId: string;
  email: string;
  name: string;
  profileImage: string;
  privateKey: string;
}
export interface ICirclesAuthApi {
  login: () => void;
  logout: () => void;
  processAuth: (window: Window & ICirclesCustomWindow) => boolean;
  getDataFromLocalStorage: () => ICirclesLocalStorage | null;
}

export interface ICirclesCustomWindow {
  authApi: ICirclesAuthApi;
}
