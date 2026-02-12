let user = {
    name: "John",
    age: 30
};
alert( user.name );
alert( user.age );
user.isAdmin = true;
delete user.age;
let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};
alert(user["likes birds"]);
let key = "likes birds";
user[key] = true;
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.apple ); // 5 if fruit="apple"
let obj = {
    for: 1,
    let: 2,
    return: 3
};
alert( obj.for + obj.let + obj.return );
alert( "age" in user ); // true
alert( "blabla" in user ); // false
let key = "age";
alert( key in user );//true
let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
for (let key in user) {
    alert( key );
    alert( user[key] );
}

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};

let a = {};
let b = a;
alert( a == b ); // true
alert( a === b );//true

let a = {};
let b = {}; // two independent objects
alert( a == b ); // false

let user = {};
user.me = user;
let clone = structuredClone(user);
alert(clone.me === clone); // true

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

let user = {
    name: "John",
    age: 30,
    sayHi() {
        alert(this.name);
    }
};
user.sayHi();

function makeUser() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}

let user = makeUser();

alert( user.ref().name );

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );


function Calculator() {

    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('How much to add?', 0);
    };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");
alert( Symbol.keyFor(sym) ); 
alert( Symbol.keyFor(sym2) );