function getElementWidth(content, padding, border) {
    return (
        Number.parseFloat(content) +
        Number.parseFloat(padding) * 2 +
        Number.parseFloat(border) * 2
    );
}
function logWithSeparator(message) {
    console.log(
        '%c ',
        'background: brown; color: brown; padding: 10px ; font-size: 20px;'
    );
    console.log(
        `%c${message}`,
        'background: white; color: black; padding: 8px; font-size: 16px; font-weight: bold;'
    );
}