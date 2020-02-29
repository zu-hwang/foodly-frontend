// import InputCheckBox from './InputCheckBox';

const Interjection = ["Ooops!", "Oh!", "Nope!"];
const getRandomNumber = num => {
  return Math.floor(Math.random() * num);
};

export const Data = {
  text: {
    interjection: Interjection[getRandomNumber(Interjection.length)],
    errText: "pleas ckeck "
  },
  email: {
    interjection: Interjection[getRandomNumber(Interjection.length)],
    errText: "please check E-mail (abc@abc.com)"
  },
  password: {
    interjection: "Notice!",
    errText: "The Password is must consist min 6 charecter"
  }
};
