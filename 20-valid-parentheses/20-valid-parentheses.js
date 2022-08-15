const matchMap = {
        '(': 0, ')': 0,
        '{': 1, '}': 1,
        '[': 2, ']': 2,
    };

const open = ['(', '{', '['];

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (open.indexOf(s[i]) !== -1) {
            stack.push(s[i]);
        } else if (matchMap[stack.at(-1)] === matchMap[s[i]]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};