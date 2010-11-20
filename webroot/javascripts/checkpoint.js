function Checkpoint(title, description) {
	this.id = -1
	this.concern_id = -1
	this.title = title
	this.description = description
	this.comment = ''
}

Checkpoint.prototype.create = function(tx, concern_id) {
	tx.executeSql("INSERT INTO checkpoints (concern_id, title, description, comment) VALUES (?, ?, ?, ?)", 
		[concern_id, this.title, this.description, this.comment], null, null)
}