function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const oggs = importAll(require.context('./data/ogg/', false, /\.(ogg)$/));

export default oggs;
export const pdfs = importAll(require.context('./data/pdf/', false, /\.(pdf)$/));