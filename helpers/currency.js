export const penceToPounds = (price) => {
  if (!price) return;

  var string = price;

  if (typeof string !== 'string') {
    string = string.toString()
  }

  string = string.split('');

  if (string.length > 2) {
    var start = string.slice(0, string.length - 2);
    var end = string.slice(string.length - 2, string.length);
    return `£${start.join('')}.${end.join('')}`;
  }

  return '£0.' + string.join('');
}
