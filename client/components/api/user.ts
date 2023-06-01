import axios from 'axios';

type Response<T> = {
  results: T;
}; 

interface Course {
  id: string;
  name: string;
  url: string;
  active: boolean;
}

type Tree = string[];

export interface User {
  name: string;
  token: string;
  login: string;
  password: string;
  courses: Course[];
  tree: Tree;
}

export interface OkData<T> {
  result: T;
}

export const getUser = async (authToken: string): Promise<User> => {
  type Data = Response<User>;
  const response = await axios.get<Data>('api/user', {
    headers: {
      'Authorization': authToken,
    },
  });
  return response.data.results;
};
