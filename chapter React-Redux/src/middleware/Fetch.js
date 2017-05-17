import * as TYPES  from '../constants/docs'
import * as docActions  from '../actions/docs'


function parseJSON(response) {
    const contentType = response.headers.get('content-type');

    if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json();
    }

    return response;
}

function checkError(response) {
    if (response.ok === false || response.status >= 400) {
        const error = new Error(response.status);
        error.response = response;
        throw error;
    }

    return response;
}

let ROOT_PATH = '';

export function setRootPath( url) {
    ROOT_PATH = url;
}

const config = {
};

export function rawFetchPromise( url, method = 'GET', body = undefined) {
    const fullPath = ROOT_PATH + url
    let opts = {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }
    if (body)
        opts.body = JSON.stringify(body)

    return fetch( fullPath, opts)
        .then(parseJSON)
        .then(checkError);
}

export default store => next => action => {
    config.dispatch = store.dispatch
    const returnValue = next(action)

    switch (action.type) {
        case TYPES.READ:
            readStart(action.path)
            break
        case TYPES.CREATE:
            createStart(action.path, action)
            break
        case TYPES.DELETE:
            delStart(action)
            break
        case TYPES.UPDATE:
            updateStart(action)
            break
    }
    return returnValue
}

/**
 *
 * @param path   the path to read. path is the type of doc to read
 */
function readStart(path) {
    return rawFetchPromise( path)
        .then(result => {
            config.dispatch(docActions.readSuccess(path, result))
        })
        .catch(err => {
            config.dispatch(docActions.crudError(TYPES.READ_ERROR, path, err))
        });
}


function createStart(path, doc) {
    return rawFetchPromise( path, 'post', doc)
        .then(result => {
            config.dispatch(docActions.createSuccess(result))
        })
        .catch(err => {
            config.dispatch(docActions.crudError(TYPES.CREATE_ERROR, path, err))
        });
}

function updateStart(aDoc) {
    return rawFetchPromise( aDoc.path + '/' + aDoc.id, 'put', aDoc)
        .then(result => {
            config.dispatch(docActions.updateSuccess(aDoc.path, result))
        })
        .catch(err => {
            config.dispatch(docActions.crudError(TYPES.UPDATE_ERROR, aDoc.path, err))
        });
}

function delStart(aDoc) {
    return rawFetchPromise( aDoc.path + '/' + aDoc.id, 'delete', aDoc)
        .then(result => {
            config.dispatch(docActions.delSuccess(aDoc))
        })
        .catch(err => {
            config.dispatch(docActions.crudError(TYPES.DELETE_ERROR, aDoc.path, err))
        });
}

