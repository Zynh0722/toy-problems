/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const st = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const end = Math.floor(st.length / 2);
    for (let i = 0; i < end; i++) {
        if (st[i] !== st[st.length - i - 1]) {
            return false
        }
    }
    return true;
};