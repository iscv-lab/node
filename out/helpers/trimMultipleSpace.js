function trim(value) {
    return value.replace(/ +(?= )/g, "").trim();
}

export { trim };
