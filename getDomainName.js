function getDomainName (url) {
    const regex = /\b(?<=[\/.])[^www.][a-z-]+[a-z-]+(?=[.\w]{1,4})\b/g;
    const found = url.match(regex);
    console.log('this is result: ' + found[0]);
    return found.toString();
}

module.exports = getDomainName;