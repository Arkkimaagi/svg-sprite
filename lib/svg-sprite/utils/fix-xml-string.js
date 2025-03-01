'use strict';

const { DOMParser } = require('@xmldom/xmldom');

/**
 * @param {string} svgString    svg string to fix
 * @returns {string}            fixed svg string
 */
module.exports = svgString => {
    let domParserError = false;
    const errorHandler = () => {
        domParserError = true;
    };

    const fixedSVG = new DOMParser({ errorHandler })
        .parseFromString(svgString)
        .toString()
        .replace(/(\s)(\s+)/g, ' ');

    if (!domParserError) {
        return fixedSVG;
    }

    const error = new Error('Invalid XML string');
    error.name = 'XMLFixingError';
    error.errno = 1_400_141_400;
    throw error;
};
