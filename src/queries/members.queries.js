export const getAllMembers = `SELECT m.name AS 'nombre', m.last_name AS 'apellido', l.name AS 'nombre lider', l.last_name AS 'apellido lider'
	                            FROM member m 
                                JOIN cell c ON m.id_cell = c.id
                                JOIN member l ON l.id = c.id_guide`