class Sorter {
  constructor() {
	this.massiv = [];
	this.comparator = function(a,b)
	{return a-b;};
  }

  add(element) {
    this.massiv.push(element);
  }

  at(index) {
    return this.massiv[index];
  }

  get length() {
    return this.massiv.length;
  }

  toArray() {
    return this.massiv;
  }

  sort(indices) {
	indices.sort(function(a,b){return a-b;});
    let mas = [];
	
	for(let i=0;i< indices.length;i++)
		{mas.push(this.massiv[indices[i]]);}
	mas.sort(this.comparator);
	
	for(let i=0;i< indices.length;i++)
		{this.massiv[indices[i]]=mas[i];}
	return this.massiv;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;