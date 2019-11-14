const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('pages', {
    title: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    content: {
        type: Sequelize.TEXT, //has unlimited length, as opposed to string
        allowNull: false  
    }, 
    status: {
        type: Sequelize.ENUM('open', 'closed'), 
        allowNull: false, 
        defaultValue: 'closed'
    }, 
    slug:{
        type: Sequelize.STRING, 
        allowNull: false
    }
});

const User = db.define('users', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    email: {
        type: Sequelize.STRING, //has unlimited length, as opposed to string
        allowNull: false, 
        validate: {
            isEmail: true
        }  
    }
});

module.exports = {
  db, 
  Page, 
  User
}