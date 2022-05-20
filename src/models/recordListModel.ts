import clone from '@/lib/clone';

const localStorageName = 'recordList';
const recordListModel = {
    data: [] as RecordItem[],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]') as RecordItem[];
        return this.data;
    },
    create(record: RecordItem) {
        const record2: RecordItem = clone(record);
        record2.createAt = new Date();
        this.data.push(record2);
    },
    sava() {
        window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
    }
};

export default recordListModel;