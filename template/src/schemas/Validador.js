import { plugin } from 'ajv-moment'
import Ajv from 'ajv'
import moment from 'moment'

var ajv = new Ajv({ allErrors: true, jsonPointers: true })

plugin({ ajv, moment })
require('ajv-errors')(ajv /*, {singleError: true} */)

export function validador(data, schema) {
    return new Promise((resolve, reject) => {
        var validate = ajv.compile(schema)

        if (validate(data)) {
            resolve()
        } else {
            let msg = validate.errors.map(error => {
                return error.message
            })

            reject(msg)
        }
    })
}
