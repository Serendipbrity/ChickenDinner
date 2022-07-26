// ------ SAMPLE DATA ------

const stores = [
    {
        id: '1',
        routeOrder: 1,
        storeName: 'Store 1',
        storeAddress: '123 Main St',
        region: 'Region 1',
        contactName: 'John Doe',
        contactInfo: '123-456-7890',
        whenCanContact: 'Monday - Friday',
        gameId: '1'
    },
    {
        id: '2',
        routeOrder: 2,
        storeName: 'Store 2',
        storeAddress: '456 Main St',
        region: 'Region 2',
        contactName: 'Jane Doe',
        contactInfo: '123-456-7890',
        whenCanContact: 'Monday - Friday',
        gameId: '3'
    },
    {
        id: '3',
        routeOrder: 3,
        storeName: 'Store 3',
        storeAddress: '789 Main St',
        region: 'Region 3',
        contactName: 'John Doe',
        contactInfo: '123-456-7890',
        whenCanContact: 'Monday - Friday',
        gameId: ['1', '2', '2']
    },
    {
        id: '4',
        routeOrder: 4,
        storeName: 'Store 4',
        storeAddress: '123 Main St',
        region: 'Region 1',
        contactName: 'John Doe',
        contactInfo: '123-456-7890',
        whenCanContact: 'Monday - Friday',
        gameId: ['4', '5', '6']
    },
    {
        id: '5',
        routeOrder: 5,
        storeName: 'Store 5',
        storeAddress: '456 Main St',
        region: 'Region 2',
        contactName: 'Jane Doe',
        contactInfo: '123-456-7890',
        whenCanContact: 'Monday - Friday',
        gameId: ['4', '5', '6']
    },
    {
        id: '6',
        routeOrder: 6,
        storeName: 'Store 6',
        storeAddress: '789 Main St',
        region: 'Region 3',
        contactName: 'John Doe',
        contactInfo: '123-456-7890',
        whenCanContact: 'Monday - Friday',
        gameId: ['4', '3', '6']
    },
    {
        id: '7',
        routeOrder: 7,
        storeName: 'Store 7',
        storeAddress: '123 Main St',
        region: 'Region 1',
        contactName: 'John Doe',
        contactInfo: '123-456-7890',
        whenCanContact: 'Monday - Friday',
        gameId: ['7', '8', '9']
    },
    {
        id: '8',
        routeOrder: 8,
        storeName: 'Store 8',
        storeAddress: '456 Main St',
        region: 'Region 2',
        contactName: 'Jane Doe',
        contactInfo: '123-456-7890',
        whenCanContact: 'Monday - Friday',
        gameId: ['7', '8', '9']
    }, 
    {
        id: '9',
        routeOrder: 9,
        storeName: 'Store 9',
        storeAddress: '789 Main St',
        region: 'Region 3',
        contactName: 'John Doe',
        contactInfo: '123-456-7890',
        whenCanContact: 'Monday - Friday',
        gameId: ['7', '8', '9']
    },
    {
        id: '10',
        routeOrder: 10,
        storeName: 'Store 10',
        storeAddress: '123 Main St',
        region: 'Region 1',
        contactName: 'John Doe',
        contactInfo: '123-456-7890',
        whenCanContact: 'Monday - Friday',
        gameId: ['10', '11', '12']
    },
    {
        id: '11',
        routeOrder: 11,
        storeName: 'Store 11',
        storeAddress: '456 Main St',
        region: 'Region 2',
        contactName: 'Jane Doe',
        contactInfo: '123-456-7890',
        whenCanContact: 'Monday - Friday',
        gameId: ['8', '10', '12']
    },
    {
        id: '12',
        routeOrder: 12,
        storeName: 'Store 12',
        storeAddress: '789 Main St',
        region: 'Region 3',
        contactName: 'John Doe',
        contactInfo: '123-456-7890',
        whenCanContact: 'Monday - Friday',
        gameId: ['1', '11', '12']
    }

]

const games = [
    {
        id: '1',
        gameBrand: 'Game Brand 1',
        gameType: 'Game Type 1'
    },
    {
        id: '2',
        gameBrand: 'Game Brand 2',
        gameType: 'Game Type 2'
    },
    {
        id: '3',
        gameBrand: 'Game Brand 3',
        gameType: 'Game Type 3'
    },
    {
        id: '4',
        gameBrand: 'Game Brand 4',
        gameType: 'Game Type 4'
    },
    {
        id: '5',
        gameBrand: 'Game Brand 5',
        gameType: 'Game Type 5'
    },
    {
        id: '6',
        gameBrand: 'Game Brand 6',
        gameType: 'Game Type 6'
    },
    {
        id: '7',
        gameBrand: 'Game Brand 7',
        gameType: 'Game Type 7'
    },
    {
        id: '8',
        gameBrand: 'Game Brand 8',
        gameType: 'Game Type 8'
    },
    {
        id: '9',
        gameBrand: 'Game Brand 9',
        gameType: 'Game Type 9'
    },
    { 
        id: '10',
        gameBrand: 'Game Brand 10',
        gameType: 'Game Type 10'
    },
    {
        id: '11',
        gameBrand: 'Game Brand 11',
        gameType: 'Game Type 11'
    },
    {
        id: '12',
        gameBrand: 'Game Brand 12',
        gameType: 'Game Type 12'
    }
]

const regions = [
    {
        id: '1',
        regionName: 'Region 1',
        storeId: '1'
    },
    {
        id: '2',
        regionName: 'Region 2',
        storeId: ['2', '5']
    },
    {
        id: '3',
        regionName: 'Region 3',
        storeId: ['3']  
    },
    {
        id: '4',
        regionName: 'Region 4',
        storeId: ['6', '7']

    },
    {
        id: '5',
        regionName: 'Region 5',
        storeId: ['8', '9']
    },
    {
        id: '6',
        regionName: 'Region 6',
        storeId: ['10', '11']
    }
]

const users = [
    {
        id: '1',
        username: 'bcourt95',
        password: 'bcourt',
        email: 'bcourt@gmail.com'
    },
    {
        id: '2',
        username: 'terrance',
        password: 'terrance',
        email: 'terry@gmail.com'
    },
    {
        id: '3',
        username: 'user2',
        password: 'user2',
        email: 'user2@gmail.com'
    },
    {
        id: '4',
        username: 'user3',
        password: 'user3',
        email: 'user3@gmail.com'
    },
    {
        id: '5',
        username: 'user4',
        password: 'user4',
        email: 'user4@gmail.com'
    },
    {
        id: '6',
        username: 'user5',
        password: 'user5',
        email: 'user5@gmail.com',
    }
]

module.exports = { users, stores, regions, games }