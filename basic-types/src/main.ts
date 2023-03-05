let myName: string = "Harsh";
let meaningOfLife: number;
let isLoading: boolean;
let album: any; // can be useful when we don't know what type of data we receive

myName = "Naruto";
meaningOfLife = 23;
isLoading = true;
album = 1999;

const sum = (a: number, b: string) => {
  return a + b;
};

let postId: number | string;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
