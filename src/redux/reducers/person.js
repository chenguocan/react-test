const personArray = []
export default function addPerson(preState = personArray, action) {
    const { type, data } = action
    console.log(data)

    switch (type) {
        case 'addPerson':
            return [data,...preState]
        default:
            return preState
    }
}