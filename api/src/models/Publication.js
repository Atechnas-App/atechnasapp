const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('publication', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('Activo', 'EnProceso','Cancelado','Pausado','Terminado'),
      // defaultValue: 'Activo'
    },
    price:{
      type:DataTypes.BIGINT,
      allowNull:false
    }
  });
};