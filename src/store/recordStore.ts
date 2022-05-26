import clone from "@/lib/clone";

const localStorageName = "recordList";

const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(
      window.localStorage.getItem(localStorageName) || "[]"
    ) as RecordItem[];
    return this.recordList;
  },
  savaRecords() {
    window.localStorage.setItem(
      localStorageName,
      JSON.stringify(this.recordList)
    );
  },
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createAt = new Date().toISOString();
    this.recordList?.push(record2);
    recordStore.savaRecords();
  },
};

recordStore.fetchRecords();

export default recordStore;
