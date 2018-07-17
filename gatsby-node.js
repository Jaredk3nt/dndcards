const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        graphql(`
        {
            allDataJson {
                edges {
                    node {
                        shopkeepers {
                            name
                            city
                            cards
                            packs {
                                quantity
                                price
                            }
                        }
                    }
                }
            }
        }`).then(result => {
            result.data.allDataJson.edges.forEach(edge => {
                if (edge.node.shopkeepers) {
                    edge.node.shopkeepers.forEach((sk) => {
                        createPage({
                            path: `/shopkeepers/${sk.name.toLowerCase().split(" ").join("-")}`,
                            component: path.resolve(`./src/pages/shopkeeper.js`),
                            context: {
                                skname: sk.name,
                            },
                        });
                    });
                }
            });
            resolve();
        });
    });
};