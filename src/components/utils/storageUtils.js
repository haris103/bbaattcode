export const clearStorage = (account) => {
    console.log(account);
    const clientID = "880aa5a5-fc83-4113-92ab-0f85c07600a7"
    for (var key in sessionStorage) {
        if (key.startsWith(`cc.${clientID}.${account.idTokenClaims.oid}`)) sessionStorage.removeItem(key);
    }
};