const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().replace(' ', '_');
    return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(employeeGenerator));

// ------------------------------------------------------------------------------------------------------------------------------------------------------- //

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, number) ? 'Parabéns, você ganhou!' : 'Tente novamente!';
                                            // Se sim          :      Se não
};

console.log(lotteryResult(2, numberChecker));

// ------------------------------------------------------------------------------------------------------------------------------------------------------- //

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer) {
        return 1;
    } if (studentAnswer === 'N.A') {
        return 0;
    }
    return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
    let contador = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const actionReturn = action(rightAnswers[index], studentAnswers[index]);
        contador += actionReturn;
    }
    return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

// ------------------------------------------------------------------------------------------------------------------------------------------------------- //
