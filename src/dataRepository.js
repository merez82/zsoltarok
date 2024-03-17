function importAll(r) {
    let images = {};
    // eslint-disable-next-line array-callback-return
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const oggs = importAll(require.context('./data/ogg/', false, /\.(ogg)$/));
const pdfs = importAll(require.context('./data/pdf/', false, /\.(pdf)$/));

function getOgg(oggFile){
    return getFile(oggs, oggFile);
}

function getPdf(pdfFile){
    return getFile(pdfs, pdfFile);
}

function getFile(container, fileName) {
    try {
        return container[fileName];
    }
    catch {
        return null;
    }
}

export default getOgg;
export { getPdf };