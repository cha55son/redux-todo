class TodoItemModel {
    constructor(options) {
        this.ensureParam(options, 'title',     'string',  'n/a')
        this.ensureParam(options, 'completed', 'boolean', false)
    }
    ensureParam(options, propName, typeStr, defaultValue = '') {
        let typeOf = typeof options[propName]
        if (typeOf === 'undefined' || typeOf !== typeStr) {
            this[propName] = defaultValue;
        } else {
            this[propName] = options[propName];
        }
    }
}

export default TodoItemModel
