// esporta a lista de salas


const listaSalas = [
    {
        title: 'Sala 1',
        description: 'Sala de estar',
        price: 'R$ 100,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        title: 'Sala 2',
        description: 'Sala de jantar',
        price: 'R$ 200,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://plus.unsplash.com/premium_photo-1661928005866-864c961775ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        title: 'Sala 3',
        description: 'Sala de TV',
        price: 'R$ 300,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://images.unsplash.com/photo-1651932809880-bfd75fe113e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Sala 1',
        description: 'Sala de estar',
        price: 'R$ 100,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        title: 'Sala 2',
        description: 'Sala de jantar',
        price: 'R$ 200,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://plus.unsplash.com/premium_photo-1661928005866-864c961775ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        title: 'Sala 3',
        description: 'Sala de TV',
        price: 'R$ 300,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Sala 1',
        description: 'Sala de estar',
        price: 'R$ 100,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        title: 'Sala 2',
        description: 'Sala de jantar',
        price: 'R$ 200,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://plus.unsplash.com/premium_photo-1661928005866-864c961775ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        title: 'Sala 3',
        description: 'Sala de TV',
        price: 'R$ 300,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Sala 1',
        description: 'Sala de estar',
        price: 'R$ 100,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        title: 'Sala 2',
        description: 'Sala de jantar',
        price: 'R$ 200,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://plus.unsplash.com/premium_photo-1661928005866-864c961775ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        title: 'Sala 3',
        description: 'Sala de TV',
        price: 'R$ 300,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Sala 1',
        description: 'Sala de estar',
        price: 'R$ 100,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        title: 'Sala 2',
        description: 'Sala de jantar',
        price: 'R$ 200,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://plus.unsplash.com/premium_photo-1661928005866-864c961775ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        title: 'Sala 3',
        description: 'Sala de TV',
        price: 'R$ 300,00',
        location: 'Rua dos Bobos, nº 0',
        image: 'https://images.unsplash.com/photo-1601944177325-f8867652837f?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

export default listaSalas;