const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// ---------- FUNÇÃO QUE RETORNE O DANO DO DRAGÃO ---------- //
// -------- NUMERO ALEATÓRIO ENTRE 15 E 'STRENGTH' -------- //
const dragonATK = (dragon) => {
  const minDMG = 15;
  const maxDMG = Math.floor(Math.random() * dragon.strength);
  const dragonDMG = maxDMG > minDMG ? maxDMG : minDMG;

  return dragonDMG;
};

// --------------- FUNÇÃO QUE RETORNE O DANO DO WARRIOR --------------- //
// --- NÚMERO ALEATÓRIO ENTRE 'STRENGTH' E 'STRENGTH' * 'WEAPONDMG' --- //
const warriorATK = (warrior) => {
  const minDMG = warrior.strength;
  const maxDMG = Math.floor(Math.random() * (minDMG * warrior.weaponDmg));
  const warriorDMG = maxDMG > minDMG ? maxDMG : minDMG;

  return warriorDMG;
};

// ------------------ FUNÇÃO QUE RETORNE UN OBJETO COM DUAS CHAVES E DOIS VALORES, CONTENDO O DANO E A MANA GASTA PELO MAGO EM UM TURNO ------------------ //
// --------------------------------------------- NUMERO ALEATÓRIO ENTRE 'INTELLIGENCE' E 'INTELLIGENCE' * 2 --------------------------------------------- //
// ---------- A MANA CONSUMIDA POR TURNO É 15. CASO O MAGO TENHA MENOS DE 15 DE MANA, O VALOR DE DANO RECEBE UMA MENSAGEM, E A MANA GASTA É 0 ---------- //
const mageATK = (mage) => {
  const mageMana = mage.mana;
  const minDMG = mage.intelligence;
  const maxDMG = minDMG * 2;
  const mageSTATS = {
    Mana: 0,
    Dano: 'Not enough mana'
  };

  if (mageMana > 15) {
    const mageDMG = minDMG < maxDMG ? maxDMG : minDMG;
    mageSTATS.Mana = 15;
    mageSTATS.Dano = mageDMG;
    return mageSTATS;
  }
  return mageSTATS;
};

const gameActions = {
  // --------------- FUNÇÃO QUE SIMULA O TURNO DO PERSONAGEM 'WARRIOR' --------------- //
  // ----- RECEBE A FUNÇÃO 'warriorATK' E ATUALIZA A 'HEALTHPOINTS' DO 'DRAGON' ----- //
  // ------------ DEVE ATUALIZAR O VALOR DA CHAVE 'DAMAGE' DO 'WARRIOR' ------------ //
  warriorTurn: (warriorATK) => {
    const warriorDamage = warriorATK(warrior);
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },

  // --------------- FUNÇÃO QUE SIMULA O TURNO DO PERSONAGEM 'MAGE' --------------- //
  // ----- RECEBE A FUNÇÃO 'mageATK' E ATUALIZA A 'HEALTHPOINTS' DO 'DRAGON' ----- //
  // ------- DEVE ATUALIZAR O VALOR DAS CHAVES 'DAMAGE' E 'MANA' DO 'MAGE' ------ //
  mageTurn: (mageATK) => {
    const mageTurnSTATS = mageATK(mage);
    const mageDamage = mageTurnSTATS.Dano;
    mage.mana -= mageTurnSTATS.Mana;
    dragon.healthPoints -= mageDamage;
    mage.damage = mageDamage;
  },

  // ---------------------------- FUNÇÃO QUE SIMULA O TURNO DO MONSTRO 'DRAGON' ---------------------------- //
  // ----- RECEBE A FUNÇÃO 'dragonATK' E ATUALIZA A 'HEALTHPOINTS' DOS PERSONAGENS 'WARRIOR' E 'MAGE' ----- //
  // ------------------------ DEVE ATUALIZAR O VALOR DA CHAVE 'DAMAGE' DO MONSTRO ------------------------ //
  dragonTurn: (dragonATK) => {
    const dragonDamage = dragonATK(dragon);
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },

  // ----- FUNÇÃO QUE RETORNA O OBJETO 'battleMembers' ATUALIZADO E FAÇA UM CONSOLE.LOG PARA VISUALIZAR O RESULTADO NO FINAL ----- //
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorATK);
gameActions.mageTurn(mageATK);
gameActions.dragonTurn(dragonATK);
console.log(gameActions.turnResults());