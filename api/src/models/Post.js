const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('post', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
<<<<<<< HEAD

    title: {
      type: DataTypes.STRING,
      allowNull: true,
=======
    // el id user deberia ser mediante tabla intermedia, cambié todo a true ara probar la db
    idUser: {
        type: DataTypes.STRING,
        allowNull: true,
>>>>>>> 7a24bb4b175cf397dab1aef29cfcae9d4d76cf6a
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    company: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: true,
<<<<<<< HEAD
    },

    qualification: {
      type: DataTypes.STRING,
      allowNull: true,
=======
>>>>>>> 7a24bb4b175cf397dab1aef29cfcae9d4d76cf6a
    },

  });
};
