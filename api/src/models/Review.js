const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('review', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    coments: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    qualification: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  });
};