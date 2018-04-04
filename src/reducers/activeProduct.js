const getAbsoluteImagePath = imageName => {
    return `/static/assets/${imageName}`;
};

export default function(state = null, action) {
    return {
        'name': 'NutriWell Barley',
        'price': '2.25',
        'brand': 'NutriWell',
        'desc': 'F&N NutriWell Barley is freshly brewed from a special home recipe using carefully selected pearl barley and dried winter melon strips. Barley, a grain full of pure goodness, is commonly used in home-brews, to make that familiar barley drink or in soups. All natural, with no added preservatives and reduced in sugar, F&N NutriWell Barley is the great-tasting, \'healthier-choice\' convenient beverage to cool you down in this tropical climate. Make drinking F&N NutriWell a daily enjoyment.',
        'measurement': '1L',
        'image': getAbsoluteImagePath('product1.jpg')
    };
}
