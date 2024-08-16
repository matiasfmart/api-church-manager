export const getAllMembers = `SELECT m.id, m.name AS 'name', m.last_name AS 'last_name', l.name AS 'guide_name', l.last_name AS 'guide_last_name'
	                            FROM member m 
                                JOIN cell c ON m.id_cell = c.id
                                JOIN member l ON l.id = c.id_guide`

export const getCellOptions = `SELECT c.id, CONCAT(m.name, ' ', m.last_name) AS name FROM cell c JOIN member m ON c.id_guide = m.id`

export const getAreaOptions = `SELECT a.id, CONCAT(m.name, ' ', m.last_name) AS name FROM area a JOIN member m ON a.id_leader = m.id`