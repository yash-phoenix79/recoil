import {atom, atomFamily, selector} from 'recoil'


export const networkAtom = atom({
    key: 'netWorkAtom',
    default: 102
});

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 8
});

export const notificationsAtom = atom({
    key: 'notificationsAtom',
    default: 16
});

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 7
});

export const totalNotificationsSelector = selector({
    key: 'totalNotificationsSelector',
    get: ({get})=>{
        const netWorkAtomCount= get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);
        return netWorkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
    }
})

export const asyncCount = atom({
    key: "asyncNetworkCount",
    default: selector({
        key: "asyncNetworkCountSelector",
        get: async()=>{
            //dummy backend request
            const res = await axios.get('///');
            return res.data;
        }
    })
})

const TODOS=[
    {
        key: 1,
        value: 'first'
    },
    {
        key: 2,
        value: 'seconded'
    },
    {
        key: 3,
        value: 'third'
    }
]

export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: id=>{
        return TODOS.find(x => x.key === id)
    }
})