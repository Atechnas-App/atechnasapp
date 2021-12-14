const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('payments', {
    payment_id:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    payment_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    merchant_order_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    preference_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    site_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    processing_mode: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    merchant_account_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
  });
};