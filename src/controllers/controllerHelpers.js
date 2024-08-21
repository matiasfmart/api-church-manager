export const handleRequest = (serviceFunction) => async (req, res) => {
    try {
        const result = await serviceFunction();
        res.json(result);
    } catch (error) {
        console.error('Error en la solicitud:', error);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
};