class Util{
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

    getHtmlError(errorResponse) {
        const errorsArray = errorResponse.data.errors
        return `<span>${errorsArray.join('<br/>')}</span>`
    }

    handleError(error, dialogCallback) {
        console.error(`[status:${error.status}][error:${error.response}]`)
        dialogCallback(this.getHtmlError(error.response), 'SERVER_ERROR')
    }

    handleGenericError(error, dialogCallback) {
        console.error(`[status:${error.status}][error:${error}]`)
        dialogCallback('<span>Ocurrió un error en el servidor</span>', 'SERVER_ERROR')
    }
}

export default new Util();