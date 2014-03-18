var PageResults = {
	content : 'unset',
	pageNumber : 'unset',
	pageSize : 'unset',
	totalElements : 'unset',
	totalPages : 'unset',
	firstPage : '',
	lastPage : '',

	calculate : function() {
		// console.log('setting totalPages');
		this.totalPages = Math.ceil(this.totalElements / this.pageSize);
		if (this.pageNumber == 1) {
			this.firstPage = true;
		} else {
			this.firstPage = false;
		}
		if (this.pageNumber >= this.totalPages) {
			this.lastPage = true;
		} else {
			this.lastPage = false;
		}
	}
};

module.exports = PageResults;