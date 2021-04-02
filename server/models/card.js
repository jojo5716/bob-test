module.exports = (mongoose) => {
    const Product = mongoose.model(
        'card',
        mongoose.Schema({
            name: String,
            bags: { type: Number, default: 0 },
        }),
    );

    return Product;
};
