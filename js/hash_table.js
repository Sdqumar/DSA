function hashStringToInt(key, tableSize) {
  let hash = 33;

  for (let i = 0; i < key.length; i++) {
    hash = (13 * hash * key.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class TashTable {
  table = new Array(5381);
  numItems = 0;

  resize() {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  }

  setItem(key, value) {
    this.numItems++;
    const loadfactor = this.numItems / this.table.length;
    if (loadfactor > 0.8) {
      this.resize();
    }
    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  }

  getItem(key) {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) {
      return null;
    }
    //O(n)
    return this.table[idx].find((x) => x[0] === key)[1];
  }
}

const myTable = new TashTable();
myTable.setItem("firstName", "sadeeq");
myTable.setItem("lastName", "umar");
myTable.setItem("name", "abu");

console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
console.log(myTable.getItem("name"));
