export const getErrorValueDiscord = (valueDiscord) => {
    if (valueDiscord.length > 0) {
        if (valueDiscord.indexOf("#") > -1) {
            if (valueDiscord.indexOf("#") > 0) {
                const code = valueDiscord.split("#")[1]
                if (code.length === 4) {
                    if (!isNaN(code)) {
                        return undefined;
                    }

                    return "Код должен состоять из цыфр";
                }

                return "Код должен быть 4 цифры";
            }

            return "Должен содержать ник";
        }

        return "Должен содержать хештег";
    }

    return "Не может быть пустым значением";
}

export const getErrorValueAvatar = (valueAvatar) => {
    if (!!valueAvatar.length) {
        if (valueAvatar.indexOf("avtr_") > -1) {
            if (valueAvatar.split("avtr_")[1].length > 7) {
                if (valueAvatar.split("-").length === 5) {
                    return undefined;
                }
            }
        }

        return "Должен содержать id аватара";
    }

    return "Не может быть пустым значением";
}

export const getErrorUrl = (urlValue) => {
    if (!!urlValue.length) {
        if (urlValue.indexOf("https://") > -1) {
            if (urlValue.indexOf(".") > -1) {
                    return undefined;
            }
        }

        return "Должен содержать ссылку на облако";
    }

    return "Не может быть пустым значением";
}