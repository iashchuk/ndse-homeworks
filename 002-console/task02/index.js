const readline = require("readline");
const input = readline.createInterface(process.stdin, process.stdout);

const secret = Math.floor(Math.random() * 100);
let answers = 0;

const question = (text) =>
  new Promise((resolve) => {
    input.question(text, (answer) => resolve(answer));
  });

const exit = () => input.close();

const game = async () => {
  console.log("Загадано число в диапазоне от 0 до 100.");

  while (true) {
    const raw = await question("Введите Ваш вариант ответа: ");
    const answer = Number.parseInt(raw);

    if (Number.isNaN(answer)) {
      console.log("Вводить можно только числа");
      continue;
    }

    answers += 1;

    if (answer < secret) {
      console.log("Больше");
    } else if (answer > secret) {
      console.log("Меньше");
    } else {
      console.log(`Верно, это число ${answer}.`);
      console.log(`Количество попыток: ${answers}.`);
      return;
    }
  }
};

game().then(() => {
  exit();
});

input.on("close", () => console.log("\nСпасибо за игру!"));
