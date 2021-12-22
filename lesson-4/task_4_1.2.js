"use strict";

/**
 * 1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле es6 (по
  аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
  а) конструктор Post, который принимает параметры author, text, date и сохраняет
  их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет
  принимать текст и записывать его в свойство text объекта.
  б) конструктор AttachedPost, который принимает параметры author, text, date.
  Проинициализируйте эти свойства с помощью конструктора Post, чтобы не
  дублировать код. Также в конструкторе AttachedPost должно создаваться свойство
  highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
  Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
  который будет назначать свойству highlighted значение true.
 */

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(textInput) {
    this.text = textInput;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

class PostClass {
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }

    editClass(textEdit) {
        this.text = textEdit;
    }
}

class AttachedPostClass extends PostClass {
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlightedClass(){
        this.highlighted = true;
    }
}

// через конструктор создание
const post1 = new Post("Eva", 'I love you', '13.12.2021');
post1.edit('Not this time!');

const post2 = new AttachedPost('Alex', 'Lets go!', '11.12.2021');
post2.edit('Do it. Just do it');
post2.makeTextHighlighted();

// создание через class

const post3 = new PostClass('Valera', 'Nadejda i vera', '01.01.2022');
post3.editClass('Valera verim!');

const post4 = new AttachedPostClass('Eduard', 'Surovye pesni', '01.04');
post4.makeTextHighlightedClass();