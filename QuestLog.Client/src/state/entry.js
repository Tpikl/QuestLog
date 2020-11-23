export const InitialState =  {
    id: null,
    title: '',
    description: '',
    date: new Date(),
    endDate: null,
    completed: false,
    displayArea: 0,
    userId: ''
};

export const DisplayAreas = {
    Day: {id: 0, name: '[[Replace Me]]'},
    Todo: {id: 1, name: 'To Do'},
    Note: {id: 2, name: 'Notes'}
}