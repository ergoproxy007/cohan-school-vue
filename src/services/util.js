class Util {
    toSnakeCase(obj) {
        const result = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
                result[snakeKey] = obj[key];
            }
        }
        return result;
    }

    keysToCamelCase(obj) {
        const result = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
            const camelKey = key.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
            result[camelKey] = obj[key];
            }
        }
        return result;
    }

    getHtmlError(errorResponse, message) {
        const preMessage = message ? message.concat('<br/>') : ''
        const errorsArray = errorResponse.data.errors
        return `<span>${preMessage}${errorsArray.join('<br/>')}</span>`
    }

    handleError(error, dialogCallback, defaultMessage = 'Ha ocurrido un error') {
        console.error(`[status:${error.status}][error:${error.response}]`)
        dialogCallback(this.getHtmlError(error.response, defaultMessage), error.status, 'SERVER_ERROR')
    }

    handleGenericError(error, dialogCallback) {
        console.error(`[status:${error.status}][error:${error}]`)
        dialogCallback('<span>Ocurrió un error en el servidor</span>', error.status, 'SERVER_ERROR')
    }
}

export default new Util();