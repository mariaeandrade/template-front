import {
    HardDrive,
    KeyRound,
    Layers3,
    List,
    PlusCircle,
    Server,
    SquarePen,
    Trash2,
} from 'lucide-react'

export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista séries com api-key exposta.',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista séries renderizadas no SSR.',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        verb: 'Get',
        description: 'Lista séries salvas no sessionStorage.',
        Icon: HardDrive,
    },
    {
        id: 4,
        method: 'FullStack',
        verb: 'Get',
        description: 'Lista séries via API Route - BackEnd Intermediário.',
        Icon: Layers3,
    },
];

export const crud = [
    {
        id: 1,
        method: 'Create',
        verb: 'Post',
        description: 'Cria série via modal e API route',
        Icon: PlusCircle,
    },
    {
        id: 2,
        method: 'Read',
        verb: 'Get',
        description: 'Lista séries via modal e API route',
        Icon: List,
    },

];