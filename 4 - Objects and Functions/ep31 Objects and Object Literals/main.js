// Object literal
var person = {};
console.log(person);


function greet(name) {
  console.log('Hail and well met ' + name + '!')
}

function rollDice(diceCount, diceType) {
  var result = 0;

  for(i=0; i < diceCount; i++) {
    result = result + Math.floor((Math.random() * diceType) + 1);
  }
  return result;
}

function attack(attacker, action, recipient, reaction) {
  var damage = rollDice(action.diceCount, action.diceType);

  // Use reaction if any
  damage = reaction.call(this, damage);

  // Take damage
  recipient.hp = recipient.hp - damage;
  console.log(recipient.hp);
}

function uncannyDodge(damage) {
  var uDodge = confirm('Uncanny dodge?');
  if (uDodge == true) { damage = Math.floor(damage / 2) }

  return damage;
}

var weapons = {
  staff: {diceCount:1, diceType:6},
  gutter: {}
}

var spells = {
  fireball: {diceCount:8, diceType:6}
}

var classes = {
  thief: {
    abilities: {
      uncannyDodge: uncannyDodge
    }
  }
}

var party = {
  members: [
    {
      name: 'Strix',
      hp: 30,
      weapons:{Staff: weapons.staff},
      spells: {Fireball: spells.fireball}
    },
    {
      name: 'Diath',
      hp: 35,
      weapons: {'Gutter': weapons.gutter},
      abilities: {uncannyDodge: classes.thief.abilities.uncannyDodge}
    },
    {name: 'Evelyn', hp: 55},
    {name: 'Paulton', hp: 32}
  ]
};

var strix = party.members[0];
var diath = party.members[1];
var evelyn = party.members[2];
var paulton = party.members[3];


greet(strix.name);
attack(strix, strix.spells.Fireball, diath, diath.abilities.uncannyDodge);
