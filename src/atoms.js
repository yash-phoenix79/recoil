import {atom, selector} from 'recoil'


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