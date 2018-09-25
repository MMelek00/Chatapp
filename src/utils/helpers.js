export const truncate = (str, length) => {
    if (!str) {
        return "-";
    }
    if (length == null) {
        length = 100;
    }
    if (str.length > length) {
        return str.substring(0, length - 3) + "...";
    } else {
        return str;
    }
};
