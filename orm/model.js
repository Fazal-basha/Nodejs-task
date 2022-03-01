const Sequelize = require('sequelize');
var sequelize=require('./connection');

var author=sequelize.define('author',{
    author_id:{
      type: Sequelize.INTEGER,
      primaryKey:true
    },
    author_name:{
      type: Sequelize.TEXT,
      allowNull:false
    },
    author_city:{
      type: Sequelize.TEXT,
      allowNull: true
    }
  });

  var books=sequelize.define('books',{
    book_id:{
        type: Sequelize.INTEGER,
        primaryKey:true
    },
    book_name:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    book_Category:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    no_of_pages:{
        type: Sequelize.TEXT,
        allowNull:false
    }
})


author.hasMany(books,{foreignKey: 'author_id'});
books.belongsTo(author,{foreignKey: 'author_id'});

author.sync({drop: false}).then(() => {
    
    console.log("author table Synched!!!");
  });

books.sync({ drop: false}).then(() => {
    
    console.log("books table Synched!!!");
  });


  module.exports={books:books,author:author};