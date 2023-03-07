const list = ['1', '2', '3', '4', '5', '6']

const loadList = async () => await new Promise(resolve => resolve(list))
export default loadList;