module.exports = (sequelize, DataTypes) => {
    const Block = sequelize.define('Block', {
        difficulty: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        gasLimit: {
            type: DataTypes.INTEGER(50),
            allowNull: false,
        },
        gasUsed: {
            type: DataTypes.INTEGER(50),
            allowNull: false,
        },
        hash: {
            type: DataTypes.STRING(66),
            allowNull: false,
        },
        miner: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        nonce: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        number: {
            type: DataTypes.INTEGER(50),
            allowNull: false,
            primaryKey: true,
            ignoreDuplicates: true,
        },
        timestamp: {
            type: DataTypes.INTEGER(50),
            allowNull: false,
        },
        transactions: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        transactionsRoot: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    })
    return Block
}
