import { makeAutoObservable } from "mobx";

class ChooseDateStore {
  constructor() {
    makeAutoObservable(this);
  }

  selectedDate = null;

  setDate(date) {
    if (this.selectedDate === date) {
      this.selectedDate = null;
    } else {
      this.selectedDate = date;
    }
  }
}

export const chooseDateStore = new ChooseDateStore();
