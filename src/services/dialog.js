class Dialog {

    showDialog(buefy, title, text, typeDialog = 'is-success') {
        buefy.dialog.alert({
        title: title,
        message: text,
        type: typeDialog,
        ariaRole: "alertdialog",
        ariaModal: true,
        });
    }
}

export default new Dialog();