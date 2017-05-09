function Cat(name) {
    this.name = name;
}

Cat.prototype.meow = function() {
    return 'Meow';
};

Cat.prototype.do = function(task, callback) {
    console.log(this.meow() + ', I am ' + this.name +
        ', and I was born to ' + task + '!');
    return callback();
};

var nyan = new Cat('Nyan');

nyan.do('fly', function() {
    console.log('===FLY===');
});