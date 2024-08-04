export const getAllMembers = `SELECT m.id, m.name AS 'name', m.last_name AS 'last_name', l.name AS 'guide_name', l.last_name AS 'guide_last_name'
	                            FROM member m 
                                JOIN cell c ON m.id_cell = c.id
                                JOIN member l ON l.id = c.id_guide`