module.exports = (sequelize, type) => {
    return sequelize.define('admin', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        email: {
            type: type.STRING(150),
            unique: true,
            allowNull: false
            },
        user: {
            type: type.STRING(100),
            unique: true,
            allowNull: false
            },
        
        password: {
            type: type.STRING,
            unique: true,
            allowNull: false
            }
    })
}