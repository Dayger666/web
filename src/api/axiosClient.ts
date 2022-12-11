import axios, { AxiosInstance } from 'axios';

class AxiosClient {
  client: AxiosInstance;

  rickAndMortyClient: AxiosInstance;

  constructor() {
    this.client = this.getClient();
    this.rickAndMortyClient = this.getRickAndMortyClient();
  }

  getClient() {
    if (!this.client) {
      const client = axios.create({
        baseURL: process.env.REACT_APP_API_ADDRESS,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      this.client = client;
    }

    return this.client;
  };

  getRickAndMortyClient() {
    if (!this.rickAndMortyClient) {
      const client = axios.create({
        baseURL: process.env.REACT_APP_RICK_AND_MORTY_API_ADDRESS,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      this.rickAndMortyClient = client;
    }

    return this.rickAndMortyClient;
  };
}

export default new AxiosClient();
